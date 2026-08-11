"use client";
import { useState } from "react";
import Image from "next/image";

interface NavbarProps {
  scrolled: boolean;
  currentLang?: "en" | "th" | "vi";
}

export default function Navbar({ scrolled, currentLang = "en" }: NavbarProps) {
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const langLabels = {
    en: "English",
    th: "ภาษาไทย",
    vi: "Tiếng Việt"
  };

  return (
    <nav
      id="navbar"
      style={{
        position: "fixed",
        top: 10,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.35s ease",
        background: scrolled
          ? "rgba(255,255,255,0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0,35,102,0.12)" : "none",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          maxWidth: 480,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 60,
        }}
      >
        {/* Brand logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <Image
            src="/koricare_main_logo_nobg.png"
            alt="Kori Care"
            width={38}
            height={38}
            priority
            style={{
              objectFit: "contain",
              flexShrink: 0,
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span
              style={{
                fontWeight: 900,
                fontSize: 16.5,
                color: scrolled ? "#002366" : "white",
                letterSpacing: "-0.3px",
                transition: "color 0.3s",
                display: "block",
                lineHeight: 1.0,
                marginBottom: 2,
                textShadow: scrolled ? "none" : "0 1px 8px rgba(0,0,0,0.5)",
              }}
            >
              Kori Care
            </span>
            <span
              style={{
                fontSize: 9,
                fontWeight: 800,
                color: scrolled ? "#4a5568" : "rgba(255,255,255,0.9)",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                transition: "color 0.3s",
                lineHeight: 1.0,
              }}
            >
              Life Helper
            </span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* Contact Us button (Placed to the left of Language selector) */}
          <a
            id="nav-cta-btn"
            href="#contact"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: scrolled ? "rgba(0,35,102,0.12)" : "rgba(0,25,80,0.55)",
              border: scrolled ? "1.5px solid rgba(0,35,102,0.3)" : "1.5px solid rgba(255,255,255,0.7)",
              color: scrolled ? "#002366" : "#ffffff",
              padding: "7px 16px",
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 800,
              textDecoration: "none",
              backdropFilter: "blur(12px)",
              boxShadow: scrolled ? "0 2px 8px rgba(0,35,102,0.15)" : "0 4px 14px rgba(0,0,0,0.3)",
              transition: "all 0.25s ease",
              whiteSpace: "nowrap",
            }}
          >
            Contact Us
          </a>

          {/* Glassmorphism Language Selector (Far Right Position) */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                background: scrolled ? "rgba(0,35,102,0.12)" : "rgba(0,25,80,0.55)",
                border: scrolled ? "1.5px solid rgba(0,35,102,0.3)" : "1.5px solid rgba(255,255,255,0.7)",
                color: scrolled ? "#002366" : "#ffffff",
                padding: "7px 14px",
                borderRadius: 20,
                fontSize: 13,
                fontWeight: 800,
                outline: "none",
                cursor: "pointer",
                backdropFilter: "blur(12px)",
                boxShadow: scrolled ? "0 2px 8px rgba(0,35,102,0.15)" : "0 4px 14px rgba(0,0,0,0.3)",
                transition: "all 0.25s ease",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>{langLabels[currentLang]}</span>
              <span style={{ fontSize: 9, opacity: 0.85, marginLeft: 2 }}>▼</span>
            </button>

            {/* Clean Dropdown Menu */}
            {langMenuOpen && (
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: 42,
                  background: "#002366",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  borderRadius: 14,
                  padding: 6,
                  boxShadow: "0 12px 36px rgba(0,0,0,0.45)",
                  minWidth: 125,
                  zIndex: 1000,
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                <a
                  href="https://www.koricare.kr/"
                  style={{
                    padding: "9px 14px",
                    color: "#ffffff",
                    fontSize: 13,
                    fontWeight: 800,
                    textDecoration: "none",
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.2)",
                  }}
                >
                  English
                </a>
                <a
                  href="https://www.koricare.kr/th"
                  style={{
                    padding: "9px 14px",
                    color: "rgba(255,255,255,0.9)",
                    fontSize: 13,
                    fontWeight: 700,
                    textDecoration: "none",
                    borderRadius: 8,
                  }}
                >
                  ไทย
                </a>
                <a
                  href="https://www.koricare.kr/vi"
                  style={{
                    padding: "9px 14px",
                    color: "rgba(255,255,255,0.9)",
                    fontSize: 13,
                    fontWeight: 700,
                    textDecoration: "none",
                    borderRadius: 8,
                  }}
                >
                  Tiếng Việt
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
