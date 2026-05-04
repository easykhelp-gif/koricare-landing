"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
        paddingBottom: 60,
      }}
    >
      {/* Background — uploaded brand background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        <Image
          src="/wave-bg.jpg"
          alt="Easy-K brand background"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
          quality={90}
        />
        {/* Dark overlay for text legibility */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,20,80,0.30) 0%, rgba(0,15,60,0.60) 50%, rgba(0,8,35,0.92) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 480,
          margin: "0 auto",
          padding: "80px 24px 0",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Badge */}
        <div
          className={loaded ? "animate-fade-up" : ""}
          style={{
            opacity: loaded ? 1 : 0,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.35)",
            borderRadius: 24,
            padding: "6px 14px",
            marginBottom: 20,
            backdropFilter: "blur(8px)",
          }}
        >
          <span style={{ fontSize: 14 }}>🇰🇷 🇹🇭</span>
          <span style={{ color: "rgba(255,255,255,0.92)", fontSize: 12, fontWeight: 500, letterSpacing: "0.5px" }}>
            พาร์ทเนอร์เกาหลีของคุณ · 당신의 한국인 파트너
          </span>
        </div>

        {/* Main headline */}
        <h1
          className={loaded ? "animate-fade-up delay-100" : ""}
          style={{
            opacity: loaded ? 1 : 0,
            fontSize: "clamp(26px, 7vw, 34px)",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.3,
            marginBottom: 18,
            letterSpacing: "-0.5px",
          }}
        >
          Easy-K:{" "}
          <span style={{ color: "#7eb3ff" }}>เพื่อนคนเกาหลี</span>
          <br />
          ที่พร้อมช่วยเหลือคุณ
          <br />
          ในทุกเรื่อง
        </h1>

        {/* Sub-headline */}
        <p
          className={loaded ? "animate-fade-up delay-200" : ""}
          style={{
            opacity: loaded ? 1 : 0,
            fontSize: 15,
            color: "rgba(255,255,255,0.82)",
            lineHeight: 1.75,
            marginBottom: 36,
            fontWeight: 400,
            maxWidth: 340,
          }}
        >
          หากคุณอาศัยอยู่ในเกาหลีและกำลังเผชิญกับความลำบาก
          ไม่ว่าเรื่องอะไร...{" "}
          <span style={{ color: "#a8d4ff", fontWeight: 600 }}>
            ทักมาคุยกับเราได้เลย
          </span>{" "}
          เรายินดีช่วยเหลือคุณในทุกเรื่อง!
        </p>

        {/* CTA Buttons */}
        <div
          className={loaded ? "animate-fade-up delay-300" : ""}
          style={{
            opacity: loaded ? 1 : 0,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            width: "100%",
            maxWidth: 320,
          }}
        >
          <a
            id="hero-line-btn"
            href="https://line.me/R/ti/p/@768mkjml"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              background: "#06C755",
              color: "white",
              padding: "15px 24px",
              borderRadius: 16,
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(6,199,85,0.4)",
              transition: "all 0.25s ease",
            }}
            onTouchStart={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "scale(0.97)";
            }}
            onTouchEnd={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.629 0 .344-.281.63-.629.63M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            คุยกับเพื่อน Easy-K ผ่าน LINE
          </a>

          <a
            id="hero-fb-btn"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("준비 중입니다! / กำลังเตรียมการ");
            }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              background: "rgba(255,255,255,0.12)",
              border: "1.5px solid rgba(255,255,255,0.4)",
              color: "white",
              padding: "14px 24px",
              borderRadius: 16,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              backdropFilter: "blur(8px)",
              transition: "all 0.25s ease",
            }}
            onTouchStart={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "scale(0.97)";
            }}
            onTouchEnd={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            ติดตามเราบน Facebook (Coming Soon)
          </a>
        </div>

        {/* Scroll hint */}
        <div
          className={`animate-float ${loaded ? "animate-fade-up delay-500" : ""}`}
          style={{
            opacity: loaded ? 1 : 0,
            marginTop: 40,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, letterSpacing: "1.5px" }}>
            เลื่อนลงดูเพิ่มเติม
          </span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 8l5 5 5-5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Bottom wave */}
      <div style={{ position: "absolute", bottom: -1, left: 0, right: 0, zIndex: 1 }}>
        <svg viewBox="0 0 375 48" preserveAspectRatio="none" style={{ width: "100%", height: 48, display: "block" }}>
          <path d="M0 48 Q90 20 187.5 36 Q280 52 375 24 L375 48 Z" fill="var(--soft-white)" />
        </svg>
      </div>
    </section>
  );
}
