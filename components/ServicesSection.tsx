"use client";

interface ServicesSectionProps {
  lang?: "en" | "th" | "vi";
}

export default function ServicesSection({ lang = "en" }: ServicesSectionProps) {
  const titlesMap = {
    en: { badge: "WE HELP WITH", title1: "How Kori Care Helps You", title2: "in Every Aspect", sub: "Big or small, feel free to reach out. We are always here for you 😊" },
    th: { badge: "เราพร้อมช่วยเหลือคุณ", title1: "โคริแคร์ดูแลคุณอย่างไร", title2: "ในทุกด้านของการใช้ชีวิต", sub: "ไม่ว่าจะเรื่องเล็กหรือใหญ่ สอบถามได้ตลอดเวลา เราพร้อมอยู่เคียงข้างคุณเสมอ 😊" },
    vi: { badge: "HỖ TRỢ TOÀN DIỆN", title1: "Kori Care hỗ trợ bạn", title2: "trong mọi khía cạnh cuộc sống", sub: "Dù là vấn đề lớn hay nhỏ, hãy liên hệ với chúng tôi. Chúng tôi luôn sẵn sàng giúp đỡ bạn 😊" }
  };

  const servicesMap = {
    en: [
      { id: "s1", emoji: "⚖️", title: "Visa & Legal Case Coordination", desc: "Guidance on visa extensions and direct referrals to certified legal specialists and labor support centers.", tag: "Your Rights", color: "#fff8e8", iconBg: "linear-gradient(135deg, #c47a00, #f5a623)", tagColor: "#c47a00" },
      { id: "s2", emoji: "🏠", title: "Housing Contract Verification", desc: "Translation of real estate lease agreements, maintenance fee verification, and clause checks.", tag: "Recommended", color: "#f0e8ff", iconBg: "linear-gradient(135deg, #4a1c8a, #8b5cf6)", tagColor: "#4a1c8a" },
      { id: "s3", emoji: "🏥", title: "Hospital & Medical Care Guidance", desc: "Locating foreigner-friendly medical clinics, preparing required documents, and emergency care.", tag: "Important", color: "#e8fff0", iconBg: "linear-gradient(135deg, #0a6e3f, #14b87a)", tagColor: "#0a6e3f" },
      { id: "s4", emoji: "💳", title: "Online & Financial Assistance", desc: "Support for Korean app usage, online purchases, and finding optimal remittance channels.", tag: "Convenient", color: "#e8f0ff", iconBg: "linear-gradient(135deg, #002366, #1a4fc4)", tagColor: "#002366" }
    ],
    th: [
      { id: "s1", emoji: "⚖️", title: "คำแนะนำวีซ่าและสิทธิแรงงาน", desc: "ให้คำแนะนำการต่ออายุวีซ่า ประสานงานศูนย์สนับสนุนแรงงานและผู้เชี่ยวชาญทางกฎหมาย", tag: "สิทธิของคุณ", color: "#fff8e8", iconBg: "linear-gradient(135deg, #c47a00, #f5a623)", tagColor: "#c47a00" },
      { id: "s2", emoji: "🏠", title: "ตรวจสอบสัญญาเช่าที่พัก", desc: "แปลสัญญาเช่าอสังหาริมทรัพย์ ตรวจสอบค่าบำรุงรักษาและเงื่อนไขสำคัญเพื่อความสบายใจ", tag: "แนะนำ", color: "#f0e8ff", iconBg: "linear-gradient(135deg, #4a1c8a, #8b5cf6)", tagColor: "#4a1c8a" },
      { id: "s3", emoji: "🏥", title: "แนะนำโรงพยาบาลและการรักษา", desc: "ค้นหาโรงพยาบาลที่รองรับคนต่างชาติ เตรียมเอกสารการรักษาและบริการฉุกเฉิน", tag: "สำคัญ", color: "#e8fff0", iconBg: "linear-gradient(135deg, #0a6e3f, #14b87a)", tagColor: "#0a6e3f" },
      { id: "s4", emoji: "💳", title: "ช่วยเหลือด้านการเงินและชีวิตประจำวัน", desc: "ช่วยเหลือการใช้งานแอปพลิเคชันเกาหลี การซื้อของออนไลน์ และแอปโอนเงินกลับไทย", tag: "สะดวกสบาย", color: "#e8f0ff", iconBg: "linear-gradient(135deg, #002366, #1a4fc4)", tagColor: "#002366" }
    ],
    vi: [
      { id: "s1", emoji: "⚖️", title: "Tư vấn Visa & Quyền lao động", desc: "Hướng dẫn gia hạn visa, kết nối trung tâm hỗ trợ lao động và tư vấn pháp lý chính thức.", tag: "Quyền lợi của bạn", color: "#fff8e8", iconBg: "linear-gradient(135deg, #c47a00, #f5a623)", tagColor: "#c47a00" },
      { id: "s2", emoji: "🏠", title: "Kiểm tra hợp đồng thuê nhà", desc: "Dịch hợp đồng thuê nhà, kiểm tra phí quản lý và các điều khoản quan trọng.", tag: "Khuyên dùng", color: "#f0e8ff", iconBg: "linear-gradient(135deg, #4a1c8a, #8b5cf6)", tagColor: "#4a1c8a" },
      { id: "s3", emoji: "🏥", title: "Hướng dẫn Y tế & Bệnh viện", desc: "Tìm kiếm bệnh viện hỗ trợ người nước ngoài, chuẩn bị hồ sơ khám chữa bệnh.", tag: "Quan trọng", color: "#e8fff0", iconBg: "linear-gradient(135deg, #0a6e3f, #14b87a)", tagColor: "#0a6e3f" },
      { id: "s4", emoji: "💳", title: "Hỗ trợ Tài chính & Cuộc sống", desc: "Hỗ trợ sử dụng ứng dụng tại Hàn Quốc, mua sắm trực tuyến và chuyển tiền về nước.", tag: "Tiện lợi", color: "#e8f0ff", iconBg: "linear-gradient(135deg, #002366, #1a4fc4)", tagColor: "#002366" }
    ]
  };

  const t = titlesMap[lang];
  const list = servicesMap[lang];

  return (
    <section id="services" style={{ padding: "40px 20px 60px", maxWidth: 480, margin: "0 auto" }}>
      <div className="reveal" style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{ display: "inline-block", background: "rgba(0,35,102,0.06)", border: "1px solid rgba(0,35,102,0.12)", padding: "5px 14px", borderRadius: 20, marginBottom: 12 }}>
          <span style={{ color: "#002366", fontSize: 11.5, fontWeight: 900, letterSpacing: "1px" }}>{t.badge}</span>
        </div>
        <h2 style={{ fontSize: "clamp(22px, 6vw, 28px)", fontWeight: 800, color: "#002366", lineHeight: 1.3, marginBottom: 10 }}>
          {t.title1} <br />
          <span style={{ color: "#2563eb" }}>{t.title2}</span>
        </h2>
        <p style={{ color: "#718096", fontSize: 14, lineHeight: 1.65, margin: 0 }}>{t.sub}</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {list.map((item) => (
          <div key={item.id} className="reveal" style={{ background: "white", borderRadius: 20, padding: "20px", display: "flex", gap: 16, alignItems: "flex-start", boxShadow: "0 4px 20px rgba(0,35,102,0.07)", border: "1px solid rgba(0,35,102,0.06)" }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: item.iconBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>{item.emoji}</span>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "inline-block", background: item.color, color: item.tagColor, fontSize: 11, fontWeight: 800, padding: "3px 10px", borderRadius: 8, marginBottom: 6 }}>
                {item.tag}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1a1f36", marginBottom: 6, lineHeight: 1.3 }}>{item.title}</h3>
              <p style={{ fontSize: 13, color: "#4a5568", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
