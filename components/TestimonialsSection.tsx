"use client";

const testimonials = [
  {
    id: "review1",
    name: "นุ่น",
    flag: "🇹🇭",
    role: "ทำงานที่โซล 2 ปี",
    text: "ขอบคุณ Kori Care มากเลยค่ะ ช่วยจองคลินิกให้ และแปลใบสรุปโรคด้วย ไม่รู้จะทำยังไงถ้าไม่มีทีมนี้ 🙏",
    stars: 5,
    avatar: "🧑‍💼",
  },
  {
    id: "review2",
    name: "บอล",
    flag: "🇹🇭",
    role: "นักศึกษา มหาวิทยาลัยยอนเซ",
    text: "สั่งของ Coupang ไม่เป็น Kori Care ช่วยสั่งให้ ได้ของเร็วมาก บริการดีมากครับ แนะนำเลย!",
    stars: 5,
    avatar: "🎓",
  },
  {
    id: "review3",
    name: "พิม",
    flag: "🇹🇭",
    role: "พยาบาลที่ปูซาน",
    text: "ปัญหาสัญญาเช่าบ้าน Kori Care ช่วยอ่านและอธิบายให้เข้าใจหมดเลยค่ะ รู้สึกอุ่นใจมาก เหมือนมีเพื่อนจริงๆ",
    stars: 5,
    avatar: "👩‍⚕️",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      style={{
        padding: "0 20px 60px",
        maxWidth: 480,
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div className="reveal" style={{ textAlign: "center", marginBottom: 24 }}>
        <h2
          style={{
            fontSize: "clamp(20px, 5.5vw, 26px)",
            fontWeight: 800,
            color: "#1a1f36",
            lineHeight: 1.3,
            marginBottom: 8,
          }}
        >
          เสียงจาก
          <span style={{ color: "#002366" }}> เพื่อนๆ ของเรา</span>
        </h2>
        <p style={{ color: "#718096", fontSize: 13.5 }}>
          คนที่ใช้ Kori Care บอกว่าอย่างไร
        </p>
      </div>

      {/* Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {testimonials.map((t, i) => (
          <div
            key={t.id}
            id={t.id}
            className="reveal"
            style={{
              background: "white",
              borderRadius: 20,
              padding: "20px",
              boxShadow: "0 4px 20px rgba(0,35,102,0.07)",
              border: "1px solid rgba(0,35,102,0.05)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Quote mark decoration */}
            <div
              style={{
                position: "absolute",
                top: 12,
                right: 16,
                fontSize: 48,
                color: "rgba(0,35,102,0.06)",
                fontFamily: "Georgia, serif",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              "
            </div>

            {/* Stars */}
            <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
              {Array.from({ length: t.stars }).map((_, si) => (
                <span key={si} style={{ color: "#fbbf24", fontSize: 14 }}>★</span>
              ))}
            </div>

            {/* Review text */}
            <p
              style={{
                fontSize: 14,
                color: "#4a5568",
                lineHeight: 1.7,
                marginBottom: 16,
                fontStyle: "italic",
              }}
            >
              "{t.text}"
            </p>

            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #e8f0ff, #f0e8ff)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  flexShrink: 0,
                }}
              >
                {t.avatar}
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontWeight: 700, fontSize: 14, color: "#1a1f36" }}>
                    คุณ{t.name}
                  </span>
                  <span style={{ fontSize: 14 }}>{t.flag}</span>
                </div>
                <span style={{ fontSize: 12, color: "#a0aec0" }}>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust stats */}
      <div
        className="reveal"
        style={{
          display: "flex",
          gap: 0,
          marginTop: 28,
          background: "linear-gradient(135deg, #002366, #1a4fc4)",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 8px 28px rgba(0,35,102,0.25)",
        }}
      >
        {[
          { num: "500+", label: "คนที่เราช่วยแล้ว" },
          { num: "98%", label: "ความพึงพอใจ" },
          { num: "24h", label: "พร้อมช่วยเหลือ" },
        ].map((stat, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              padding: "20px 12px",
              textAlign: "center",
              borderRight: i < 2 ? "1px solid rgba(255,255,255,0.15)" : "none",
            }}
          >
            <div
              style={{
                fontSize: "clamp(20px, 5vw, 26px)",
                fontWeight: 800,
                color: "white",
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              {stat.num}
            </div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.72)", lineHeight: 1.3 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
