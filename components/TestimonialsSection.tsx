"use client";
import { useRef, useState } from "react";

    id: "review9",
    avatar: "🙋‍♂️",
    text: "Faced a major issue and didn't know which specialist to consult. The team immediately connected me with official specialists and handled middle communication.",
  },
  {
    id: "review10",
    avatar: "🙋‍♀️",
    text: "Felt overwhelmed adapting to life in Korea after marriage. Received warm support connecting with official multicultural family centers and preparing F-6 visa documents!",
  },
];

export default function TestimonialsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, clientWidth } = sliderRef.current;
    const cardWidth = clientWidth * 0.82;
    const idx = Math.min(reviews.length - 1, Math.max(0, Math.round(scrollLeft / cardWidth)));
    setActiveIndex(idx);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.6;
    sliderRef.current.scrollLeft = scrollLeft - walk;
    handleScroll();
  };

  return (
    <section
      id="testimonials"
      style={{
        padding: "60px 20px 20px",
        maxWidth: 480,
        margin: "0 auto",
      }}
    >
      <style>{`
        .reviews-slider::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        .reviews-slider {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
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
      `}</style>

      {/* Header */}
      <div className="reveal" style={{ textAlign: "center", marginBottom: 20 }}>
        <h2
          style={{
            fontSize: "clamp(20px, 5.5vw, 26px)",
            fontWeight: 800,
            color: "#002366",
            lineHeight: 1.3,
            marginBottom: 8,
          }}
        >
          {currentTitle.title}
        </h2>
        <p style={{ color: "#718096", fontSize: 13.5 }}>
          {currentTitle.sub}
        </p>
      </div>

      {/* Testimonials Slider Container */}
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="reviews-slider reveal"
        style={{
          display: "flex",
          gap: 12,
          overflowX: "auto",
          scrollBehavior: isDragging ? "auto" : "smooth",
          paddingBottom: 16,
          paddingLeft: 4,
          paddingRight: 4,
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {reviewsList.map((rev) => (
          <div
            key={rev.id}
            id={rev.id}
            style={{
              flexShrink: 0,
              width: "82%",
              maxWidth: 320,
              scrollSnapAlign: "start",
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
              boxSizing: "border-box",
            }}
          >
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
              {rev.avatar}
            </div>
            <div className="chat-bubble">
              <p
                style={{
                  fontSize: 13.5,
                  color: "#4a5568",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                "{rev.text}"
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Minimal Frosted Capsule Dots (Apple Style) */}
      <div
        className="reveal"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          marginTop: 10,
        }}
      >
        {reviews.map((_, i) => (
          <div
            key={i}
            onClick={() => {
              if (!sliderRef.current) return;
              const cardWidth = sliderRef.current.clientWidth * 0.82;
              sliderRef.current.scrollTo({ left: i * cardWidth, behavior: "smooth" });
            }}
            style={{
              width: activeIndex === i ? 22 : 6,
              height: 6,
              borderRadius: 3,
              background: activeIndex === i ? "linear-gradient(90deg, #002366, #1a4fc4)" : "rgba(0,35,102,0.15)",
              transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
              cursor: "pointer",
              boxShadow: activeIndex === i ? "0 2px 8px rgba(0,35,102,0.3)" : "none",
            }}
          />
        ))}
      </div>
    </section>
  );
}
