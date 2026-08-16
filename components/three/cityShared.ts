import * as THREE from "three";

/** Night palette. Deep navy so the scene sits under the existing brand blue. */
export const CITY_COLORS = {
  /** Haze the distant city dissolves into — matches the hero gradient. */
  fog: "#061436",
  /** Unlit concrete facing away from the city glow. */
  facade: "#0d1f45",
  /** Silhouettes: mountains, the Namsan hill, tower structure. */
  silhouette: "#050f2c",
  windowWarm: "#ffd79a",
  windowCool: "#9fd4ff",
  beacon: "#ff4d5e",
};

/**
 * Distance haze, shared by every mesh in the scene so buildings, mountains
 * and landmarks all dissolve into the sky at the same rate.
 */
export const fogGlsl = /* glsl */ `
  uniform vec3 uFogColor;
  uniform float uFogDensity;

  float fogAmount(float depth) {
    return clamp(1.0 - exp(-pow(max(depth, 0.0) * uFogDensity, 2.0)), 0.0, 1.0);
  }

  vec3 applyFog(vec3 col, float depth) {
    return mix(col, uFogColor, fogAmount(depth));
  }
`;

export const hashGlsl = /* glsl */ `
  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }
`;

export function fogUniforms(density = 0.026) {
  return {
    uFogColor: { value: new THREE.Color(CITY_COLORS.fog) },
    uFogDensity: { value: density },
  };
}

/**
 * Deterministic PRNG so the skyline is identical on every load and between
 * server and client — a random layout that reshuffles on refresh reads as a
 * glitch rather than a place.
 */
export function makeRandom(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}
