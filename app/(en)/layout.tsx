import type { Metadata, Viewport } from "next";
import "../globals.css";
import GoogleAnalytics from "../../components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Kori Care | Official Korea Support Portal for Foreign Residents & Workers",
  description: "Official Kori Care platform providing legal severance pay calculator, visa consultation, medical booking, and foreigner directories in South Korea.",
  keywords: [
    "Kori Care", "koricare", "koricare.kr", "코리케어", "KoriCare Korea", 
    "Korea Foreigner Portal", "Severance Pay Calculator Korea", "Foreign Worker Support Korea", 
    "HiKorea Visa", "Korean Labor Standards Act"
  ],
  // 공유 미리보기용. KakaoTalk 은 제목을 40자 안팎에서 자르므로 og:title 은 짧게 둔다.
  // 페이지 <title> 은 검색용이라 길어도 된다 — 둘을 같게 맞추지 말 것.
  openGraph: {
    title: "Kori Care — Korea Life Guide",
    description: "Severance pay, labor rights, visas, hospitals, banking and housing — practical help for foreign residents in Korea.",
    type: "website",
    siteName: "Kori Care",
    url: "https://www.koricare.kr",
    images: [
      {
        url: "https://www.koricare.kr/link/og/koricare_og_en.png",
        width: 1200,
        height: 630,
        alt: "Kori Care — Severance, Law, Daily life, Safety, Housing",
      }
    ],
  },
  // summary 는 작은 정사각 카드다. 1200x630 을 배너로 띄우려면 summary_large_image 여야 한다.
  twitter: {
    card: "summary_large_image",
    title: "Kori Care — Korea Life Guide",
    description: "Severance pay, labor rights, visas, hospitals, banking and housing — practical help for foreign residents in Korea.",
    images: ["https://www.koricare.kr/link/og/koricare_og_en.png"],
  },
  icons: {
    icon: "https://www.koricare.kr/link/koricare_main_logo_nobg.png",
    shortcut: "https://www.koricare.kr/link/koricare_main_logo_nobg.png",
    apple: "https://www.koricare.kr/link/koricare_main_logo_nobg.png",
  },
  alternates: {
    canonical: "https://www.koricare.kr",
    languages: {
      "en-US": "https://www.koricare.kr",
      "x-default": "https://www.koricare.kr",
      "th-TH": "https://www.koricare.kr/th",
      "vi-VN": "https://www.koricare.kr/vi",
    },
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
    <html lang="en">
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
              "url": "https://koricare.kr",
              "logo": "https://koricare.kr/koricare_main_logo_nobg.png",
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
