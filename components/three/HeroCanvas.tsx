"use client";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Buildings from "./Buildings";
import Landmarks from "./Landmarks";
import Motes from "./Motes";
import type { SceneQuality } from "./useSceneQuality";

const BASE = { x: 0, y: 9, z: 22 };

/**
 * Eases the camera over the skyline — pointer on desktop, scroll on touch.
 * Scrolling descends toward street level, which hands the hero off to the
 * sections below instead of the city just sliding away.
 */
function CameraRig() {
  const { camera, pointer } = useThree();
  const scrollRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      scrollRef.current = Math.min(window.scrollY / 700, 1);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame((_, delta) => {
    const s = scrollRef.current;
    const targetX = BASE.x + pointer.x * 2.2;
    const targetY = BASE.y + pointer.y * 1.1 - s * 3.2;
    const targetZ = BASE.z - s * 5.5;

    // Frame-rate independent easing so 60Hz and 120Hz phones feel the same.
    const k = 1 - Math.pow(0.0015, delta);
    camera.position.x += (targetX - camera.position.x) * k;
    camera.position.y += (targetY - camera.position.y) * k;
    camera.position.z += (targetZ - camera.position.z) * k;
    camera.lookAt(0, 6.5, -28);
  });

  return null;
}

interface HeroCanvasProps {
  quality: Exclude<SceneQuality, "off">;
}

export default function HeroCanvas({ quality }: HeroCanvasProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);

  // Stop burning GPU/battery when the hero is scrolled away or the tab is hidden.
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    let inView = true;
    const sync = () => setActive(inView && !document.hidden);

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        sync();
      },
      { threshold: 0 }
    );
    observer.observe(el);

    document.addEventListener("visibilitychange", sync);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  const isLow = quality === "low";

  return (
    <div ref={wrapperRef} style={{ position: "absolute", inset: 0 }}>
      <Canvas
        frameloop={active ? "always" : "never"}
        dpr={isLow ? 1 : [1, 1.6]}
        camera={{
          position: [BASE.x, BASE.y, BASE.z],
          fov: 52,
          near: 0.5,
          far: 220,
        }}
        gl={{
          antialias: !isLow,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
        }}
        style={{ pointerEvents: "none" }}
      >
        <CameraRig />
        <Buildings count={isLow ? 150 : 260} />
        <Landmarks />
        <Motes count={isLow ? 90 : 200} />
      </Canvas>
    </div>
  );
}
