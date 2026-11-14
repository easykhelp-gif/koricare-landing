"use client";
import { useEffect, useState } from "react";
import HeroVideoBackground from "./HeroVideoBackground";

interface HeroSectionProps {
  lang?: "en" | "th" | "vi";
}

export default function HeroSection({ lang = "en" }: HeroSectionProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const contentMap = {
    en: {
      badge: "BRAVE STEPS, SAFE LIFE.",
      title1: "Kori Care",
      title2: "Your Partner in Korea",
      sub: "Essential portal & 1:1 support for foreign residents in Korea.",
      linksBtn: "Useful Links & Directory",
      linksUrl: "https://www.koricare.kr/link/",
      calcBtn: "Severance Pay Calculator",
      calcUrl: "https://www.koricare.kr/link/severance-calculator",
      nameBtn: "Your Korean Name",
      nameUrl: "https://www.koricare.kr/link/korean-name/?ref=home",
      fbBtn: "Messenger",
      fbUrl: "https://m.me/theokoricare",
      lineBtn: "LINE Chat",
      lineUrl: "https://line.me/R/ti/p/@768mkjml"
    },
    th: {
      badge: "BRAVE STEPS, SAFE LIFE.",
      title1: "Kori Care",
      title2: "เพื่อนคู่คิดของคุณในเกาหลี",
      sub: "พอร์ทัลรวมลิงก์สำคัญและบริการช่วยเหลือ 1:1 สำหรับชาวต่างชาติในเกาหลี",
      linksBtn: "ศูนย์รวมลิงก์สำคัญ",
      linksUrl: "https://www.koricare.kr/link/th/",
      calcBtn: "โปรแกรมคำนวณเงินชดเชย",
      calcUrl: "https://www.koricare.kr/link/th/severance-calculator",
      nameBtn: "ชื่อเกาหลีของคุณ",
      nameUrl: "https://www.koricare.kr/link/th/korean-name/?ref=home",
      fbBtn: "Messenger",
      fbUrl: "https://m.me/theokoricare",
      lineBtn: "LINE Chat",
      lineUrl: "https://line.me/R/ti/p/@768mkjml"
    },
    vi: {
      badge: "BRAVE STEPS, SAFE LIFE.",
      title1: "Kori Care",
      title2: "Đối tác đồng hành tại Hàn Quốc",
      sub: "Cổng thông tin thiết yếu & Hỗ trợ 1:1 cho người nước ngoài tại Hàn Quốc.",
      linksBtn: "Cổng liên kết thiết yếu",
      linksUrl: "https://www.koricare.kr/link/vi/",
      calcBtn: "Tính tiền trợ cấp thôi việc",
      calcUrl: "https://www.koricare.kr/link/vi/severance-calculator",
      nameBtn: "Tên Hàn của bạn",
      nameUrl: "https://www.koricare.kr/link/vi/korean-name/?ref=home",
      fbBtn: "Messenger",
      fbUrl: "https://m.me/theokoricare",
      lineBtn: "LINE Chat",
      lineUrl: "https://line.me/R/ti/p/@768mkjml"
    }
  };

  const t = contentMap[lang];

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "95vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: 95,
        paddingBottom: 40,
      }}
    >
      {/* Background — Seoul night footage, graded in CSS, still on low-power devices */}
      <HeroVideoBackground />

      {/* Content */}
      <div
        className="hero-stage"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 480,
          margin: "0 auto",
          padding: "45px 24px 0",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Glowing Glassmorphism Slogan Badge */}
        <div
          className={loaded ? "animate-fade-up" : ""}
          style={{
            opacity: loaded ? 1 : 0,
            display: "inline-flex",
            alignItems: "center",
            background: "rgba(255, 255, 255, 0.18)",
            border: "1.5px solid rgba(255, 255, 255, 0.65)",
            borderRadius: 30,
            padding: "8px 22px",
            marginBottom: 20,
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 6px 28px rgba(96, 165, 250, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.8)",
          }}
        >
          <span
            style={{
              color: "#ffffff",
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: "2.0px",
              textTransform: "uppercase",
              textShadow: "0 0 12px rgba(255,255,255,0.9), 0 2px 6px rgba(0,0,0,0.6)",
            }}
          >
            {t.badge}
          </span>
        </div>

        {/* Deep Glowing Premium 3D Headline */}
        <h1
          className={loaded ? "animate-fade-up delay-100" : ""}
          style={{
            opacity: loaded ? 1 : 0,
            fontSize: "clamp(32px, 8.5vw, 42px)",
            fontWeight: 900,
            lineHeight: 1.2,
            marginBottom: 16,
            letterSpacing: "-0.5px",
          }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #bae6fd 40%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "block",
              filter: "drop-shadow(0 0 24px rgba(96,165,250,0.85)) drop-shadow(0 4px 16px rgba(0,10,40,0.95))",
            }}
          >
            {t.title1}
          </span>
          <span
            style={{
              display: "block",
              color: "#ffffff",
              fontSize: "0.82em",
              fontWeight: 800,
              marginTop: 6,
              textShadow: "0 2px 12px rgba(0,0,0,0.8), 0 4px 24px rgba(0,0,0,0.6)",
            }}
          >
            {t.title2}
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          className={loaded ? "animate-fade-up delay-200" : ""}
          style={{
            opacity: loaded ? 1 : 0,
            fontSize: 14.5,
            color: "rgba(255,255,255,0.92)",
            lineHeight: 1.7,
            marginBottom: 32,
            fontWeight: 500,
            maxWidth: 360,
            textShadow: "0 1px 6px rgba(0,0,0,0.7)",
          }}
        >
          {t.sub}
        </p>

        {/* CTA Buttons in order: 1. Useful Links -> 2. Calculator -> 3. Korean name -> 4. FB | LINE */}
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
          {/* 1~3. Links, calculator, name: one grid so icons and labels line up in columns */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 20px minmax(0, max-content) 1fr", columnGap: 10, rowGap: 12 }}>
          {/* 1. Useful Links & Directory Button */}
          <a
            id="hero-portal-btn"
            className="btn-3d"
            href={t.linksUrl}
            style={{
              gridColumn: "1 / -1",
              display: "grid",
              gridTemplateColumns: "subgrid",
              alignItems: "center",
              background: "rgba(255,255,255,0.18)",
              border: "1.5px solid rgba(255,255,255,0.55)",
              color: "white",
              padding: "15px 24px",
              borderRadius: 16,
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
              backdropFilter: "blur(12px)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
              transition: "all 0.25s ease",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ gridColumn: 2 }}>
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            <span style={{ gridColumn: 3, textAlign: "left" }}>{t.linksBtn}</span>
          </a>

          {/* 2. Severance Pay Calculator Button */}
          <a
            id="hero-calc-btn"
            className="btn-3d"
            href={t.calcUrl}
            style={{
              gridColumn: "1 / -1",
              display: "grid",
              gridTemplateColumns: "subgrid",
              alignItems: "center",
              background: "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)",
              color: "white",
              padding: "16px 24px",
              borderRadius: 16,
              fontSize: 15.5,
              fontWeight: 800,
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(29,78,216,0.5), 0 2px 8px rgba(0,0,0,0.3)",
              transition: "all 0.25s ease",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ gridColumn: 2 }}>
              <rect x="4" y="2" width="16" height="20" rx="2" />
              <line x1="8" y1="6" x2="16" y2="6" />
              <line x1="16" y1="14" x2="16" y2="18" />
              <path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M8 18h.01M12 18h.01" />
            </svg>
            <span style={{ gridColumn: 3, textAlign: "left" }}>{t.calcBtn}</span>
          </a>

          {/* 3. Korean name (Saju) Button */}
          <a
            id="hero-name-btn"
            className="btn-3d"
            href={t.nameUrl}
            style={{
              gridColumn: "1 / -1",
              display: "grid",
              gridTemplateColumns: "subgrid",
              alignItems: "center",
              background: "rgba(255,255,255,0.18)",
              border: "1.5px solid rgba(255,255,255,0.55)",
              color: "white",
              padding: "15px 24px",
              borderRadius: 16,
              fontSize: 15,
              fontWeight: 800,
              textDecoration: "none",
              backdropFilter: "blur(12px)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
              transition: "all 0.25s ease",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f8dc93" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ gridColumn: 2 }}>
              <circle cx="12" cy="12" r="9" />
              <path d="M12 3a4.5 4.5 0 0 1 0 9a4.5 4.5 0 0 0 0 9" />
              <circle cx="12" cy="7.5" r="1.1" fill="#f8dc93" />
              <circle cx="12" cy="16.5" r="1.1" />
            </svg>
            <span style={{ gridColumn: 3, textAlign: "left" }}>{t.nameBtn}</span>
          </a>
          </div>

          {/* 4. Messenger | LINE, one row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <a
            id="hero-fb-btn"
            className="btn-3d"
            href={t.fbUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              background: "linear-gradient(135deg, #00b2ff 0%, #006aff 100%)",
              color: "white",
              padding: "14px 16px",
              borderRadius: 16,
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(0,106,255,0.4)",
              transition: "all 0.25s ease",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
              <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17.16.14.26.35.27.57l.05 1.78c.02.57.6.94 1.12.71l1.98-.87c.17-.08.36-.09.53-.04.91.25 1.88.38 2.91.38 5.64 0 10-4.13 10-9.7S17.64 2 12 2zm6 7.46l-2.94 4.66c-.47.74-1.47.93-2.17.4l-2.34-1.75a.6.6 0 0 0-.72 0l-3.16 2.4c-.42.32-.97-.18-.69-.63l2.94-4.66c.47-.74 1.47-.93 2.17-.4l2.34 1.75a.6.6 0 0 0 .72 0l3.16-2.4c.42-.32.97.18.69.63z"/>
            </svg>
            {t.fbBtn}
          </a>

          <a
            id="hero-line-btn"
            className="btn-3d"
            href={t.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              background: "#06C755",
              color: "white",
              padding: "14px 16px",
              borderRadius: 16,
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(6,199,85,0.4)",
              transition: "all 0.25s ease",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.629 0 .344-.281.63-.629.63M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            {t.lineBtn}
          </a>
          </div>
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
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, fontWeight: 700, letterSpacing: "1.5px" }}>
            SCROLL DOWN FOR MORE
          </span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 8l5 5 5-5" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
