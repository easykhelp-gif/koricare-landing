"use client";
import { useLayoutEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { makeRandom } from "./cityShared";
import { buildingFragment, buildingUniforms, buildingVertex } from "./buildingShader";

interface ApartmentsProps {
  complexes: number;
}

/**
 * Apartment complexes: ranks of identical slab towers at identical spacing
 * and identical height. Nothing else in the scene says "Korean city" as
 * directly — it is the pattern, not any single building, that reads.
 *
 * They also light differently from offices: warm, and mostly on, because
 * these are homes rather than floors of empty desks.
 */
export default function Apartments({ complexes }: ApartmentsProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const { sizes, seeds, matrices, count } = useMemo(() => {
    const rand = makeRandom(4415522);
    const dummy = new THREE.Object3D();
    const mats: THREE.Matrix4[] = [];
    const sizeList: number[] = [];
    const seedList: number[] = [];

    for (let c = 0; c < complexes; c++) {
      // Complexes sit off to the sides and behind the commercial core.
      const side = c % 2 === 0 ? -1 : 1;
      const cx = side * (9 + rand() * 20);
      const cz = -28 - rand() * 30;
      const rowAngle = (rand() - 0.5) * 0.7;

      // Every tower in one complex shares its height and footprint.
      const towers = 4 + Math.floor(rand() * 4);
      const h = 5.5 + rand() * 4.5;
      const w = 1.15 + rand() * 0.5;
      const d = 0.85;
      const gap = w + 1.5 + rand() * 0.8;

      for (let t = 0; t < towers; t++) {
        const offset = (t - (towers - 1) / 2) * gap;
        const x = cx + Math.cos(rowAngle) * offset;
        const z = cz + Math.sin(rowAngle) * offset;

        dummy.position.set(x, h / 2, z);
        dummy.rotation.set(0, rowAngle, 0);
        dummy.scale.set(w, h, d);
        dummy.updateMatrix();
        mats.push(dummy.matrix.clone());

        sizeList.push(w, h, d);
        seedList.push(rand() * 100);
      }
    }

    return {
      sizes: new Float32Array(sizeList),
      seeds: new Float32Array(seedList),
      matrices: mats,
      count: mats.length,
    };
  }, [complexes]);

  useLayoutEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    matrices.forEach((m, i) => mesh.setMatrixAt(i, m));
    mesh.instanceMatrix.needsUpdate = true;
    mesh.computeBoundingSphere();
  }, [matrices]);

  const uniforms = useMemo(
    () =>
      buildingUniforms({
        // Tighter, very regular grid — flats, not office floorplates.
        cellW: 0.26,
        cellH: 0.3,
        litBias: 0.3,
        coolCut: 0.93,
        powerBase: 0.26,
        powerVar: 0.6,
        facade: "#12244c",
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
        vertexShader={buildingVertex}
        fragmentShader={buildingFragment}
        uniforms={uniforms}
      />
    </instancedMesh>
  );
}
