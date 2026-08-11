"use client";
import { useRef, useState } from "react";

interface TestimonialsSectionProps {
  lang?: "en" | "th" | "vi";
}

export default function TestimonialsSection({ lang = "en" }: TestimonialsSectionProps) {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const sectionTitleMap = {
    en: { title: "What Our Friends Say", sub: "Drag or swipe left/right to read real user experiences" },
    th: { title: "เสียงจากเพื่อนๆ ของเรา", sub: "ลากหรือปัดซ้าย/ขวาเพื่ออ่านประสบการณ์จริงจากผู้ใช้งาน" },
    vi: { title: "Cảm nhận từ cộng đồng", sub: "Kéo hoặc vuốt sang trái/phải để xem trải nghiệm thực tế" }
  };

  const reviewsMap = {
    en: [
      { id: "review1", avatar: "🙋‍♂️", text: "When I was ill, I didn't know which hospital to visit. The team guided me step by step. So comforting!" },
      { id: "review2", avatar: "🧑‍💻", text: "Korean official documents were so complicated. Kori Care explained everything line by line clearly!" },
      { id: "review3", avatar: "🙋‍♀️", text: "Checked my severance pay (퇴직금) accurately with the calculator. Helped me claim my legitimate rights!" },
      { id: "review4", avatar: "🙋‍♂️", text: "Got clear guidance on overseas remittance and emergency medical portals 24/7. Life in Korea became so safe." },
      { id: "review5", avatar: "👩‍💼", text: "Helpful advice on visa extensions and alien registration document preparation. Saved me hours of waiting!" },
      { id: "review6", avatar: "🧑‍🔧", text: "Had an issue with housing lease contract maintenance fees. Kori Care verified every single clause for me." },
      { id: "review7", avatar: "🙋‍♂️", text: "Found authentic local directories, hospitals, and emergency contact numbers immediately through Kori Care portal." },
      { id: "review8", avatar: "👩‍🎓", text: "Registered for the KIIP Korean language program with step-by-step registration guidance. Highly recommended!" },
      { id: "review9", avatar: "🙋‍♀️", text: "Whenever I face challenges or administrative doubts in South Korea, I reach out to Kori Care first." },
      { id: "review10", avatar: "🧑‍⚕️", text: "Always fast, kind, and accurate response in my own native language. My essential partner in Korea!" }
    ],
    th: [
      { id: "review1", avatar: "🙋‍♂️", text: "ตอนที่ฉันเจ็บป่วย ไม่รู้ว่าจะไปโรงพยาบาลไหน ทีมงานช่วยแนะนำและดูแลเป็นขั้นตอน รู้สึกอุ่นใจมาก!" },
      { id: "review2", avatar: "🧑‍💻", text: "เอกสารทางการของเกาหลียุ่งยากมาก โคริแคร์ช่วยอธิบายอย่างชัดเจน ทำให้ทำเรื่องเสร็จเรียบร้อย!" },
      { id: "review3", avatar: "🙋‍♀️", text: "คำนวณเงินชดเชยได้อย่างถูกต้องด้วยโปรแกรม ช่วยให้ฉันได้รับสิทธิอันชอบธรรมครบถ้วน" },
      { id: "review4", avatar: "🙋‍♂️", text: "ได้รับคำแนะนำเกี่ยวกับการโอนเงินกลับไทยและโรงพยาบาลฉุกเฉินตลอด 24 ชั่วโมง การใช้ชีวิตในเกาหลีปลอดภัยขึ้นมาก" },
      { id: "review5", avatar: "👩‍💼", text: "ได้รับคำแนะนำเรื่องการต่ออายุวีซ่าและการเตรียมเอกสารบัตรทะเบียนคนต่างด้าว ประหยัดเวลาได้เยอะมาก!" },
      { id: "review6", avatar: "🧑‍🔧", text: "มีปัญหาเรื่องสัญญาเช่าที่พักและค่าส่วนกลาง โคริแคร์ช่วยตรวจสอบสัญญาให้อย่างละเอียดทุกข้อ" },
      { id: "review7", avatar: "🙋‍♂️", text: "ค้นหาร้านอาหารไทย โรงพยาบาล และเบอร์ฉุกเฉินในเกาหลีได้ทันทีผ่านพอร์ทัล สะดวกมาก" },
      { id: "review8", avatar: "👩‍🎓", text: "สมัครเรียนโครงการKIIPภาษาเกาหลีสำเร็จด้วยคำแนะนำทีละขั้นตอน แนะนำสำหรับเพื่อนๆ ทุกคน!" },
      { id: "review9", avatar: "🙋‍♀️", text: "ไม่ว่าจะเจอ ปัญหาหรือสงสัยเรื่องเอกสารในเกาหลี ฉันจะทักหาโคริแคร์เป็นที่แรกเสมอ" },
      { id: "review10", avatar: "🧑‍⚕️", text: "ตอบกลับรวดเร็ว สุภาพ และถูกต้องเป็นภาษาไทยเสมอ เพื่อนคู่คิดที่ขาดไม่ได้ในเกาหลี!" }
    ],
    vi: [
      { id: "review1", avatar: "🙋‍♂️", text: "Khi bị ốm, tôi không biết nên đi bệnh viện nào. Đội ngũ đã hướng dẫn từng bước rất tận tình. Rất an tâm!" },
      { id: "review2", avatar: "🧑‍💻", text: "Thủ tục giấy tờ tại Hàn Quốc rất phức tạp. Kori Care đã giải thích rõ ràng từng chi tiết!" },
      { id: "review3", avatar: "🙋‍♀️", text: "Tính tiền trợ cấp thôi việc chính xác bằng công cụ. Giúp tôi bảo vệ quyền lợi chính đáng của mình!" },
      { id: "review4", avatar: "🙋‍♂️", text: "Được hướng dẫn chi tiết về chuyển tiền về nước và hỗ trợ y tế cấp cứu 24/7. Cuộc sống an toàn hơn nhiều." },
      { id: "review5", avatar: "👩‍💼", text: "Tư vấn gia hạn visa và chuẩn bị hồ sơ thẻ cư trú cực kỳ chu đáo. Tiết kiệm rất nhiều thời gian!" },
      { id: "review6", avatar: "🧑‍🔧", text: "Tôi băn khoăn về phí quản lý hợp đồng thuê nhà. Kori Care đã kiểm tra chi tiết từng điều khoản giúp tôi." },
      { id: "review7", avatar: "🙋‍♂️", text: "Tìm quán ăn Việt, bệnh viện và số khẩn cấp theo từng khu vực tại Hàn Quốc vô cùng nhanh chóng." },
      { id: "review8", avatar: "👩‍🎓", text: "Đã đăng ký thành công chương trình học tiếng Hàn KIIP nhờ hướng dẫn từng bước. Rất giới thiệu mọi người!" },
      { id: "review9", avatar: "🙋‍♀️", text: "Mỗi khi gặp khó khăn về giấy tờ hay cuộc sống tại Hàn Quốc, tôi luôn liên hệ Kori Care đầu tiên." },
      { id: "review10", avatar: "🧑‍⚕️", text: "Phản hồi nhanh chóng, thân thiện bằng tiếng Việt. Người đồng hành không thể thiếu tại Hàn Quốc!" }
    ]
  };

  const currentTitle = sectionTitleMap[lang];
  const reviewsList = reviewsMap[lang];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsMouseDown(false);
  const handleMouseUp = () => setIsMouseDown(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="testimonials" style={{ padding: "40px 20px 20px", maxWidth: 480, margin: "0 auto" }}>
      {/* Header */}
      <div className="reveal" style={{ textAlign: "center", marginBottom: 20 }}>
        <h2 style={{ fontSize: "clamp(20px, 5.5vw, 26px)", fontWeight: 800, color: "#002366", lineHeight: 1.3, marginBottom: 8 }}>
          {currentTitle.title}
        </h2>
        <p style={{ color: "#718096", fontSize: 13.5 }}>
          {currentTitle.sub}
        </p>
      </div>

      {/* 10 Testimonials Slider Container */}
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{
          display: "flex",
          gap: 14,
          overflowX: "auto",
          padding: "10px 4px 18px",
          WebkitOverflowScrolling: "touch",
          cursor: isMouseDown ? "grabbing" : "grab",
          userSelect: "none",
        }}
      >
        {reviewsList.map((rev) => (
          <div
            key={rev.id}
            style={{
              flex: "0 0 280px",
              background: "#ffffff",
              borderRadius: 20,
              padding: 20,
              boxShadow: "0 4px 20px rgba(0,35,102,0.06)",
              border: "1px solid rgba(0,35,102,0.08)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ fontSize: 28 }}>{rev.avatar}</div>
            <p style={{ fontSize: 13.5, color: "#334155", lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
              &quot;{rev.text}&quot;
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
