"use client";
import { useEffect, useRef, useState } from "react";
import useSceneQuality from "./three/useSceneQuality";

const POSTER = "/seoul-night-poster.webp";

// H.264 only, deliberately. VP9 came out just 18% smaller at a quality the
// contrast grade turns into visible banding, and cheap Android phones decode
// H.264 in hardware while frequently falling back to software for VP9 — worse
// battery for the audience this site is built for.
const VIDEO_MP4 = "/seoul-night.mp4";

/**
 * Seoul at night behind the hero.
 *
 * The footage is graded in CSS rather than baked into the file, so the look
 * stays tunable and costs no extra bytes. Grade values live in one place below
 * — they reproduce the "cinematic" pass that was signed off: harder contrast,
 * more saturation in the traffic, a navy wash over the concrete and a faint
 * warm lift on the street lights.
 *
 * The poster carries the same grade, so a device that never loads the video
 * sees the same picture, just still.
 */
export default function HeroVideoBackground() {
  const quality = useSceneQuality();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canPlay, setCanPlay] = useState(false);

  // Only devices on the normal tiers get the video; the "off" tier is
  // reduced-motion, save-data, 2G or a low-memory phone, and those get the
  // still. Autoplay can also simply be refused, which the poster covers.
  const wantsVideo = quality !== null && quality !== "off";

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !wantsVideo) return;

    const play = () => {
      el.play().catch(() => {
        // Autoplay blocked — the poster stays, which is a fine outcome.
      });
    };
    if (el.readyState >= 3) play();
    el.addEventListener("canplay", play);
    return () => el.removeEventListener("canplay", play);
  }, [wantsVideo]);

  // Pause off-screen so a background video never costs battery while the user
  // is reading the sections below.
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    let inView = true;
    const sync = () => {
      if (inView && !document.hidden) el.play().catch(() => {});
      else el.pause();
    };

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
  }, [canPlay]);

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
      {/* Paints before anything loads so the hero is never a white flash. */}
      <div style={{ position: "absolute", inset: 0, background: "#02060f" }} />

      {/* Footage + still, sharing one grade */}
      <div className="hero-media-grade" style={{ position: "absolute", inset: 0 }}>
        {wantsVideo ? (
          <video
            ref={videoRef}
            poster={POSTER}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            aria-hidden="true"
            onCanPlay={() => setCanPlay(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          >
            <source src={VIDEO_MP4} type="video/mp4" />
          </video>
        ) : (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${POSTER})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}
      </div>

      {/* Navy wash — pushes the concrete out of grey and toward the brand blue */}
      <div className="hero-grade-navy" />

      {/* Warm lift — keeps street and vehicle lights as the only heat in frame */}
      <div className="hero-grade-warm" />

      {/* Legibility scrim for the headline and the CTA stack */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(1,6,20,0.72) 0%, rgba(2,10,30,0.34) 32%, rgba(2,8,26,0.38) 58%, rgba(1,6,18,0.80) 84%, rgba(0,4,12,0.94) 100%)",
        }}
      />
    </div>
  );
}
