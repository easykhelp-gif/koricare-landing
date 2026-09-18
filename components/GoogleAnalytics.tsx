'use client';

import Script from 'next/script';

const GA_MEASUREMENT_ID = 'G-YESCHJX46K';

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });

          // 문의 클릭: 메신저·라인·메일로 가는 링크를 누르면 contact_click 을 보낸다.
          document.addEventListener('click', function (e) {
            var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
            if (!a) return;
            var h = a.getAttribute('href') || '';
            var method = h.indexOf('//m.me/') !== -1 ? 'messenger'
              : h.indexOf('line.me/') !== -1 ? 'line'
              : h.indexOf('mailto:') === 0 ? 'email'
              : '';
            if (method) gtag('event', 'contact_click', { method: method, source: window.location.pathname });
          }, true);
        `}
      </Script>
    </>
  );
}
