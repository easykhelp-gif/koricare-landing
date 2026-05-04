import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Easy-K Life Helper | เพื่อนคนเกาหลีที่พร้อมช่วยเหลือคุณในทุกเรื่อง",
  description:
    "หากคุณอาศัยอยู่ในเกาหลีและกำลังเผชิญกับความลำบาก ไม่ว่าเรื่องอะไร... ทักมาคุยกับเราได้เลย เรายินดีช่วยเหลือคุณในทุกเรื่อง!",
  keywords: ["Easy-K", "Korea", "Thailand", "Life Helper", "ช่วยเหลือ", "เกาหลี"],
  openGraph: {
    title: "Easy-K Life Helper",
    description: "เพื่อนคนเกาหลีที่พร้อมช่วยเหลือคุณในทุกเรื่อง",
    type: "website",
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
