"use client";

import { useRef, useState } from "react";

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
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    const slider = sliderRef.current;
    if (!slider) return;
    setIsDown(true);
    setStartX(e.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const slider = sliderRef.current;
    if (!isDown || !slider) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag scroll speed multiplier
    slider.scrollLeft = scrollLeft - walk;
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const canScroll = container.scrollWidth > container.clientWidth;
    if (canScroll && e.deltaY !== 0) {
      const isAtStart = container.scrollLeft === 0 && e.deltaY < 0;
      const isAtEnd = Math.abs(container.scrollWidth - container.clientWidth - container.scrollLeft) < 1 && e.deltaY > 0;
      if (!isAtStart && !isAtEnd) {
        container.scrollLeft += e.deltaY * 0.8;
        e.preventDefault();
      }
    }
  };

  return (
    <section
      id="testimonials"
      style={{
        padding: "80px 20px 10px",
        maxWidth: 480,
        margin: "0 auto",
      }}
    >
      {/* CSS Injection for Speech Bubble Pointer and Scrollbar hiding */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Default: hide scrollbar (mobile) */
        .reviews-slider::-webkit-scrollbar {
          display: none;
        }
        .reviews-slider {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        /* PC (Hover-enabled devices): show customized thin scrollbar */
        @media (hover: hover) {
          .reviews-slider {
            scrollbar-width: thin !important;
            -ms-overflow-style: auto !important;
          }
          .reviews-slider::-webkit-scrollbar {
            display: block !important;
            height: 6px !important;
          }
          .reviews-slider::-webkit-scrollbar-track {
            background: rgba(0, 35, 102, 0.03) !important;
            border-radius: 10px !important;
          }
          .reviews-slider::-webkit-scrollbar-thumb {
            background: rgba(0, 35, 102, 0.12) !important;
            border-radius: 10px !important;
          }
          .reviews-slider::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 35, 102, 0.25) !important;
          }
        }

        .chat-bubble {
          position: relative;
          background: white;
          border-radius: 18px;
          padding: 14px 16px;
          box-shadow: 0 8px 24px rgba(0, 35, 102, 0.08);
          border: 1px solid rgba(0, 35, 102, 0.04);
          min-width: 0;
          flex: 1;
        }
        .chat-bubble::after {
          content: "";
          position: absolute;
          left: -5px;
          top: 15px;
          width: 10px;
          height: 10px;
          background: white;
          border-left: 1.5px solid rgba(0, 35, 102, 0.05);
          border-bottom: 1.5px solid rgba(0, 35, 102, 0.05);
          transform: rotate(45deg);
          box-shadow: -2px 2px 3px rgba(0, 35, 102, 0.01);
        }
      `}} />

      {/* Header */}
      <div className="reveal" style={{ textAlign: "center", marginBottom: 20 }}>
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
          เลื่อนซ้ายขวาเพื่อดูรีวิวจากผู้ใช้จริง
        </p>
      </div>

      {/* Cards Slider Container */}
      <div 
        ref={sliderRef}
        className="reviews-slider reveal"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ 
          display: "flex", 
          gap: 16,
          overflowX: "auto",
          scrollSnapType: isDown ? "none" : "x mandatory",
          padding: "10px 4px 24px",
          WebkitOverflowScrolling: "touch",
          cursor: isDown ? "grabbing" : "grab",
          userSelect: "none",
        }}
      >
        {testimonials.map((t) => (
          <div
            key={t.id}
            id={t.id}
            style={{
              flexShrink: 0,
              width: "84%",
              maxWidth: "330px",
              scrollSnapAlign: "center",
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
              boxSizing: "border-box",
            }}
          >
            {/* Left: Avatar Bubble */}
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
                boxShadow: "0 4px 10px rgba(0,35,102,0.06)",
              }}
            >
              {t.avatar}
            </div>

            {/* Right: Speech Bubble */}
            <div className="chat-bubble">
              {/* Review text */}
              <p
                style={{
                  fontSize: 13.5,
                  color: "#4a5568",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                "{t.text}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
