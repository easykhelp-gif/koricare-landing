"use client";
import { useLayoutEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { makeRandom } from "./cityShared";
import { RIVER_FAR, RIVER_NEAR } from "./RiverFront";
import { buildingFragment, buildingUniforms, buildingVertex } from "./buildingShader";

interface BuildingsProps {
  count: number;
}

/** The general commercial mass: mixed heights, mixed window colours. */
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

      // Split across the two banks so nothing ends up standing in the river.
      const nearBank = rand() < 0.22;
      const z = nearBank
        ? RIVER_NEAR + 1.5 - rand() * 7
        : RIVER_FAR - 1.5 - rand() * 36;

      // Distance from the downtown core drives height: a dense cluster of
      // towers straight ahead, low-rise spreading out to the sides.
      const coreDist = Math.hypot(x * 0.55, (z + 38) * 0.4);
      const coreFalloff = Math.max(0, 1 - coreDist / 15);
      const h = 1.3 + rand() * 2.4 + coreFalloff * coreFalloff * (4 + rand() * 9);

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

  const uniforms = useMemo(() => buildingUniforms(), []);

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
        vertexShader={buildingVertex}
        fragmentShader={buildingFragment}
        uniforms={uniforms}
      />
    </instancedMesh>
  );
}
