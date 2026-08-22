import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  allowedDevOrigins: ["192.168.55.86"],
  async redirects() {
    return [
      // 캠페인용 단축 경로. 릴스·카드뉴스 캡션의 URL이 45자라
      // 폰에서 손으로 타이핑해야 했다.
      {
        source: "/s",
        destination: "/link/severance-calculator",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
