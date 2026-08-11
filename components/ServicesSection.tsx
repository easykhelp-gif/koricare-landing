interface ServicesSectionProps {
  lang?: "en" | "th" | "vi";
}

export default function ServicesSection({ lang = "en" }: ServicesSectionProps) {
  const titlesMap = {
    en: { badge: "WE HELP WITH", title1: "How Kori Care Helps You", title2: "in Every Aspect", sub: "Big or small, feel free to reach out. We are always here for you 😊" },
    th: { badge: "เราพร้อมช่วยเหลือคุณ", title1: "โคริแคร์ดูแลคุณอย่างไร", title2: "ในทุกด้านของการใช้ชีวิต", sub: "ไม่ว่าจะเรื่องเล็กหรือใหญ่ สอบถามได้ตลอดเวลา เราพร้อมอยู่เคียงข้างคุณเสมอ 😊" },
    vi: { badge: "HỖ TRỢ TOÀN DIỆN", title1: "Kori Care hỗ trợ bạn như thế nào", title2: "trong mọi khía cạnh cuộc sống", sub: "Dù là vấn đề lớn hay nhỏ, hãy liên hệ với chúng tôi. Chúng tôi luôn sẵn sàng giúp đỡ bạn 😊" }
  };

  const servicesMap = {
    en: [
      { id: "s1", emoji: "⚖️", title: "Visa & Legal Case Coordination", desc: "Guidance on visa extensions and direct referrals to certified legal specialists and labor support centers.", tag: "Your Rights" },
      { id: "s2", emoji: "🏠", title: "Housing Contract Verification", desc: "Translation of real estate lease agreements, maintenance fee verification, and clause checks.", tag: "Recommended" },
      { id: "s3", emoji: "🏥", title: "Hospital & Medical Care Guidance", desc: "Locating foreigner-friendly medical clinics, preparing required documents, and emergency care.", tag: "Important" },
      { id: "s4", emoji: "💳", title: "Online & Financial Assistance", desc: "Support for Korean app usage, online purchases, and finding optimal remittance channels.", tag: "Convenient" }
    ],
    th: [
      { id: "s1", emoji: "⚖️", title: "คำแนะนำวีซ่าและสิทธิแรงงาน", desc: "ให้คำแนะนำการต่ออายุวีซ่า ประสานงานศูนย์สนับสนุนแรงงานและผู้เชี่ยวชาญทางกฎหมาย", tag: "สิทธิของคุณ" },
      { id: "s2", emoji: "🏠", title: "ตรวจสอบสัญญาเช่าที่พัก", desc: "แปลสัญญาเช่าอสังหาริมทรัพย์ ตรวจสอบค่าบำรุงรักษาและเงื่อนไขสำคัญเพื่อความสบายใจ", tag: "แนะนำ" },
      { id: "s3", emoji: "🏥", title: "แนะนำโรงพยาบาลและการรักษา", desc: "ค้นหาโรงพยาบาลที่รองรับคนต่างชาติ เตรียมเอกสารการรักษาและบริการฉุกเฉิน", tag: "สำคัญ" },
      { id: "s4", emoji: "💳", title: "ช่วยเหลือด้านการเงินและชีวิตประจำวัน", desc: "ช่วยเหลือการใช้งานแอปพลิเคชันเกาหลี การซื้อของออนไลน์ และแอปโอนเงินกลับไทย", tag: "สะดวกสบาย" }
    ],
    vi: [
      { id: "s1", emoji: "⚖️", title: "Tư vấn Visa & Quyền lao động", desc: "Hướng dẫn gia hạn visa, kết nối trung tâm hỗ trợ lao động và tư vấn pháp lý chính thức.", tag: "Quyền lợi của bạn" },
      { id: "s2", emoji: "🏠", title: "Kiểm tra hợp đồng thuê nhà", desc: "Dịch hợp đồng thuê nhà, kiểm tra phí quản lý và các điều khoản quan trọng.", tag: "Khuyên dùng" },
      { id: "s3", emoji: "🏥", title: "Hướng dẫn Y tế & Bệnh viện", desc: "Tìm kiếm bệnh viện hỗ trợ người nước ngoài, chuẩn bị hồ sơ khám chữa bệnh.", tag: "Quan trọng" },
      { id: "s4", emoji: "💳", title: "Hỗ trợ Tài chính & Cuộc sống", desc: "Hỗ trợ sử dụng ứng dụng tại Hàn Quốc, mua sắm trực tuyến và chuyển tiền về nước.", tag: "Tiện lợi" }
    ]
  };

  const t = titlesMap[lang];
  const list = servicesMap[lang];
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
            {t.badge}
          </span>
        </div>
        <h2
          style={{
            fontSize: "clamp(22px, 6vw, 28px)",
            fontWeight: 800,
            color: "#002366",
            lineHeight: 1.3,
            marginBottom: 10,
          }}
        >
          {t.title1} <br />
          <span style={{ color: "#2563eb" }}>{t.title2}</span>
        </h2>
        <p style={{ color: "#718096", fontSize: 14, lineHeight: 1.65, margin: 0 }}>
          {t.sub}
        </p>
      </div>

      {/* Services list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {list.map((item) => (
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
