"use client";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { CITY_COLORS, fogGlsl, fogUniforms, makeRandom } from "./cityShared";

const silhouetteVertex = /* glsl */ `
  varying float vWorldY;
  varying float vDepth;

  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorldY = world.y;

    vec4 mv = viewMatrix * world;
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`;

const silhouetteFragment = /* glsl */ `
  uniform vec3 uBase;
  uniform vec3 uCrest;
  uniform float uSpan;

  varying float vWorldY;
  varying float vDepth;

  ${fogGlsl}

  void main() {
    // City glow washes the lower slopes; ridgelines stay near-black.
    float t = clamp(vWorldY / uSpan, 0.0, 1.0);
    vec3 col = mix(uBase, uCrest, t);
    gl_FragColor = vec4(applyFog(col, vDepth), 1.0);
  }
`;

/** Shared dark material for mountains, the Namsan hill and tower structure. */
function useSilhouetteMaterial(
  span: number,
  fogDensity: number,
  base = "#122a55"
) {
  return useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: silhouetteVertex,
        fragmentShader: silhouetteFragment,
        uniforms: {
          uBase: { value: new THREE.Color(base) },
          uCrest: { value: new THREE.Color(CITY_COLORS.silhouette) },
          uSpan: { value: span },
          ...fogUniforms(fogDensity),
        },
      }),
    [span, fogDensity, base]
  );
}

/** Ground the towers stand on, so the skyline has a floor rather than sky. */
function CityFloor() {
  const material = useSilhouetteMaterial(1, 0.017, "#04102b");
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, -24]} material={material}>
      <planeGeometry args={[220, 180]} />
    </mesh>
  );
}

/**
 * The ring of mountains around Seoul. Foreigners rarely name them, but their
 * absence is exactly what makes a skyline read as "generic city" instead.
 */
function MountainRidge() {
  const material = useSilhouetteMaterial(16, 0.012);

  const peaks = useMemo(() => {
    const rand = makeRandom(77001);
    return Array.from({ length: 11 }, (_, i) => ({
      key: i,
      x: -38 + i * 7.6 + (rand() - 0.5) * 4,
      z: -56 - rand() * 12,
      radius: 9 + rand() * 8,
      height: 11 + rand() * 10,
    }));
  }, []);

  return (
    <group>
      {peaks.map((p) => (
        <mesh
          key={p.key}
          position={[p.x, p.height / 2 - 1.5, p.z]}
          material={material}
        >
          <coneGeometry args={[p.radius, p.height, 7]} />
        </mesh>
      ))}
    </group>
  );
}

/** N Seoul Tower on Namsan — the silhouette the city is recognised by. */
function NamsanTower() {
  const structure = useSilhouetteMaterial(12, 0.016);
  const beaconColor = useMemo(
    () => new THREE.Color(CITY_COLORS.beacon).multiplyScalar(5),
    []
  );
  const beaconRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.MeshBasicMaterial>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (beaconRef.current) {
      // Slow aviation-warning blink.
      const on = Math.sin(t * 1.9) > 0.15 ? 1 : 0.15;
      beaconRef.current.scale.setScalar(0.7 + on * 0.5);
    }
    if (ringRef.current) {
      // Namsan's deck is floodlit in slowly cycling colours at night.
      ringRef.current.color.setHSL((t * 0.035) % 1, 0.62, 0.62).multiplyScalar(3.2);
    }
  });

  return (
    <group position={[-7.5, 0, -30]}>
      {/* Namsan itself */}
      <mesh position={[0, 1.6, 0]} material={structure}>
        <coneGeometry args={[7.5, 6.4, 9]} />
      </mesh>

      {/* Shaft */}
      <mesh position={[0, 6.4, 0]} material={structure}>
        <cylinderGeometry args={[0.16, 0.34, 4.2, 10]} />
      </mesh>

      {/* Flare out to the observation deck */}
      <mesh position={[0, 8.75, 0]} material={structure}>
        <cylinderGeometry args={[0.68, 0.2, 0.62, 12]} />
      </mesh>

      {/* Lit deck ring */}
      <mesh position={[0, 9.3, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.42, 12]} />
        <meshBasicMaterial ref={ringRef} toneMapped={false} />
      </mesh>

      {/* Taper back in above the deck */}
      <mesh position={[0, 9.85, 0]} material={structure}>
        <cylinderGeometry args={[0.22, 0.7, 0.7, 12]} />
      </mesh>

      {/* Antenna spire */}
      <mesh position={[0, 11.4, 0]} material={structure}>
        <cylinderGeometry args={[0.04, 0.11, 2.5, 6]} />
      </mesh>

      <mesh ref={beaconRef} position={[0, 12.75, 0]}>
        <sphereGeometry args={[0.12, 8, 8]} />
        <meshBasicMaterial color={beaconColor} toneMapped={false} />
      </mesh>
    </group>
  );
}

/** The tapered supertall that anchors the modern half of the skyline. */
function SignatureTower() {
  const structure = useSilhouetteMaterial(26, 0.016);
  const beaconColor = useMemo(
    () => new THREE.Color(CITY_COLORS.beacon).multiplyScalar(5),
    []
  );
  const crownColor = useMemo(
    () => new THREE.Color("#bfe3ff").multiplyScalar(3.4),
    []
  );
  const crownRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (crownRef.current) {
      const p = 0.55 + 0.45 * Math.sin(state.clock.elapsedTime * 0.9);
      crownRef.current.scale.setScalar(0.85 + p * 0.35);
    }
  });

  return (
    <group position={[7, 0, -27]} rotation={[0, Math.PI / 4, 0]}>
      <mesh position={[0, 10.5, 0]} material={structure}>
        <cylinderGeometry args={[0.42, 1.25, 21, 4]} />
      </mesh>
      {/* Lantern crown */}
      <mesh position={[0, 21.6, 0]}>
        <cylinderGeometry args={[0.1, 0.42, 1.5, 4]} />
        <meshBasicMaterial color={crownColor} toneMapped={false} />
      </mesh>
      <mesh ref={crownRef} position={[0, 22.6, 0]}>
        <sphereGeometry args={[0.16, 8, 8]} />
        <meshBasicMaterial color={beaconColor} toneMapped={false} />
      </mesh>
    </group>
  );
}

export default function Landmarks() {
  return (
    <>
      <CityFloor />
      <MountainRidge />
      <NamsanTower />
      <SignatureTower />
    </>
  );
}
