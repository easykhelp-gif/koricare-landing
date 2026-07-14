import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kori Care | บริการช่วยเหลือคนไทยในเกาหลี (한국 거주 태국인을 위한 종합 지원)",
  description: "Your lifestyle helper in Korea.",
  keywords: [
    "Kori Care", "코리케어", "โครีแคร์", "Korea", "Thailand", "Life Helper", "ช่วยเหลือ", "เกาหลี", 
    "คนไทยในเกาหลี", "วีซ่าเกาหลี", "ทำงานเกาหลี", "โรงพยาบาลเกาหลี", "เรียกรถแท็กซี่เกาหลี", "แผนที่เกาหลี", 
    "ร้านอาหารไทยในเกาหลี", "ส่งเงินกลับไทย", "Kakao Taxi for foreigners", "Naver Map English", 
    "Korea immigration help", "ล่ามเกาหลี", "ปรึกษากฎหมายเกาหลี", "한국 태국인 지원", "외국인 노동자 상담", "태국어 통역"
  ],
  openGraph: {
    title: "Kori Care | บริการช่วยเหลือคนไทยในเกาหลี",
    description: "Your lifestyle helper in Korea.",
    type: "website",
    siteName: "Kori Care",
    images: [
      {
        url: "/koricare_main_logo_nobg.png",
        width: 512,
        height: 512,
        alt: "Kori Care Logo",
      }
    ],
  },
  twitter: {
    card: "summary",
    title: "Kori Care | บริการช่วยเหลือคนไทยในเกาหลี",
    description: "Your lifestyle helper in Korea.",
    images: ["/koricare_main_logo_nobg.png"],
  },
  icons: {
    icon: "/koricare_main_logo_nobg.png",
    shortcut: "/koricare_main_logo_nobg.png",
    apple: "/koricare_main_logo_nobg.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#002366",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
              "alternateName": ["코리케어", "โครีแคร์"],
              "url": "https://koricare.kr",
              "logo": "https://koricare.kr/koricare_main_logo_nobg.png",
              "sameAs": [
                "https://m.me/easyk.help",
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
      <body>{children}</body>
    </html>
  );
}
