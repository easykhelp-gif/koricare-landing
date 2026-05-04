"use client";

const steps = [
  {
    id: "step1",
    num: "01",
    icon: "💬",
    title: "ทักมาคุย",
    desc: "ส่งข้อความหาเราผ่าน LINE หรือ Facebook ได้เลย บอกปัญหาของคุณเป็นภาษาไทย",
  },
  {
    id: "step2",
    num: "02",
    icon: "🤝",
    title: "เราช่วยทันที",
    desc: "Easy-K รับเรื่องและดำเนินการให้ เหมือนมีเพื่อนคนเกาหลีช่วยทำทุกอย่าง",
  },
  {
    id: "step3",
    num: "03",
    icon: "✅",
    title: "แก้ปัญหาสำเร็จ!",
    desc: "เราแจ้งผลให้คุณทราบ พร้อมอัปเดตตลอด ไม่ทิ้งให้รอเป็นนานๆ",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      style={{
        padding: "20px 20px 60px",
        maxWidth: 480,
        margin: "0 auto",
      }}
    >
      {/* Background blob */}
      <div
        style={{
          background: "linear-gradient(135deg, #f0f4ff 0%, #e8f0ff 100%)",
          borderRadius: 28,
          padding: "36px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circle */}
        <div
          style={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 160,
            height: 160,
            borderRadius: "50%",
            background: "rgba(0,35,102,0.06)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -30,
            left: -30,
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "rgba(26,79,196,0.05)",
          }}
        />

        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: 32 }}>
          <h2
            style={{
              fontSize: "clamp(20px, 5.5vw, 26px)",
              fontWeight: 800,
              color: "#002366",
              lineHeight: 1.3,
              marginBottom: 8,
            }}
          >
            ใช้งาน Easy-K
            <br />
            ง่ายมาก เพียง 3 ขั้นตอน
          </h2>
          <p style={{ color: "#4a5568", fontSize: 13.5 }}>
            ไม่ต้องรู้ภาษาเกาหลี ไม่ต้องกังวล
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {steps.map((step, i) => (
            <div
              key={step.id}
              id={step.id}
              className="reveal"
              style={{ position: "relative" }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    left: 26,
                    top: 52,
                    bottom: -8,
                    width: 2,
                    background: "linear-gradient(180deg, #1a4fc4 0%, rgba(26,79,196,0.15) 100%)",
                    borderRadius: 2,
                  }}
                />
              )}

              <div
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  padding: "0 0 24px",
                }}
              >
                {/* Number circle */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #002366, #1a4fc4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 4px 16px rgba(0,35,102,0.3)",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <span style={{ fontSize: 20 }}>{step.icon}</span>
                </div>

                {/* Content */}
                <div
                  style={{
                    background: "white",
                    borderRadius: 16,
                    padding: "14px 16px",
                    flex: 1,
                    boxShadow: "0 2px 12px rgba(0,35,102,0.06)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 800,
                        color: "#1a4fc4",
                        letterSpacing: "1px",
                      }}
                    >
                      {step.num}
                    </span>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1f36" }}>
                      {step.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: 13, color: "#718096", lineHeight: 1.65 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
