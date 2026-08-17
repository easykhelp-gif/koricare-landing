interface CTASectionProps {
  lang?: "en" | "th" | "vi";
}

export default function CTASection({ lang = "en" }: CTASectionProps) {
  const ctaMap = {
    en: {
      badge: "WE ARE HERE FOR YOU",
      title: "Ready for a Safe Life in Korea?",
      sub: "Have questions or need assistance in South Korea? Choose your preferred chat platform below.",
      calcBtn: "Severance Pay Calculator",
      fbBtn: "Facebook Messenger",
      lineBtn: "LINE Chat"
    },
    th: {
      badge: "เราพร้อมอยู่เคียงข้างคุณ",
      title: "พร้อมสำหรับการใช้ชีวิตในเกาหลีอย่างปลอดภัยหรือยัง?",
      sub: "มีข้อสงสัยหรือต้องการความช่วยเหลือในเกาหลีใต้? เลือกช่องทางแชตที่คุณสะดวกด้านล่าง",
      calcBtn: "โปรแกรมคำนวณเงินชดเชย",
      fbBtn: "Facebook Messenger",
      lineBtn: "LINE Chat"
    },
    vi: {
      badge: "CHÚNG TÔI LUÔN SẴN SÀNG",
      title: "Sẵn sàng cho cuộc sống an toàn tại Hàn Quốc?",
      sub: "Bạn có thắc mắc hoặc cần hỗ trợ tại Hàn Quốc? Chọn nền tảng trò chuyện thuận tiện bên dưới.",
      calcBtn: "Tính tiền trợ cấp thôi việc",
      fbBtn: "Facebook Messenger",
      lineBtn: "LINE Chat"
    }
  };

  const t = ctaMap[lang];
  return (
    <section
      id="contact"
      className="scene-3d"
      style={{
        padding: "0 20px 120px",
        maxWidth: 480,
        margin: "0 auto",
      }}
    >
      <div
        className="reveal depth-3d surface-3d"
        style={{
          background: "linear-gradient(160deg, #f8f9ff 0%, #edf2ff 50%, #e8f0ff 100%)",
          borderRadius: 28,
          padding: "40px 24px",
          textAlign: "center",
          border: "1px solid rgba(0,35,102,0.08)",
          boxShadow: "0 8px 32px rgba(0,35,102,0.08)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: -20,
            right: -20,
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "rgba(0,35,102,0.04)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -30,
            left: -30,
            width: 140,
            height: 140,
            borderRadius: "50%",
            background: "rgba(26,79,196,0.04)",
          }}
        />

        {/* Original 3D People Illustration Image Asset */}
        <div
          className="animate-float"
          style={{ marginBottom: 16, display: "inline-block" }}
        >
          <img
            src="/cta_people_isolated.png"
            alt="Kori Care helpers"
            style={{
              width: 100,
              height: 100,
              objectFit: "contain",
              mixBlendMode: "multiply",
              display: "block",
            }}
          />
        </div>

        {/* Headline */}
        <h2
          style={{
            fontSize: "clamp(20px, 5.5vw, 26px)",
            fontWeight: 800,
            color: "#002366",
            lineHeight: 1.35,
            marginBottom: 14,
          }}
        >
          {t.title}
        </h2>

        <p
          style={{
            fontSize: 14,
            color: "#4a5568",
            lineHeight: 1.75,
            marginBottom: 32,
            maxWidth: 320,
            margin: "0 auto 32px",
          }}
        >
          {t.sub}
        </p>

        {/* CTA buttons (LINE & Facebook Messenger) */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, position: "relative" }}>
          <a
            id="cta-line-btn"
            href="https://line.me/R/ti/p/@768mkjml"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer btn-3d"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              color: "white",
              padding: "16px 24px",
              borderRadius: 16,
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(0,35,102,0.35)",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onTouchStart={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "scale(0.97)";
            }}
            onTouchEnd={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.629 0 .344-.281.63-.629.63M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            LINE Chat
          </a>

          <a
            id="cta-fb-btn"
            href="https://m.me/koricare.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3d"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              background: "#1877F2",
              color: "white",
              padding: "15px 24px",
              borderRadius: 16,
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(24,119,242,0.35)",
              transition: "transform 0.25s ease",
            }}
            onTouchStart={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "scale(0.97)";
            }}
            onTouchEnd={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook Messenger
          </a>
        </div>

        {/* Fine print & Privacy Policy Link */}
        <div style={{ marginTop: 18, textAlign: "center" }}>
          <p
            style={{
              fontSize: 12,
              color: "#a0aec0",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            🔒 Your information is confidential · Free consultation
          </p>

          {/* The brand's Korean and Thai names only existed in meta tags and
              JSON-LD, which meant a Korean-language search for 코리케어 had no
              visible text to match against. */}
          <p
            style={{
              fontSize: 11.5,
              color: "#a0aec0",
              lineHeight: 1.6,
              margin: "8px 0 0",
            }}
          >
            Kori Care · 코리케어 · โครีแคร์
          </p>
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vQIjmBDUa6lTRNLATBxdh7Haa3BOYAjX8F66nfSLMvfXW4dXRJuT-MW4HwonfigVfaP_c4ZgqpvgPyz/pub"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 11,
              color: "#a0aec0",
              textDecoration: "underline",
              display: "inline-block",
              marginTop: 6,
              transition: "color 0.2s ease",
            }}
          >
            Privacy Policy (개인정보처리방침)
          </a>
        </div>
      </div>
    </section>
  );
}
