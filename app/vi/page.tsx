"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import FloatingButtons from "@/components/FloatingButtons";

export default function VietnameseMainPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", color: "#0f172a" }}>
      <Navbar scrolled={scrolled} />

      <main style={{ paddingTop: 80, paddingBottom: 60 }}>
        {/* Vietnamese Hero Banner */}
        <section
          style={{
            background: "linear-gradient(135deg, #001233 0%, #002366 50%, #1e40af 100%)",
            color: "#ffffff",
            padding: "52px 20px 60px",
            textAlign: "center",
            borderRadius: "0 0 36px 36px",
            boxShadow: "0 16px 36px rgba(0,35,102,0.25)",
          }}
        >
          <div style={{ maxWidth: 480, margin: "0 auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.25)",
                padding: "6px 16px",
                borderRadius: 20,
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                color: "#e0f2fe",
                marginBottom: 20,
              }}
            >
              Đối tác tin cậy tại Hàn Quốc · Kori Care
            </div>

            <h1
              style={{
                fontSize: 30,
                fontWeight: 900,
                lineHeight: 1.25,
                marginBottom: 12,
                letterSpacing: "-0.5px",
              }}
            >
              Cổng thông tin & Tư vấn thiết yếu<br />
              <span style={{ color: "#60a5fa" }}>cho cuộc sống tại Hàn Quốc</span>
            </h1>

            <p
              style={{
                fontSize: 14,
                color: "#e2e8f0",
                fontWeight: 500,
                marginBottom: 32,
                lineHeight: 1.6,
              }}
            >
              Tổng hợp liên kết dịch vụ chính thức, visa, quyền lao động và tìm kiếm địa điểm cho người Việt tại Hàn Quốc.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 340, margin: "0 auto" }}>
              <a
                id="vi-hero-line-btn"
                href="https://line.me/R/ti/p/@768mkjml"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#06C755",
                  color: "#ffffff",
                  padding: "15px",
                  borderRadius: 16,
                  fontSize: 15,
                  fontWeight: 800,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  boxShadow: "0 8px 24px rgba(6,199,85,0.35)",
                }}
              >
                💬 LINE Chat (Tư vấn trực tiếp)
              </a>

              <a
                id="vi-hero-fb-btn"
                href="https://m.me/koricare.kr"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1.5px solid rgba(255,255,255,0.4)",
                  color: "#ffffff",
                  padding: "14px",
                  borderRadius: 16,
                  fontSize: 15,
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  backdropFilter: "blur(8px)",
                }}
              >
                ⚡ Facebook Messenger
              </a>

              <a
                id="vi-hero-portal-btn"
                href="https://www.koricare.kr/link/vi/"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1.5px solid rgba(255,255,255,0.4)",
                  color: "#ffffff",
                  padding: "14px",
                  borderRadius: 16,
                  fontSize: 15,
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  backdropFilter: "blur(8px)",
                }}
              >
                🔗 Cổng liên kết thiết yếu (Vietnamese Portal)
              </a>

              <a
                id="vi-hero-calc-btn"
                href="https://www.koricare.kr/link/vi/severance-calculator"
                style={{
                  background: "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)",
                  color: "#ffffff",
                  padding: "15px",
                  borderRadius: 16,
                  fontSize: 15,
                  fontWeight: 800,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  boxShadow: "0 8px 24px rgba(29,78,216,0.4)",
                }}
              >
                🧮 Tính tiền trợ cấp thôi việc (퇴직금)
              </a>
            </div>
          </div>
        </section>
      </main>

      <FloatingButtons />
      <footer style={{ textAlign: "center", padding: "24px 0 40px", color: "#64748b", fontSize: 12 }}>
        © 2026 Kori Care. All rights reserved.
      </footer>
    </div>
  );
}
