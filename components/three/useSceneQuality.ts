"use client";
import { useEffect, useState } from "react";

export type SceneQuality = "off" | "low" | "high";

interface NavigatorWithHints extends Navigator {
  deviceMemory?: number;
  connection?: { saveData?: boolean; effectiveType?: string };
}

function detectWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGL2RenderingContext && canvas.getContext("webgl2")
    );
  } catch {
    return false;
  }
}

/**
 * Decides how much 3D the current device should render.
 *
 * Kori Care's audience is largely on mid/low-end Android phones on mobile data,
 * so we degrade aggressively rather than optimistically: anything that looks
 * budget-constrained (save-data, few cores, little RAM, reduced-motion) falls
 * back to the static hero instead of a stuttering canvas.
 *
 * Returns `null` until detection runs, so nothing heavy renders during hydration.
 */
export default function useSceneQuality(): SceneQuality | null {
  const [quality, setQuality] = useState<SceneQuality | null>(null);

  useEffect(() => {
    const nav = navigator as NavigatorWithHints;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const saveData = nav.connection?.saveData === true;
    const slowNetwork =
      nav.connection?.effectiveType === "slow-2g" ||
      nav.connection?.effectiveType === "2g";
    const cores = nav.hardwareConcurrency ?? 8;
    const memory = nav.deviceMemory ?? 8;

    if (
      reducedMotion ||
      saveData ||
      slowNetwork ||
      cores <= 3 ||
      memory <= 2 ||
      !detectWebGL()
    ) {
      setQuality("off");
      return;
    }

    // Coarse pointer == touch device. Combined with modest core/RAM counts this
    // is the phone tier, which gets the reduced particle budget and dpr cap.
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    setQuality(coarsePointer || cores <= 6 || memory <= 4 ? "low" : "high");
  }, []);

  return quality;
}
