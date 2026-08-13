import type { Metadata } from "next";

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

export default function ThaiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
