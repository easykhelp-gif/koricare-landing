import type { Metadata, Viewport } from "next";
import "../globals.css";
import GoogleAnalytics from "../../components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Kori Care | คู่มือช่วยเหลือการใช้ชีวิตในเกาหลี (Life Helper Portal / โคริแคร์)",
  description: "พอร์ทัลรวบรวมบริการทางการและสถานที่สำคัญสำหรับคนต่างชาติในเกาหลี — วีซ่า โอนเงิน โรงพยาบาล คำนวณเงินชดเชย",
  keywords: [
    "Kori Care", "โคริแคร์", "เงินชดเชย เกาหลี", "คนไทยในเกาหลี", 
    "วีซ่าเกาหลี", "1345", "1350", "Korea Foreigner Support"
  ],
  alternates: {
    canonical: "https://www.koricare.kr/th",
    languages: {
      "en-US": "https://www.koricare.kr",
      "x-default": "https://www.koricare.kr",
      "th-TH": "https://www.koricare.kr/th",
      "vi-VN": "https://www.koricare.kr/vi",
    },
  },
  openGraph: {
    title: "Kori Care | คู่มือช่วยเหลือการใช้ชีวิตในเกาหลี",
    description: "พอร์ทัลรวบรวมบริการทางการและสถานที่สำคัญสำหรับคนต่างชาติในเกาหลี — วีซ่า โอนเงิน โรงพยาบาล คำนวณเงินชดเชย",
    type: "website",
    siteName: "Kori Care",
    url: "https://www.koricare.kr/th",
    locale: "th_TH",
    images: [
      {
        url: "https://www.koricare.kr/link/koricare_main_logo_nobg.png",
        width: 512,
        height: 512,
        alt: "Kori Care Official Logo",
      }
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#002366",
};

// A root layout of its own, so the Thai route can declare lang="th" instead of
// inheriting a single shared <html> from the English tree.
export default function ThaiLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Kori Care",
              "alternateName": ["Koricare", "KoriCare", "코리케어", "โครีแคร์", "Kori Care Korea"],
              "url": "https://www.koricare.kr/th",
              "logo": "https://www.koricare.kr/koricare_main_logo_nobg.png",
              "sameAs": [
                "https://www.facebook.com/koricare.kr/",
                "https://m.me/koricare.kr",
                "https://line.me/R/ti/p/@768mkjml"
              ],
              "description": "Your lifestyle helper in Korea.",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "availableLanguage": ["Thai", "Korean", "English"]
              }
            })
          }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
