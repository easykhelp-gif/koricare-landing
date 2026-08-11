"use client";

const services = [
  {
    id: "service-card-visa-legal",
    emoji: "⚖️",
    title: "Visa & Legal Case Coordination",
    desc: "Guidance on visa extensions and direct referrals to certified legal specialists and labor support centers.",
    color: "#fff8e8",
    iconBg: "linear-gradient(135deg, #c47a00, #f5a623)",
    tag: "Your Rights",
    tagColor: "#c47a00",
  },
  {
    id: "service-card-housing",
    emoji: "🏠",
    title: "Housing Contract Verification",
    desc: "Translation of real estate lease agreements, maintenance fee verification, and clause checks for peace of mind.",
    color: "#f0e8ff",
    iconBg: "linear-gradient(135deg, #4a1c8a, #8b5cf6)",
    tag: "Recommended",
    tagColor: "#4a1c8a",
  },
  {
    id: "service-card-medical",
    emoji: "🏥",
    title: "Hospital & Medical Care Guidance",
    desc: "Locating foreigner-friendly medical clinics, preparing required documents, and navigating healthcare access.",
    color: "#e8fff0",
    iconBg: "linear-gradient(135deg, #0a6e3f, #14b87a)",
    tag: "Important",
    tagColor: "#0a6e3f",
  },
  {
    id: "service-card-finance-life",
    emoji: "💳",
    title: "Online & Financial Assistance",
    desc: "Support for Korean app usage, online purchases, and finding optimal remittance channels back home.",
    color: "#e8f0ff",
    iconBg: "linear-gradient(135deg, #002366, #1a4fc4)",
    tag: "Convenient",
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
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "#002366",
              letterSpacing: "1px",
            }}
          >
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
          How Kori Care Helps You <br />
          <span style={{ color: "#002366" }}>in Every Aspect</span>
        </h2>
        <p style={{ color: "#718096", fontSize: 14, lineHeight: 1.65, margin: 0 }}>
          Big or small, feel free to reach out. <br />
          We are always here for you 😊
        </p>
      </div>

      {/* Services list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {services.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className="reveal"
            style={{
              background: "white",
              borderRadius: 20,
              padding: "20px",
              display: "flex",
              gap: 16,
              alignItems: "flex-start",
              boxShadow: "0 4px 20px rgba(0,35,102,0.07)",
              border: "1px solid rgba(0,35,102,0.06)",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: item.iconBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                flexShrink: 0,
                boxShadow: "0 4px 12px rgba(0,35,102,0.2)",
              }}
            >
              {item.emoji}
            </div>

            {/* Content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 6,
                  flexWrap: "wrap",
                }}
              >
                <h3
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#1a1f36",
                    lineHeight: 1.35,
                    flex: 1,
                    margin: 0,
                  }}
                >
                  {item.title}
                </h3>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: item.tagColor,
                    background: item.color,
                    padding: "3px 8px",
                    borderRadius: 8,
                    whiteSpace: "nowrap",
                    letterSpacing: "0.3px",
                  }}
                >
                  {item.tag}
                </span>
              </div>
              <p
                style={{
                  fontSize: 12.5,
                  color: "#718096",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
