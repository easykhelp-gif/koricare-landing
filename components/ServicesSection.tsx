"use client";

const services = [
  {
    id: "visa-legal",
    emoji: "⚖️",
    title: "ปรึกษาวีซ่าและประสานงานด้านกฎหมาย",
    desc: "แนะนำขั้นตอนการเตรียมเอกสารต่อวีซ่า และประสานงานส่งต่อเคสของคุณไปยังนักกฎหมายหรือศูนย์ช่วยเหลือแรงงานโดยตรงเพื่อสิทธิ์ของคุณ",
    color: "#fff8e8",
    iconBg: "linear-gradient(135deg, #c47a00, #f5a623)",
    tag: "สิทธิ์ของคุณ",
    tagColor: "#c47a00",
  },
  {
    id: "housing",
    emoji: "🏠",
    title: "วิเคราะห์สัญญาเช่าบ้านและดูแลความถูกต้อง",
    desc: "ช่วยอ่านและแปลสัญญาเช่าอสังหาริมทรัพย์เกาหลี ตรวจสอบค่าส่วนกลางและเงื่อนไขแฝง เพื่อให้คุณเซ็นสัญญาได้อย่างมั่นใจ",
    color: "#f0e8ff",
    iconBg: "linear-gradient(135deg, #4a1c8a, #8b5cf6)",
    tag: "แนะนำ",
    tagColor: "#4a1c8a",
  },
  {
    id: "medical",
    emoji: "🏥",
    title: "แนะนำข้อมูลโรงพยาบาลและการเข้ารักษา",
    desc: "ค้นหาโรงพยาบาลเฉพาะทางที่รองรับคนต่างชาติ แนะนำเอกสารที่จำเป็นสำหรับการยื่นรักษา และวิธีการเข้ารับบริการโดยไม่หลงทาง",
    color: "#e8fff0",
    iconBg: "linear-gradient(135deg, #0a6e3f, #14b87a)",
    tag: "สำคัญ",
    tagColor: "#0a6e3f",
  },
  {
    id: "finance-life",
    emoji: "💳",
    title: "แนะนำธุรกรรมออนไลน์และช่องทางการเงิน",
    desc: "ให้คำแนะนำขั้นตอนการสั่งซื้อของออนไลน์ วิธีการโอนเงินกลับไทยที่ได้เรทดีที่สุด และการแก้ปัญหาการใช้งานแอปพลิเคชันเกาหลี",
    color: "#e8f0ff",
    iconBg: "linear-gradient(135deg, #002366, #1a4fc4)",
    tag: "สะดวก",
    tagColor: "#002366",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        padding: "60px 20px 40px",
        maxWidth: 480,
        margin: "0 auto",
      }}
    >
      {/* Section header */}
      <div className="reveal" style={{ textAlign: "center", marginBottom: 32 }}>
        <div
          style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #e8f0ff, #f0e8ff)",
            borderRadius: 24,
            padding: "6px 16px",
            marginBottom: 12,
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 600, color: "#002366", letterSpacing: "1px" }}>
            WE HELP WITH
          </span>
        </div>
        <h2
          style={{
            fontSize: "clamp(22px, 6vw, 28px)",
            fontWeight: 800,
            color: "#1a1f36",
            lineHeight: 1.3,
            marginBottom: 10,
          }}
        >
          Kori Care ช่วยคุณได้
          <br />
          <span style={{ color: "#002366" }}>ในทุกเรื่อง</span>
        </h2>
        <p style={{ color: "#718096", fontSize: 14, lineHeight: 1.65 }}>
          ไม่ว่าเรื่องเล็กหรือเรื่องใหญ่ แค่ทักมาคุย
          <br />
          เราพร้อมช่วยเหลือคุณเสมอ 😊
        </p>
      </div>

      {/* Service cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {services.map((svc, i) => (
          <div
            key={svc.id}
            id={`service-card-${svc.id}`}
            className="reveal"
            style={{
              animationDelay: `${i * 0.1}s`,
              background: "white",
              borderRadius: 20,
              padding: "20px 20px",
              display: "flex",
              gap: 16,
              alignItems: "flex-start",
              boxShadow: "0 4px 20px rgba(0,35,102,0.07)",
              border: "1px solid rgba(0,35,102,0.06)",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onTouchStart={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "scale(0.98)";
            }}
            onTouchEnd={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: svc.iconBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                flexShrink: 0,
                boxShadow: "0 4px 12px rgba(0,35,102,0.2)",
              }}
            >
              {svc.emoji}
            </div>

            {/* Text */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
                <h3
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#1a1f36",
                    lineHeight: 1.35,
                    flex: 1,
                  }}
                >
                  {svc.title}
                </h3>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: svc.tagColor,
                    background: svc.color,
                    padding: "3px 8px",
                    borderRadius: 8,
                    whiteSpace: "nowrap",
                    letterSpacing: "0.3px",
                  }}
                >
                  {svc.tag}
                </span>
              </div>
              <p style={{ fontSize: 12.5, color: "#718096", lineHeight: 1.65 }}>
                {svc.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
