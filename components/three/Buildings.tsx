"use client";
import { useLayoutEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  CITY_COLORS,
  fogGlsl,
  fogUniforms,
  hashGlsl,
  makeRandom,
} from "./cityShared";

// `position`, `normal`, `uv` and `instanceMatrix` are declared by three's own
// ShaderMaterial prefix — redeclaring any of them is a compile error.
const vertexShader = /* glsl */ `
  attribute vec3 aSize;
  attribute float aSeed;

  varying vec2 vUv;
  varying vec3 vNormalW;
  varying float vSeed;
  varying vec2 vCells;
  varying float vDepth;
  varying float vUp;

  void main() {
    vUv = uv;
    vSeed = aSeed;

    vec3 n = normalize(mat3(instanceMatrix) * normal);
    vNormalW = n;
    vUp = abs(normal.y);

    // Window grid density follows the real face size, so a wide tower and a
    // narrow one end up with the same window size rather than the same count.
    float horiz = abs(normal.x) > 0.5 ? aSize.z : aSize.x;
    vCells = vec2(
      max(floor(horiz / 0.30), 1.0),
      max(floor(aSize.y / 0.36), 1.0)
    );

    vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uFacade;
  uniform vec3 uWindowWarm;
  uniform vec3 uWindowCool;
  uniform float uTime;

  varying vec2 vUv;
  varying vec3 vNormalW;
  varying float vSeed;
  varying vec2 vCells;
  varying float vDepth;
  varying float vUp;

  ${hashGlsl}
  ${fogGlsl}

  void main() {
    // Faces angled toward the city core catch a little more ambient glow.
    float facing = 0.62 + 0.38 * abs(dot(vNormalW, normalize(vec3(0.55, 0.15, 0.82))));
    vec3 col = uFacade * facing;

    if (vUp < 0.5) {
      vec2 g = vUv * vCells;
      vec2 cell = floor(g);
      vec2 f = fract(g);

      // Window pane inset inside its cell, leaving the slab between floors.
      vec2 a = step(vec2(0.16, 0.20), f);
      vec2 b = step(f, vec2(0.84, 0.74));
      float inWindow = a.x * a.y * b.x * b.y;

      float r = hash21(cell + vSeed * 37.0);
      float lit = step(0.42, r);

      // A handful of windows switch state every few seconds — enough to read
      // as a living city, far too sparse to be distracting behind text.
      float blink = step(0.988, hash21(cell + floor(uTime * 0.5) + vSeed * 11.0));
      lit = clamp(lit - blink, 0.0, 1.0);

      vec3 tint = mix(uWindowWarm, uWindowCool, step(0.68, hash21(cell * 1.7 + vSeed)));
      col = mix(col, tint, inWindow * lit * 0.92);
    }

    gl_FragColor = vec4(applyFog(col, vDepth), 1.0);
  }
`;

interface BuildingsProps {
  count: number;
}

export default function Buildings({ count }: BuildingsProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const { sizes, seeds, matrices } = useMemo(() => {
    const rand = makeRandom(20260816);
    const dummy = new THREE.Object3D();
    const sizeArr = new Float32Array(count * 3);
    const seedArr = new Float32Array(count);
    const mats: THREE.Matrix4[] = [];

    for (let i = 0; i < count; i++) {
      const x = (rand() - 0.5) * 62;
      const z = -10 - rand() * 50;

      // Distance from the downtown core drives height: a dense cluster of
      // towers straight ahead, low-rise spreading out to the sides.
      const coreDist = Math.hypot(x * 0.55, (z + 34) * 0.4);
      const coreFalloff = Math.max(0, 1 - coreDist / 15);
      const h =
        1.3 +
        rand() * 2.4 +
        coreFalloff * coreFalloff * (4 + rand() * 9);

      const w = 0.9 + rand() * 1.5;
      const d = 0.9 + rand() * 1.5;

      dummy.position.set(x, h / 2, z);
      dummy.rotation.set(0, rand() * 0.5 - 0.25, 0);
      dummy.scale.set(w, h, d);
      dummy.updateMatrix();
      mats.push(dummy.matrix.clone());

      sizeArr[i * 3] = w;
      sizeArr[i * 3 + 1] = h;
      sizeArr[i * 3 + 2] = d;
      seedArr[i] = rand() * 100;
    }

    return { sizes: sizeArr, seeds: seedArr, matrices: mats };
  }, [count]);

  useLayoutEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    matrices.forEach((m, i) => mesh.setMatrixAt(i, m));
    mesh.instanceMatrix.needsUpdate = true;
    mesh.computeBoundingSphere();
  }, [matrices]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uFacade: { value: new THREE.Color(CITY_COLORS.facade) },
      uWindowWarm: { value: new THREE.Color(CITY_COLORS.windowWarm) },
      uWindowCool: { value: new THREE.Color(CITY_COLORS.windowCool) },
      ...fogUniforms(0.019),
    }),
    []
  );

  useFrame((_, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 1, 1]}>
        <instancedBufferAttribute attach="attributes-aSize" args={[sizes, 3]} />
        <instancedBufferAttribute attach="attributes-aSeed" args={[seeds, 1]} />
      </boxGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </instancedMesh>
  );
}
