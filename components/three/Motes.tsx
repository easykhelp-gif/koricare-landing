"use client";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uSize;
  uniform float uSpan;
  attribute float aScale;
  attribute float aSpeed;
  attribute float aPhase;
  varying float vAlpha;

  void main() {
    vec3 p = position;

    // Drift upward and wrap, entirely on the GPU — no per-frame CPU array writes.
    float half = uSpan * 0.5;
    p.y = mod(p.y + uTime * aSpeed + half, uSpan) - half;
    p.x += sin(uTime * 0.22 + aPhase) * 0.45;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * aScale * (60.0 / max(-mv.z, 0.1));

    // Fade in/out at the top and bottom of the wrap range.
    vAlpha = smoothstep(1.0, 0.0, abs(p.y) / half);
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uColor;
  varying float vAlpha;

  void main() {
    // Soft round dot from the point's own coordinate space.
    float d = length(gl_PointCoord - 0.5);
    float mask = smoothstep(0.5, 0.06, d);
    float a = mask * vAlpha * 0.72;
    if (a < 0.01) discard;
    gl_FragColor = vec4(uColor, a);
  }
`;

interface MotesProps {
  count: number;
}

const SPAN = 15;

export default function Motes({ count }: MotesProps) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const [positions, scales, speeds, phases] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sc = new Float32Array(count);
    const sp = new Float32Array(count);
    const ph = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * SPAN;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12 - 2;
      sc[i] = 0.35 + Math.random() * 1.15;
      sp[i] = 0.12 + Math.random() * 0.38;
      ph[i] = Math.random() * Math.PI * 2;
    }
    return [pos, sc, sp, ph];
  }, [count]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSize: { value: 2.6 },
      uSpan: { value: SPAN },
      uColor: { value: new THREE.Color("#bfe3ff") },
    }),
    []
  );

  useFrame((_, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
    }
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute attach="attributes-aScale" args={[scales, 1]} />
        <bufferAttribute attach="attributes-aSpeed" args={[speeds, 1]} />
        <bufferAttribute attach="attributes-aPhase" args={[phases, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
