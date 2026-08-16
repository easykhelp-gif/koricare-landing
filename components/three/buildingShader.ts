import * as THREE from "three";
import { CITY_COLORS, fogGlsl, fogUniforms, hashGlsl } from "./cityShared";

// `position`, `normal`, `uv` and `instanceMatrix` are declared by three's own
// ShaderMaterial prefix — redeclaring any of them is a compile error.
export const buildingVertex = /* glsl */ `
  attribute vec3 aSize;
  attribute float aSeed;

  uniform float uCellW;
  uniform float uCellH;

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
      max(floor(horiz / uCellW), 1.0),
      max(floor(aSize.y / uCellH), 1.0)
    );

    vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`;

export const buildingFragment = /* glsl */ `
  uniform vec3 uFacade;
  uniform vec3 uWindowWarm;
  uniform vec3 uWindowCool;
  uniform float uTime;
  uniform float uLitBias;
  uniform float uCoolCut;
  uniform float uPowerBase;
  uniform float uPowerVar;

  varying vec2 vUv;
  varying vec3 vNormalW;
  varying float vSeed;
  varying vec2 vCells;
  varying float vDepth;
  varying float vUp;

  ${hashGlsl}
  ${fogGlsl}

  void main() {
    float facing = 0.62 + 0.38 * abs(dot(vNormalW, normalize(vec3(0.55, 0.15, 0.82))));
    vec3 col = uFacade * facing;

    float fog = fogAmount(vDepth);
    col = mix(col, uFogColor, fog);

    if (vUp < 0.5) {
      vec2 g = vUv * vCells;
      vec2 cell = floor(g);
      vec2 f = fract(g);

      vec2 a = step(vec2(0.16, 0.20), f);
      vec2 b = step(f, vec2(0.84, 0.74));
      float inWindow = a.x * a.y * b.x * b.y;

      float r = hash21(cell + vSeed * 37.0);
      float lit = step(uLitBias, r);

      float blink = step(0.988, hash21(cell + floor(uTime * 0.5) + vSeed * 11.0));
      lit = clamp(lit - blink, 0.0, 1.0);

      vec3 tint = mix(uWindowWarm, uWindowCool, step(uCoolCut, hash21(cell * 1.7 + vSeed)));

      // Emissive, deliberately past 1.0 so the bloom pass has real highlight
      // energy to bleed. Haze still attenuates it with distance.
      float power = uPowerBase + uPowerVar * hash21(cell * 3.1 + vSeed * 5.0);
      col += tint * inWindow * lit * power * (1.0 - fog * 0.78);
    }

    gl_FragColor = vec4(col, 1.0);
  }
`;

export interface BuildingUniformOpts {
  cellW?: number;
  cellH?: number;
  litBias?: number;
  coolCut?: number;
  powerBase?: number;
  powerVar?: number;
  facade?: string;
  fogDensity?: number;
}

export function buildingUniforms(opts: BuildingUniformOpts = {}) {
  return {
    uTime: { value: 0 },
    uFacade: { value: new THREE.Color(opts.facade ?? CITY_COLORS.facade) },
    uWindowWarm: { value: new THREE.Color(CITY_COLORS.windowWarm) },
    uWindowCool: { value: new THREE.Color(CITY_COLORS.windowCool) },
    uCellW: { value: opts.cellW ?? 0.3 },
    uCellH: { value: opts.cellH ?? 0.36 },
    uLitBias: { value: opts.litBias ?? 0.42 },
    uCoolCut: { value: opts.coolCut ?? 0.68 },
    uPowerBase: { value: opts.powerBase ?? 0.30 },
    uPowerVar: { value: opts.powerVar ?? 0.85 },
    ...fogUniforms(opts.fogDensity ?? 0.019),
  };
}
