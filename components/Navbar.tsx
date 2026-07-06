"use client";
import Image from "next/image";

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  return (
    <nav
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.35s ease",
        background: scrolled
          ? "rgba(255,255,255,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0,35,102,0.10)" : "none",
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
        {/* Brand logo: clean icon + text */}
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <Image
            src="/icon.png"
            alt="Easy-K"
            width={36}
            height={36}
            priority
            style={{
              objectFit: "contain",
              flexShrink: 0,
            }}
          />
          <div>
            <span
              style={{
                fontWeight: 800,
                fontSize: 16,
                color: scrolled ? "#002366" : "white",
                letterSpacing: "-0.3px",
                transition: "color 0.3s",
                display: "block",
                lineHeight: 1.1,
                textShadow: scrolled ? "none" : "0 1px 8px rgba(0,0,0,0.35)",
              }}
            >
              Easy-K
            </span>
            <span
              style={{
                fontSize: 9,
                fontWeight: 600,
                color: scrolled ? "#718096" : "rgba(255,255,255,0.80)",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                transition: "color 0.3s",
              }}
            >
              Life Helper
            </span>
          </div>
        </div>

        {/* CTA button */}
        <a
          id="nav-cta-btn"
          href="#contact"
          style={{
            background: scrolled
              ? "linear-gradient(135deg, #002366, #1a4fc4)"
              : "rgba(255,255,255,0.2)",
            border: scrolled ? "none" : "1.5px solid rgba(255,255,255,0.7)",
            color: "white",
            padding: "8px 18px",
            borderRadius: 24,
            fontSize: 12,
            fontWeight: 600,
            textDecoration: "none",
            backdropFilter: "blur(8px)",
            transition: "all 0.3s",
            whiteSpace: "nowrap",
          }}
          onMouseOver={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
          }}
        >
          ติดต่อเรา
        </a>
      </div>
    </nav>
  );
}
