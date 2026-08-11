"use client";

const steps = [
  {
    id: "step1",
    num: "01",
    icon: "💬",
    title: "Send Us a Message",
    desc: "Reach out via Messenger or LINE anytime. Describe your situation comfortably in your own language.",
  },
  {
    id: "step2",
    num: "02",
    icon: "🤝",
    title: "Immediate Assistance",
    desc: "Kori Care takes action right away—acting just like your personal Korean friend to solve issues smoothly.",
  },
  {
    id: "step3",
    num: "03",
    icon: "✅",
    title: "Problem Resolved",
    desc: "We keep you updated continuously until your inquiry or administrative request is fully completed.",
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
      <div
        style={{
          background: "linear-gradient(135deg, #f0f4ff 0%, #e8f0ff 100%)",
          borderRadius: 28,
          padding: "36px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
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
            3 Simple Steps <br />
            to Get Started
          </h2>
          <p style={{ color: "#4a5568", fontSize: 13.5, margin: 0 }}>
            No Korean language skills required. Zero hassle.
          </p>
        </div>

        {/* Timeline Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {steps.map((step, idx) => (
            <div key={step.id} id={step.id} className="reveal" style={{ position: "relative" }}>
              {/* Connecting vertical line */}
              {idx < steps.length - 1 && (
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
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1f36", margin: 0 }}>
                      {step.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: 13, color: "#718096", lineHeight: 1.65, margin: 0 }}>
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
