"use client";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uAmplitude;
  varying vec2 vUv;
  varying float vElevation;

  void main() {
    vUv = uv;

    vec3 pos = position;
    float e = 0.0;
    e += sin(pos.x * 0.55 + uTime * 0.42) * 0.55;
    e += sin(pos.y * 0.40 - uTime * 0.30) * 0.45;
    e += sin((pos.x + pos.y) * 0.26 + uTime * 0.20) * 0.62;
    e += sin(pos.x * 1.10 - uTime * 0.55) * 0.15;
    e *= uAmplitude;

    pos.z += e;
    vElevation = e;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uColorLow;
  uniform vec3 uColorHigh;
  uniform float uOpacity;
  uniform float uCells;
  varying vec2 vUv;
  varying float vElevation;

  // Procedural grid drawn on the surface, so the whole wave is one draw call.
  float gridLine(vec2 uv, float cells, float w) {
    vec2 g = abs(fract(uv * cells - 0.5) - 0.5);
    vec2 l = smoothstep(w, 0.0, g);
    return max(l.x, l.y);
  }

  void main() {
    float h = clamp(vElevation * 0.5 + 0.5, 0.0, 1.0);
    vec3 col = mix(uColorLow, uColorHigh, h);

    float line = gridLine(vUv, uCells, 0.055);

    // Fade the plane out at its borders so it dissolves into the gradient
    // instead of ending on a hard rectangular edge.
    float edge =
      smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x) *
      smoothstep(0.0, 0.20, vUv.y) * smoothstep(1.0, 0.86, vUv.y);

    float a = line * edge * uOpacity + h * h * 0.11 * edge;
    if (a < 0.004) discard;

    gl_FragColor = vec4(col, a);
  }
`;

interface WaveGridProps {
  segments: number;
  opacity: number;
}

export default function WaveGrid({ segments, opacity }: WaveGridProps) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAmplitude: { value: 1 },
      uOpacity: { value: opacity },
      uCells: { value: 38 },
      // Kori Care royal blue -> bright accent blue
      uColorLow: { value: new THREE.Color("#0b2a6b") },
      uColorHigh: { value: new THREE.Color("#7dd3fc") },
    }),
    [opacity]
  );

  useFrame((_, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
    }
  });

  return (
    <mesh rotation={[-Math.PI / 2.32, 0, 0]} position={[0, -2.1, 0]}>
      <planeGeometry args={[26, 22, segments, segments]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
