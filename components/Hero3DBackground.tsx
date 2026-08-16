"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import useSceneQuality from "./three/useSceneQuality";

// three.js + fiber never reach the server bundle and never block first paint.
const HeroCanvas = dynamic(() => import("./three/HeroCanvas"), { ssr: false });

/**
 * Hero backdrop in three layers:
 *   1. a CSS gradient that paints instantly (no network, safe LCP),
 *   2. the WebGL wave scene when the device can afford it,
 *   3. the original brand photo when it cannot,
 *   4. a legibility scrim over everything.
 */
export default function Hero3DBackground() {
  const quality = useSceneQuality();

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
      {/* 1. Instant gradient base */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(120% 90% at 50% 8%, #0b3fa8 0%, #002366 42%, #001233 78%, #000a1f 100%)",
        }}
      />

      {/* 2 / 3. 3D scene, or the original photo on constrained devices */}
      {quality === "off" && (
        <Image
          src="/wave-bg.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center", opacity: 0.85 }}
          quality={70}
        />
      )}
      {quality && quality !== "off" && <HeroCanvas quality={quality} />}

      {/* 4. Scrim — keeps the headline and CTAs readable over either backdrop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,12,45,0.55) 0%, rgba(0,10,40,0.30) 38%, rgba(0,8,35,0.72) 82%, rgba(0,6,28,0.94) 100%)",
        }}
      />
    </div>
  );
}
