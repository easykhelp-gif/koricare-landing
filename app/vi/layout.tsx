import type { Metadata } from "next";

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

export default function VietnameseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
