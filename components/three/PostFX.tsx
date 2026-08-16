"use client";
import { useCallback, useEffect, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const quadVertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const brightFragment = /* glsl */ `
  uniform sampler2D tScene;
  uniform float uThreshold;
  uniform float uKnee;
  varying vec2 vUv;

  void main() {
    vec3 c = texture2D(tScene, vUv).rgb;
    float l = max(c.r, max(c.g, c.b));
    float t = clamp((l - uThreshold) / max(uKnee, 1e-4), 0.0, 1.0);
    gl_FragColor = vec4(c * t, 1.0);
  }
`;

const blurFragment = /* glsl */ `
  uniform sampler2D tSrc;
  uniform vec2 uDir;
  varying vec2 vUv;

  void main() {
    vec3 sum = texture2D(tSrc, vUv).rgb * 0.227027;
    vec2 o1 = uDir * 1.3846153846;
    vec2 o2 = uDir * 3.2307692308;
    sum += (texture2D(tSrc, vUv + o1).rgb + texture2D(tSrc, vUv - o1).rgb) * 0.3162162162;
    sum += (texture2D(tSrc, vUv + o2).rgb + texture2D(tSrc, vUv - o2).rgb) * 0.0702702703;
    gl_FragColor = vec4(sum, 1.0);
  }
`;

const compositeFragment = /* glsl */ `
  uniform sampler2D tScene;
  uniform sampler2D tBloomNear;
  uniform sampler2D tBloomWide;
  uniform float uBloom;
  uniform float uExposure;
  uniform float uVignette;
  uniform float uGrain;
  uniform float uTime;
  varying vec2 vUv;

  // ACES filmic curve — the shoulder is what stops bright windows from
  // clipping to flat white and keeps highlights looking photographed.
  vec3 aces(vec3 x) {
    const float a = 2.51;
    const float b = 0.03;
    const float c = 2.43;
    const float d = 0.59;
    const float e = 0.14;
    return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
  }

  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  void main() {
    vec3 scene = texture2D(tScene, vUv).rgb;
    vec3 near = texture2D(tBloomNear, vUv).rgb;
    vec3 wide = texture2D(tBloomWide, vUv).rgb;

    // Two radii: a tight halo on each light plus a broad atmospheric haze.
    vec3 col = scene + (near * 0.75 + wide * 1.25) * uBloom;

    col *= uExposure;
    col = aces(col);

    vec2 d = vUv - 0.5;
    col *= clamp(1.0 - dot(d, d) * uVignette, 0.0, 1.0);

    float g = hash21(vUv * 1024.0 + fract(uTime) * 91.7) - 0.5;
    col += g * uGrain;

    // Custom shaders bypass three's automatic output encoding.
    col = pow(max(col, 0.0), vec3(1.0 / 2.2));

    gl_FragColor = vec4(col, 1.0);
  }
`;

interface PostFXProps {
  /** Lower tier renders bloom at a coarser fraction of the frame. */
  low: boolean;
  bloom?: number;
  exposure?: number;
}

export default function PostFX({ low, bloom = 0.55, exposure = 0.85 }: PostFXProps) {
  const { gl, scene, camera } = useThree();

  const bloomDiv = low ? 6 : 4;

  const rig = useMemo(() => {
    const makeRT = (linear = true) =>
      new THREE.WebGLRenderTarget(1, 1, {
        type: THREE.HalfFloatType,
        minFilter: linear ? THREE.LinearFilter : THREE.NearestFilter,
        magFilter: linear ? THREE.LinearFilter : THREE.NearestFilter,
        depthBuffer: false,
        stencilBuffer: false,
      });

    const sceneRT = new THREE.WebGLRenderTarget(1, 1, {
      type: THREE.HalfFloatType,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthBuffer: true,
      stencilBuffer: false,
    });

    const bright = makeRT();
    const pingA = makeRT();
    const pingB = makeRT();
    const wideA = makeRT();
    const wideB = makeRT();

    const brightMat = new THREE.ShaderMaterial({
      vertexShader: quadVertex,
      fragmentShader: brightFragment,
      uniforms: {
        tScene: { value: null },
        uThreshold: { value: 0.85 },
        uKnee: { value: 0.55 },
      },
      depthTest: false,
      depthWrite: false,
    });

    const blurMat = new THREE.ShaderMaterial({
      vertexShader: quadVertex,
      fragmentShader: blurFragment,
      uniforms: { tSrc: { value: null }, uDir: { value: new THREE.Vector2() } },
      depthTest: false,
      depthWrite: false,
    });

    const compositeMat = new THREE.ShaderMaterial({
      vertexShader: quadVertex,
      fragmentShader: compositeFragment,
      uniforms: {
        tScene: { value: null },
        tBloomNear: { value: null },
        tBloomWide: { value: null },
        uBloom: { value: bloom },
        uExposure: { value: exposure },
        uVignette: { value: 0.62 },
        uGrain: { value: 0.022 },
        uTime: { value: 0 },
      },
      depthTest: false,
      depthWrite: false,
    });

    const quadScene = new THREE.Scene();
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), brightMat);
    quad.frustumCulled = false;
    quadScene.add(quad);
    const quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    return {
      sceneRT,
      bright,
      pingA,
      pingB,
      wideA,
      wideB,
      brightMat,
      blurMat,
      compositeMat,
      quadScene,
      quad,
      quadCam,
    };
  }, [bloom, exposure]);

  useEffect(() => {
    return () => {
      [rig.sceneRT, rig.bright, rig.pingA, rig.pingB, rig.wideA, rig.wideB].forEach(
        (t) => t.dispose()
      );
      [rig.brightMat, rig.blurMat, rig.compositeMat].forEach((m) => m.dispose());
      rig.quad.geometry.dispose();
    };
  }, [rig]);

  const renderFrame = useCallback(
    (elapsed = 0) => {
      const db = gl.getDrawingBufferSize(new THREE.Vector2());
      const w = Math.max(1, Math.floor(db.x));
      const h = Math.max(1, Math.floor(db.y));
      const bw = Math.max(1, Math.floor(w / bloomDiv));
      const bh = Math.max(1, Math.floor(h / bloomDiv));
      const ww = Math.max(1, Math.floor(w / (bloomDiv * 2)));
      const wh = Math.max(1, Math.floor(h / (bloomDiv * 2)));

      if (rig.sceneRT.width !== w || rig.sceneRT.height !== h) {
        rig.sceneRT.setSize(w, h);
        rig.bright.setSize(bw, bh);
        rig.pingA.setSize(bw, bh);
        rig.pingB.setSize(bw, bh);
        rig.wideA.setSize(ww, wh);
        rig.wideB.setSize(ww, wh);
      }

      const drawQuad = (
        mat: THREE.ShaderMaterial,
        target: THREE.WebGLRenderTarget | null
      ) => {
        rig.quad.material = mat;
        gl.setRenderTarget(target);
        gl.render(rig.quadScene, rig.quadCam);
      };

      // 1. Scene into an HDR buffer so window emissives can exceed 1.0.
      gl.setRenderTarget(rig.sceneRT);
      gl.clear();
      gl.render(scene, camera);

      // 2. Isolate the lights.
      rig.brightMat.uniforms.tScene.value = rig.sceneRT.texture;
      drawQuad(rig.brightMat, rig.bright);

      // 3. Tight halo.
      rig.blurMat.uniforms.tSrc.value = rig.bright.texture;
      rig.blurMat.uniforms.uDir.value.set(1 / bw, 0);
      drawQuad(rig.blurMat, rig.pingA);
      rig.blurMat.uniforms.tSrc.value = rig.pingA.texture;
      rig.blurMat.uniforms.uDir.value.set(0, 1 / bh);
      drawQuad(rig.blurMat, rig.pingB);

      // 4. Broad haze, blurred again at half that resolution.
      rig.blurMat.uniforms.tSrc.value = rig.pingB.texture;
      rig.blurMat.uniforms.uDir.value.set(2.4 / ww, 0);
      drawQuad(rig.blurMat, rig.wideA);
      rig.blurMat.uniforms.tSrc.value = rig.wideA.texture;
      rig.blurMat.uniforms.uDir.value.set(0, 2.4 / wh);
      drawQuad(rig.blurMat, rig.wideB);

      // 5. Tone map and grade to the screen.
      rig.compositeMat.uniforms.tScene.value = rig.sceneRT.texture;
      rig.compositeMat.uniforms.tBloomNear.value = rig.pingB.texture;
      rig.compositeMat.uniforms.tBloomWide.value = rig.wideB.texture;
      rig.compositeMat.uniforms.uTime.value = elapsed;
      drawQuad(rig.compositeMat, null);
    },
    [gl, scene, camera, rig, bloomDiv]
  );

  // priority > 0 takes rendering over from R3F's default loop.
  useFrame((state) => {
    renderFrame(state.clock.elapsedTime);
  }, 1);

  return null;
}
