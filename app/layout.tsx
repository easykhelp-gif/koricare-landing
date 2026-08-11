import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kori Care | Official Korea Support Portal for Foreign Residents & Workers",
  description: "Official Kori Care platform providing legal severance pay calculator, visa consultation, medical booking, and foreigner directories in South Korea.",
  keywords: [
    "Kori Care", "koricare", "koricare.kr", "코리케어", "KoriCare Korea", 
    "Korea Foreigner Portal", "Severance Pay Calculator Korea", "Foreign Worker Support Korea", 
    "HiKorea Visa", "Korean Labor Standards Act"
  ],
  openGraph: {
    title: "Kori Care | Official Korea Support Portal for Foreign Residents",
    description: "Official Kori Care platform providing legal severance pay calculator, visa consultation, medical booking, and foreigner directories in South Korea.",
    type: "website",
    siteName: "Kori Care",
    url: "https://www.koricare.kr",
    images: [
      {
        url: "https://www.koricare.kr/link/koricare_main_logo_nobg.png",
        width: 512,
        height: 512,
        alt: "Kori Care Official Logo",
      }
    ],
  },
  twitter: {
    card: "summary",
    title: "Kori Care | Official Korea Support Portal for Foreign Residents",
    description: "Official Kori Care platform providing legal severance pay calculator, visa consultation, medical booking, and foreigner directories in South Korea.",
    images: ["https://www.koricare.kr/link/koricare_main_logo_nobg.png"],
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
      <body>{children}</body>
    </html>
  );
}
