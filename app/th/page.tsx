"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ThaiMainPage() {
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
        {/* Thai Hero Banner */}
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
              เพื่อนคนเกาหลีของคุณ · Kori Care
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
              ค้นหาข้อมูลที่จำเป็น<br />
              <span style={{ color: "#60a5fa" }}>สำหรับชีวิตในเกาหลี ได้ในที่เดียว</span>
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
              ศูนย์รวมข้อมูลบริการทางการ เบอร์โทรฉุกเฉิน และสถานที่สำคัญสำหรับคนไทยในเกาหลี
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 340, margin: "0 auto" }}>
              <a
                id="th-hero-line-btn"
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
                💬 LINE Chat (ปรึกษาภาษาไทย)
              </a>

              <a
                id="th-hero-fb-btn"
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
                id="th-hero-portal-btn"
                href="https://www.koricare.kr/link/th/"
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
                🔗 ศูนย์รวมลิงก์สำคัญ (Thai Portal)
              </a>

              <a
                id="th-hero-calc-btn"
                href="https://www.koricare.kr/link/th/severance-calculator"
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
                🧮 โปรแกรมคำนวณเงินชดเชย (퇴직금)
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
