"use client";
import dynamic from "next/dynamic";
import StaticSkyline from "./StaticSkyline";
import useSceneQuality from "./three/useSceneQuality";

// three.js + fiber never reach the server bundle and never block first paint.
const HeroCanvas = dynamic(() => import("./three/HeroCanvas"), { ssr: false });

/**
 * Seoul at night, in three layers:
 *   1. a night-sky gradient with the city's glow on the horizon — pure CSS,
 *      so it paints instantly and carries the look on its own,
 *   2. the WebGL skyline when the device can afford it, otherwise an inline
 *      SVG skyline with the same composition,
 *   3. a scrim that keeps the headline and CTAs readable over either.
 */
export default function Hero3DBackground() {
  const quality = useSceneQuality();

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
      {/* 1. Night sky — light pollution rising off the skyline */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(135% 78% at 50% 76%, #1d5296 0%, #0d3070 26%, #051845 54%, #020c26 78%, #01060f 100%)",
        }}
      />

      {/* 2. The city */}
      {quality === "off" && <StaticSkyline />}
      {quality && quality !== "off" && <HeroCanvas quality={quality} />}

      {/* 3. Legibility scrim */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(1,8,26,0.72) 0%, rgba(2,12,34,0.34) 34%, rgba(2,10,30,0.30) 62%, rgba(1,7,22,0.78) 88%, rgba(1,5,16,0.95) 100%)",
        }}
      />
    </div>
  );
}
