"use client";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { CITY_COLORS, fogGlsl, fogUniforms, hashGlsl } from "./cityShared";

export const RIVER_NEAR = -12;
export const RIVER_FAR = -25;

const riverVertex = /* glsl */ `
  varying vec2 vWorld;
  varying float vDepth;

  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xz;

    vec4 mv = viewMatrix * world;
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`;

const riverFragment = /* glsl */ `
  uniform float uTime;
  uniform vec3 uWater;
  uniform vec3 uWarm;
  uniform vec3 uCool;
  uniform float uNear;
  uniform float uFar;

  varying vec2 vWorld;
  varying float vDepth;

  ${hashGlsl}
  ${fogGlsl}

  void main() {
    float x = vWorld.x;
    float z = vWorld.y;

    // 0 at the far bank, 1 at the near bank.
    float across = clamp((z - uFar) / (uNear - uFar), 0.0, 1.0);

    vec3 col = uWater;

    // Reflected light columns: the city's lights smeared toward the viewer and
    // broken up by the surface. Wobble grows with distance from the far bank,
    // the way a real reflection spreads as it comes toward you.
    float spread = 0.15 + across * 1.1;
    float wob =
      sin(z * 1.9 + uTime * 0.75) * 0.16 * spread +
      sin(z * 4.1 - uTime * 0.45) * 0.09 * spread +
      sin(z * 8.3 + uTime * 1.3) * 0.04 * spread;

    float sx = x + wob;
    float cell = floor(sx * 0.5);
    float f = fract(sx * 0.5) - 0.5;

    float r = hash21(vec2(cell, 7.0));
    float present = step(0.46, r);
    float streak = exp(-f * f * 46.0) * present;

    // Reflections fade out as they travel toward the viewer.
    float travel = exp(-across * 2.1);
    vec3 tint = mix(uWarm, uCool, step(0.7, hash21(vec2(cell, 19.0))));
    col += tint * streak * travel * (0.35 + 0.75 * hash21(vec2(cell, 31.0)));

    // Fine surface glitter so the water is not a flat sheet.
    float glint = step(0.9955, hash21(floor(vec2(x * 7.0, z * 7.0 + uTime * 1.5))));
    col += vec3(0.6, 0.75, 0.95) * glint * 0.22 * travel;

    gl_FragColor = vec4(applyFog(col, vDepth), 1.0);
  }
`;

function HanRiver() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uWater: { value: new THREE.Color("#030a1c") },
      uWarm: { value: new THREE.Color("#ffc47a") },
      uCool: { value: new THREE.Color("#8ec5ff") },
      uNear: { value: RIVER_NEAR },
      uFar: { value: RIVER_FAR },
      ...fogUniforms(0.016),
    }),
    []
  );

  useFrame((_, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
    }
  });

  const midZ = (RIVER_NEAR + RIVER_FAR) / 2;
  const depth = RIVER_NEAR - RIVER_FAR;

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.03, midZ]}>
      <planeGeometry args={[190, depth]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={riverVertex}
        fragmentShader={riverFragment}
        uniforms={uniforms}
      />
    </mesh>
  );
}

const lampVertex = /* glsl */ `
  varying vec2 vUv;
  varying float vDepth;
  void main() {
    vUv = uv;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`;

const lampFragment = /* glsl */ `
  uniform vec3 uColor;
  uniform float uCount;
  uniform float uPower;
  varying vec2 vUv;
  varying float vDepth;

  ${fogGlsl}

  void main() {
    // Evenly spaced lamp heads along the span, drawn procedurally so the whole
    // run of lights is one quad rather than a mesh per lamp.
    float g = fract(vUv.x * uCount) - 0.5;
    float lamp = exp(-g * g * 210.0);
    float band = exp(-pow((vUv.y - 0.5) * 3.4, 2.0));

    vec3 col = uColor * lamp * band * uPower * (1.0 - fogAmount(vDepth) * 0.7);
    gl_FragColor = vec4(col, 1.0);
  }
`;

/** One of the Han bridges: dark deck, a run of lamps, lit piers. */
function Bridge() {
  const z = (RIVER_NEAR + RIVER_FAR) / 2;

  const deckMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({ color: new THREE.Color(CITY_COLORS.silhouette) }),
    []
  );

  const lampUniforms = useMemo(
    () => ({
      uColor: { value: new THREE.Color("#ffd9a0") },
      uCount: { value: 46 },
      uPower: { value: 1.9 },
      ...fogUniforms(0.016),
    }),
    []
  );

  return (
    <group position={[0, 0, z]}>
      {/* Deck */}
      <mesh position={[0, 1.05, 0]} material={deckMaterial}>
        <boxGeometry args={[150, 0.5, 1.5]} />
      </mesh>

      {/* Lamp run, sitting just above the deck */}
      <mesh position={[0, 1.85, 0]}>
        <planeGeometry args={[150, 1.1]} />
        <shaderMaterial
          vertexShader={lampVertex}
          fragmentShader={lampFragment}
          uniforms={lampUniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Piers */}
      {[-46, -30, -14, 14, 30, 46].map((px) => (
        <mesh key={px} position={[px, 0.5, 0]} material={deckMaterial}>
          <boxGeometry args={[1.6, 1.2, 2.2]} />
        </mesh>
      ))}
    </group>
  );
}

const goldVertex = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vNormalW;
  varying float vDepth;
  varying float vLocalY;

  void main() {
    vUv = uv;
    vNormalW = normalize(mat3(modelMatrix) * normal);
    vLocalY = position.y + 0.5;

    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`;

const goldFragment = /* glsl */ `
  uniform vec3 uGold;
  uniform float uPower;
  varying vec2 vUv;
  varying vec3 vNormalW;
  varying float vDepth;
  varying float vLocalY;

  ${hashGlsl}
  ${fogGlsl}

  void main() {
    float fog = fogAmount(vDepth);
    vec3 col = mix(vec3(0.04, 0.05, 0.10), uFogColor, fog);

    if (abs(vNormalW.y) < 0.5) {
      // Continuous glazed bands rather than punched windows — the tower reads
      // as a single sheet of gold glass, which is the whole point of it.
      float rows = 46.0;
      float f = fract(vUv.y * rows);
      float band = smoothstep(0.12, 0.3, f) * smoothstep(0.9, 0.72, f);

      float col2 = fract(vUv.x * 9.0);
      float mull = smoothstep(0.06, 0.14, col2) * smoothstep(0.94, 0.86, col2);

      float shimmer = 0.75 + 0.25 * hash21(floor(vec2(vUv.x * 9.0, vUv.y * rows)));
      float rise = 0.55 + 0.45 * vLocalY;

      col += uGold * band * mull * shimmer * rise * uPower * (1.0 - fog * 0.8);
    }

    gl_FragColor = vec4(col, 1.0);
  }
`;

/** The gold slab on the riverbank — the tower everyone photographs the Han with. */
function GoldTower() {
  const uniforms = useMemo(
    () => ({
      uGold: { value: new THREE.Color("#ffb648") },
      uPower: { value: 0.75 },
      ...fogUniforms(0.016),
    }),
    []
  );

  return (
    <mesh position={[-13, 7.4, -28]} rotation={[0, 0.34, 0]}>
      <boxGeometry args={[3.4, 14.8, 1.5]} />
      <shaderMaterial
        vertexShader={goldVertex}
        fragmentShader={goldFragment}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function RiverFront() {
  return (
    <>
      <HanRiver />
      <Bridge />
      <GoldTower />
    </>
  );
}
