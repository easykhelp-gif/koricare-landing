"use client";

const testimonials = [
  {
    id: "review1",
    avatar: "🙋‍♂️",
    text: "ตอนป่วยไม่รู้ว่าต้องไปโรงพยาบาลไหนหรือเตรียมเอกสารยังไง แต่ทีมงานช่วยแนะนำโรงพยาบาลที่เหมาะสมและวิธีติดต่อให้อย่างละเอียด ทำให้เข้ารับการรักษาได้อย่างราบรื่นและอุ่นใจมากครับ",
  },
  {
    id: "review2",
    avatar: "🧑‍💻",
    text: "เอกสารราชการเกาหลีเขียนยากมากจนต้องเลื่อนกำหนดไปเรื่อยๆ แต่พอได้ทีมงานช่วยอธิบายและดูแบบฟอร์มไปทีละขั้นตอน งานที่เคยยากก็เสร็จเร็วมากเลยครับ",
  },
  {
    id: "review3",
    avatar: "🙋‍♀️",
    text: "กลัวเรื่องการเซ็นสัญญาเช่าบ้านมากเพราะอ่านไม่ออก แต่ทีมงานช่วยตรวจดูรายละเอียดตั้งแต่ค่าส่วนกลางไปจนถึงค่าเช่าเฉลี่ยของย่านนั้นให้อย่างละเอียดเหมือนเป็นธุระของตัวเอง สบายใจขึ้นเยอะเลยค่ะ",
  },
  {
    id: "review4",
    avatar: "🙋‍♂️",
    text: "วิธีโอนเงินกลับไทยมีหลายช่องทางและค่าธรรมเนียมก็น่าปวดหัวมาก แต่ได้รับการแนะนำวิธีโอนที่คุ้มค่าและสะดวกที่สุดสำหรับผม ช่วยประหยัดเงินและทำเสร็จได้ในครั้งเดียวเลยครับ",
  },
  {
    id: "review5",
    avatar: "🙋‍♀️",
    text: "ตอนแรกแค่ทักมาถามเรื่องวิธีสั่งเครื่องสำอาง แต่ทีมงานแนะนำข้อมูลที่เป็นประโยชน์เรื่องการต่อวีซ่าให้ด้วยอย่างใจดี ตอนนี้เวลามีปัญหาอะไรในเกาหลี จะนึกถึง Kori Care เป็นที่แรกเลยค่ะ",
  },
  {
    id: "review6",
    avatar: "🧑‍🔧",
    text: "ไม่เคยรู้เลยว่าแรงงานต่างชาติก็มีสิทธิ์ได้รับเงินชดเชย (퇴직금) แต่ทีมงานช่วยประสานงานและอธิบายขั้นตอนข้อกฎหมายให้อย่างละเอียด ถึงเงินจะไม่เยอะมากแต่ก็ช่วยปกป้องสิทธิ์ของเราจนสำเร็จ รู้สึกอุ่นใจมากครับ",
  },
  {
    id: "review7",
    avatar: "🧑‍💼",
    text: "มีปัญหาเรื่องนายจ้างค้างค่าจ้างและคุยกันไม่เข้าใจจนเครียดมาก แต่ทีมงานช่วยติดต่อประสานงานกับหน่วยงานทางการและนักกฎหมายแรงงานให้ พร้อมคอยช่วยไกล่เกลี่ยสื่อสารจนจบปัญหาได้ด้วยดีโดยไม่มีเรื่องทะเลาะกันครับ",
  },
  {
    id: "review8",
    avatar: "👩‍🎓",
    text: "อยากสมัครเรียนโปรแกรม KIIP แต่ไม่รู้วิธีจนหลงทางและเสียเวลาไปเกือบปี พอทักมาถามก็ได้รับคำแนะนำขั้นตอนการสมัครที่ชัดเจน ตอนนี้ได้เข้าเรียนสมใจแล้วค่ะ",
  },
  {
    id: "review9",
    avatar: "🙋‍♂️",
    text: "มีปัญหาใหญ่ที่ไม่รู้จะหาผู้เชี่ยวชาญด้านไหนมาช่วย แต่ทีมงานช่วยหาหน่วยงานเฉพาะทางที่เหมาะสมให้ทันที พร้อมทั้งคอยช่วยสื่อสารและประสานงานตรงกลางให้ด้วย ทำให้แก้ปัญหาได้โดยไม่เคว้งคว้างเลยครับ",
  },
  {
    id: "review10",
    avatar: "🙋‍♀️",
    text: "หลังจากแต่งงานมาอยู่เกาหลีแล้วปรับตัวไม่ได้จนรู้สึกแย่มาก แต่ได้รับความช่วยเหลือในการแนะนำและติดต่อกับศูนย์สนับสนุนครอบครัวหลากวัฒนธรรมอย่างเป็นทางการ รวมถึงช่วยเตรียมเอกสารต่อวีซ่าคู่สมรส (F-6) จนเรียบร้อย ปลอดภัยและอบอุ่นใจมากค่ะ",
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
        {testimonials.map((t) => (
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
