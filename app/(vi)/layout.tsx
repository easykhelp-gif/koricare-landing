import type { Metadata, Viewport } from "next";
import "../globals.css";
import GoogleAnalytics from "../../components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Kori Care | Cổng thông tin hỗ trợ đời sống tại Hàn Quốc (Tiếng Việt)",
  description: "Trang chủ chính thức Kori Care cung cấp công cụ tính trợ cấp thôi việc, tư vấn visa, y tế và thư mục dịch vụ cho người Việt tại Hàn Quốc.",
  keywords: [
    "Kori Care", "trợ cấp thôi việc Hàn Quốc", "người Việt tại Hàn Quốc", 
    "tư vấn visa Hàn Quốc", "1345", "1350", "Korea Foreigner Support"
  ],
  alternates: {
    canonical: "https://www.koricare.kr/vi",
    languages: {
      "en-US": "https://www.koricare.kr",
      "x-default": "https://www.koricare.kr",
      "th-TH": "https://www.koricare.kr/th",
      "vi-VN": "https://www.koricare.kr/vi",
    },
  },
  openGraph: {
    title: "Kori Care | Cổng thông tin hỗ trợ đời sống tại Hàn Quốc",
    description: "Trang chủ chính thức Kori Care cung cấp công cụ tính trợ cấp thôi việc, tư vấn visa, y tế và thư mục dịch vụ cho người Việt tại Hàn Quốc.",
    type: "website",
    siteName: "Kori Care",
    url: "https://www.koricare.kr/vi",
    locale: "vi_VN",
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

// A root layout of its own, so the Vietnamese route can declare lang="vi"
// instead of inheriting a single shared <html> from the English tree.
export default function VietnameseLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
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
              "alternateName": ["Koricare", "KoriCare", "코리케어", "Kori Care Việt Nam", "Kori Care Korea"],
              "url": "https://www.koricare.kr/vi",
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
                "availableLanguage": ["Vietnamese", "Korean", "English"]
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
