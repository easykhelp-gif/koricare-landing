import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kori Care | บริการช่วยเหลือคนไทยในเกาหลี (한국 거주 태국인을 위한 종합 지원)",
  description:
    "หากคุณอาศัยอยู่ในเกาหลีและกำลังเผชิญกับความลำบาก ไม่ว่าเรื่องอะไร... ทักมาคุยกับเราได้เลย เรายินดีช่วยเหลือคุณในทุกเรื่อง! 한국 거주 태국인 비자, 임금, 병원 등 상담 지원 서비스 Kori Care (코리케어)",
  keywords: [
    "Kori Care", "코리케어", "โครีแคร์", "Korea", "Thailand", "Life Helper", "ช่วยเหลือ", "เกาหลี", 
    "คนไทยในเกาหลี", "วีซ่าเกาหลี", "ทำงานเกาหลี", "โรงพยาบาลเกาหลี", "เรียกรถแท็กซี่เกาหลี", "แผนที่เกาหลี", 
    "ร้านอาหารไทยในเกาหลี", "ส่งเงินกลับไทย", "Kakao Taxi for foreigners", "Naver Map English", 
    "Korea immigration help", "ล่ามเกาหลี", "ปรึกษากฎหมายเกาหลี", "한국 태국인 지원", "외국인 노동자 상담", "태국어 통역"
  ],
  openGraph: {
    title: "Kori Care | บริการช่วยเหลือคนไทยในเกาหลี",
    description: "มีปัญหาที่เกาหลี? วีซ่า, เงินเดือน, โรงพยาบาล, กฎหมาย ไม่ต้องปวดหัวอีกต่อไป! ปรึกษาฟรีกับเพื่อนคนเกาหลี 100%",
    type: "website",
    siteName: "Kori Care",
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
      </head>
      <body>{children}</body>
    </html>
  );
}
