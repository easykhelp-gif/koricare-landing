"use client";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import WaveGrid from "./WaveGrid";
import Motes from "./Motes";
import type { SceneQuality } from "./useSceneQuality";

/**
 * Eases the camera toward the pointer (desktop) or the page scroll (touch),
 * which is what sells the depth of the scene without any user input cost.
 */
function CameraRig() {
  const { camera, pointer } = useThree();
  const scrollRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      scrollRef.current = Math.min(window.scrollY / 600, 1);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame((_, delta) => {
    const targetX = pointer.x * 0.85;
    const targetY = 0.6 + pointer.y * 0.45 - scrollRef.current * 1.1;

    // Frame-rate independent easing so 60Hz and 120Hz phones feel the same.
    const k = 1 - Math.pow(0.001, delta);
    camera.position.x += (targetX - camera.position.x) * k;
    camera.position.y += (targetY - camera.position.y) * k;
    camera.lookAt(0, -0.6, 0);
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
        camera={{ position: [0, 0.6, 7.5], fov: 55, near: 0.1, far: 60 }}
        gl={{
          antialias: !isLow,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        style={{ pointerEvents: "none" }}
      >
        <CameraRig />
        <WaveGrid
          segments={isLow ? 56 : 96}
          opacity={isLow ? 0.62 : 0.75}
        />
        <Motes count={isLow ? 170 : 420} />
      </Canvas>
    </div>
  );
}
