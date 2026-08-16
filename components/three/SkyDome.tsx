"use client";
import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { hashGlsl } from "./cityShared";

// Fullscreen quad: ignore the matrices entirely and write clip space directly.
const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.9999, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform float uTime;
  uniform float uAspect;
  uniform vec3 uZenith;
  uniform vec3 uHorizon;
  uniform vec3 uGlow;

  varying vec2 vUv;

  ${hashGlsl}

  void main() {
    float y = vUv.y;

    // Night sky darkening upward, with the city's light pollution bleeding
    // up off the horizon — the single strongest cue that this is a big city
    // at night rather than open country.
    vec3 col = mix(uHorizon, uZenith, pow(clamp(y, 0.0, 1.0), 0.62));

    float glowBand = exp(-pow((y - 0.30) * 3.4, 2.0));
    float glowLateral = exp(-pow((vUv.x - 0.5) * 1.9, 2.0));
    col += uGlow * glowBand * (0.45 + 0.55 * glowLateral);

    // Sparse stars, fading out near the horizon where the glow drowns them.
    vec2 cell = floor(vUv * vec2(240.0 * uAspect, 240.0));
    float r = hash21(cell);
    float star = step(0.9975, r);
    float twinkle = 0.65 + 0.35 * sin(uTime * 1.6 + r * 90.0);
    col += vec3(0.85, 0.92, 1.0) * star * twinkle * smoothstep(0.35, 0.95, y) * 0.9;

    gl_FragColor = vec4(col, 1.0);
  }
`;

/**
 * The sky is drawn inside WebGL rather than left to the CSS gradient so the
 * bloom pass has real pixels to bleed into — light spilling off the skyline
 * into the sky is most of what makes a night city read as photographed.
 */
export default function SkyDome() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { size } = useThree();
  const aspect = size.width / Math.max(size.height, 1);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAspect: { value: aspect },
      uZenith: { value: new THREE.Color("#01040f") },
      uHorizon: { value: new THREE.Color("#0a1c47") },
      uGlow: { value: new THREE.Color("#2a4d8f") },
    }),
    []
  );

  useFrame((_, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
      materialRef.current.uniforms.uAspect.value = aspect;
    }
  });

  return (
    <mesh frustumCulled={false} renderOrder={-1000}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}
