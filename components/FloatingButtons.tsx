"use client";
import { useState } from "react";

export default function FloatingButtons() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        right: 20,
        zIndex: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 12,
      }}
    >
      {/* Expandable sub-buttons */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 10,
          transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
          transformOrigin: "bottom right",
          transform: expanded ? "scale(1) translateY(0)" : "scale(0.5) translateY(20px)",
          opacity: expanded ? 1 : 0,
          pointerEvents: expanded ? "auto" : "none",
        }}
      >
        {/* LINE button */}
        <a
          id="fab-line-btn"
          href="https://line.me/R/ti/p/@768mkjml"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "#06C755",
            color: "white",
            padding: "10px 16px",
            borderRadius: 50,
            fontSize: 13,
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 6px 20px rgba(6,199,85,0.5)",
            whiteSpace: "nowrap",
            transition: "transform 0.2s ease",
          }}
          onTouchStart={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(0.95)";
          }}
          onTouchEnd={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.629 0 .344-.281.63-.629.63M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
          </svg>
          LINE
        </a>

        {/* Facebook button */}
        <a
          id="fab-fb-btn"
          href="https://m.me/easyk.help"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "#1877F2",
            color: "white",
            padding: "10px 16px",
            borderRadius: 50,
            fontSize: 13,
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 6px 20px rgba(24,119,242,0.5)",
            whiteSpace: "nowrap",
            transition: "transform 0.2s ease",
          }}
          onTouchStart={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(0.95)";
          }}
          onTouchEnd={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Facebook Messenger
        </a>
      </div>

      {/* Main FAB button */}
      <button
        id="fab-main-btn"
        onClick={() => setExpanded(!expanded)}
        aria-label="คุยกับเพื่อน Kori Care"
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #002366, #1a4fc4)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 28px rgba(0,35,102,0.45)",
          transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          transform: expanded ? "rotate(45deg) scale(1.08)" : "rotate(0deg) scale(1)",
          position: "relative",
        }}
      >
        {/* Pulse ring */}
        {!expanded && (
          <>
            <span
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: "rgba(26,79,196,0.4)",
                animation: "pulse-ring 2s ease-out infinite",
              }}
            />
            <span
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: "rgba(26,79,196,0.2)",
                animation: "pulse-ring 2s ease-out infinite 0.4s",
              }}
            />
          </>
        )}

        {/* Icon */}
        {expanded ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      {/* Tooltip label when not expanded */}
      {!expanded && (
        <div
          style={{
            position: "absolute",
            bottom: 70,
            right: 68,
            background: "#002366",
            color: "white",
            fontSize: 11,
            fontWeight: 600,
            padding: "5px 10px",
            borderRadius: 8,
            whiteSpace: "nowrap",
            pointerEvents: "none",
            boxShadow: "0 2px 10px rgba(0,35,102,0.3)",
          }}
        >
          คุยกับเพื่อน Kori Care
          <div
            style={{
              position: "absolute",
              bottom: -4,
              right: 8,
              width: 8,
              height: 8,
              background: "#002366",
              transform: "rotate(45deg)",
            }}
          />
        </div>
      )}
    </div>
  );
}
