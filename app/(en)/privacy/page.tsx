import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Kori Care",
  description: "How Kori Care collects, uses and protects personal information. English, 한국어, ภาษาไทย, Tiếng Việt.",
  alternates: { canonical: "https://www.koricare.kr/privacy" },
  openGraph: {
    title: "Privacy Policy | Kori Care",
    url: "https://www.koricare.kr/privacy",
    siteName: "Kori Care",
    type: "website",
  },
};

const EFFECTIVE = "2026-11-17";
const EMAIL = "koricare.help@gmail.com";
const LINE = "https://line.me/R/ti/p/@768mkjml";
const MESSENGER = "https://m.me/theokoricare";
const GA_OPTOUT = "https://tools.google.com/dlpage/gaoptout";

type Section = { h: string; p: string[] };
type Doc = { code: string; label: string; title: string; effective: string; intro: string; sections: Section[]; contactLabel: string };

const docs: Doc[] = [
  {
    code: "en",
    label: "English",
    title: "Privacy Policy",
    effective: `Effective ${EFFECTIVE}`,
    intro: "Kori Care takes on everyday, labor, visa and medical matters for foreign residents in Korea, and assigns licensed professionals when a case needs them. This policy explains what personal information we collect, why, how long we keep it, and how you can control it.",
    sections: [
      { h: "1. Why we collect information", p: [
        "To answer your request and handle your case through LINE or Facebook Messenger.",
        "To assign your case to the right professional (for example a labor attorney, an administrative agent or a lawyer) and manage it until it is done.",
        "To improve our website and guides using anonymous visit statistics.",
      ]},
      { h: "2. What we collect", p: [
        "What you send us: your name or nickname, LINE or Messenger ID, phone number or email if you share them, and the details of your situation.",
        "In medical or work-injury cases you may tell us about your health. We use this only for that request and never pass it on without your separate consent.",
        "Automatically on the website: pages visited, device and browser type, and approximate region, through Google Analytics cookies.",
      ]},
      { h: "3. How long we keep it", p: [
        "We keep your information only until your case is finished, or until you ask us to delete it, whichever comes first. Then we delete it without delay.",
        "Messages are deleted from our chat accounts. Notes and files are permanently erased so they cannot be recovered.",
      ]},
      { h: "4. Sharing with professionals", p: [
        "When your case needs a professional, we share only the information that professional needs, and only after you agree.",
        "Professionals receive it to handle your case and must keep it confidential. We do not sell personal information to anyone.",
      ]},
      { h: "5. Services we use", p: [
        "Conversations take place on LINE (LY Corporation) and Facebook Messenger (Meta), whose own privacy policies also apply.",
        "Website statistics are processed by Google Analytics (Google LLC). We do not hand your case details to these services.",
      ]},
      { h: "6. Cookies and how to refuse them", p: [
        "Our website uses Google Analytics cookies to count visits. They do not identify you by name.",
        "You can block or delete cookies in your browser settings, or install Google's opt-out add-on. The website works the same without them.",
      ]},
      { h: "7. Your rights", p: [
        "You can ask to see, correct, delete or stop the use of your information at any time. A legal guardian can ask on behalf of a minor.",
        "Send the request by email, LINE or Messenger. We act on it without delay and tell you when it is done.",
      ]},
      { h: "8. How we protect it", p: [
        "Only the staff handling your case can access your information.",
        "Accounts that hold case records are protected with passwords, and we do not keep case details on shared or public computers.",
      ]},
      { h: "9. Privacy contact", p: [
        "Kori Care Privacy Team",
        "If you are not satisfied with our answer, you can also contact the Korea Personal Information Infringement Report Center (privacy.kisa.or.kr, call 118 in Korea).",
      ]},
      { h: "10. Changes", p: [
        `This policy takes effect on ${EFFECTIVE} and replaces the previous version. We will post any change on this page with its new date.`,
      ]},
    ],
    contactLabel: "Contact",
  },
  {
    code: "ko",
    label: "한국어",
    title: "개인정보 처리방침",
    effective: `시행일 ${EFFECTIVE}`,
    intro: "코리케어(Kori Care)는 한국에 사는 외국인의 생활·노동·체류·의료 문제를 맡고, 필요한 사건에는 자격을 갖춘 전문가를 배정합니다. 이 방침은 어떤 개인정보를 왜 받고, 얼마나 보관하며, 이용자가 어떻게 관리할 수 있는지 알려 드립니다.",
    sections: [
      { h: "1. 처리 목적", p: [
        "LINE 또는 Facebook Messenger로 받은 요청에 답하고 사건을 처리하기 위해.",
        "사건에 맞는 전문가(노무사, 행정사, 변호사 등)를 배정하고 일이 끝날 때까지 관리하기 위해.",
        "익명 방문 통계로 웹사이트와 가이드를 개선하기 위해.",
      ]},
      { h: "2. 처리하는 개인정보 항목", p: [
        "이용자가 보낸 정보: 이름 또는 별명, LINE·Messenger ID, 이용자가 알려 준 전화번호나 이메일, 상황 설명.",
        "병원·산재 관련 요청에서는 건강 정보를 알려 주실 수 있습니다. 이 정보는 해당 요청에만 쓰며, 별도 동의 없이 다른 사람에게 주지 않습니다.",
        "웹사이트 자동 수집: Google Analytics 쿠키를 통한 방문 페이지, 기기·브라우저 종류, 대략적 지역.",
      ]},
      { h: "3. 보유 기간과 파기", p: [
        "사건이 끝나거나 이용자가 삭제를 요청하면, 둘 중 먼저인 때에 지체 없이 파기합니다.",
        "대화는 상담 계정에서 삭제하고, 메모와 파일은 복구할 수 없게 영구 삭제합니다.",
      ]},
      { h: "4. 제3자 제공", p: [
        "전문가가 필요한 사건에서는 이용자가 동의한 뒤에만, 그 전문가에게 필요한 최소한의 정보만 제공합니다.",
        "받은 전문가는 사건 처리에만 쓰고 비밀을 지켜야 합니다. 개인정보를 판매하지 않습니다.",
      ]},
      { h: "5. 이용하는 외부 서비스", p: [
        "상담은 LINE(LY Corporation)과 Facebook Messenger(Meta)에서 이뤄지며, 각 서비스의 개인정보 처리방침이 함께 적용됩니다.",
        "웹사이트 통계는 Google Analytics(Google LLC)가 처리합니다. 사건 내용은 이 서비스들에 넘기지 않습니다.",
      ]},
      { h: "6. 자동 수집 장치(쿠키)와 거부 방법", p: [
        "웹사이트는 방문 수를 세기 위해 Google Analytics 쿠키를 씁니다. 이름으로 이용자를 식별하지 않습니다.",
        "브라우저 설정에서 쿠키를 막거나 지울 수 있고, Google의 수집 거부 부가기능을 설치할 수도 있습니다. 쿠키를 막아도 사이트 이용에는 차이가 없습니다.",
      ]},
      { h: "7. 정보주체의 권리와 행사 방법", p: [
        "언제든지 개인정보의 열람, 정정, 삭제, 처리정지를 요구할 수 있습니다. 미성년자는 법정대리인이 요구할 수 있습니다.",
        "이메일, LINE, Messenger로 요청하시면 지체 없이 처리하고 결과를 알려 드립니다.",
      ]},
      { h: "8. 안전성 확보 조치", p: [
        "사건을 맡은 담당자만 개인정보에 접근합니다.",
        "사건 기록이 있는 계정은 비밀번호로 보호하며, 공용 컴퓨터에 사건 내용을 남기지 않습니다.",
      ]},
      { h: "9. 개인정보 보호 담당 부서", p: [
        "코리케어 개인정보 보호 담당",
        "답변에 만족하지 못하시면 개인정보침해신고센터(privacy.kisa.or.kr, 국번 없이 118)에 문의하실 수 있습니다.",
      ]},
      { h: "10. 방침 변경", p: [
        `이 방침은 ${EFFECTIVE}부터 시행하며 이전 방침을 대체합니다. 바뀌는 내용은 이 페이지에 새 시행일과 함께 게시합니다.`,
      ]},
    ],
    contactLabel: "연락처",
  },
  {
    code: "th",
    label: "ภาษาไทย",
    title: "นโยบายความเป็นส่วนตัว",
    effective: `มีผลตั้งแต่ ${EFFECTIVE}`,
    intro: "โคริแคร์ (Kori Care) ดูแลเรื่องชีวิตประจำวัน แรงงาน วีซ่า และการแพทย์ของคนต่างชาติที่อาศัยอยู่ในเกาหลี และมอบหมายผู้เชี่ยวชาญที่มีใบอนุญาตเมื่อเรื่องนั้นต้องใช้ นโยบายนี้อธิบายว่าเราเก็บข้อมูลส่วนบุคคลอะไร เพื่ออะไร เก็บไว้นานเท่าไร และคุณจัดการข้อมูลของคุณได้อย่างไร",
    sections: [
      { h: "1. วัตถุประสงค์", p: [
        "เพื่อตอบคำขอและดำเนินเรื่องของคุณผ่าน LINE หรือ Facebook Messenger",
        "เพื่อมอบหมายเรื่องของคุณให้ผู้เชี่ยวชาญที่เหมาะสม (เช่น ที่ปรึกษาด้านแรงงาน ผู้เชี่ยวชาญด้านเอกสารราชการ หรือทนายความ) และดูแลจนเรื่องเสร็จ",
        "เพื่อปรับปรุงเว็บไซต์และคู่มือจากสถิติการเข้าชมแบบไม่ระบุตัวตน",
      ]},
      { h: "2. ข้อมูลที่เราเก็บ", p: [
        "ข้อมูลที่คุณส่งให้เรา: ชื่อหรือชื่อเล่น, ID ของ LINE หรือ Messenger, เบอร์โทรหรืออีเมลหากคุณแจ้ง และรายละเอียดเรื่องของคุณ",
        "ในเรื่องการรักษาพยาบาลหรืออุบัติเหตุจากการทำงาน คุณอาจแจ้งข้อมูลสุขภาพ เราใช้ข้อมูลนี้เฉพาะเรื่องนั้น และจะไม่ส่งต่อโดยไม่ได้รับความยินยอมจากคุณแยกต่างหาก",
        "ข้อมูลที่เว็บไซต์เก็บอัตโนมัติ: หน้าที่เข้าชม ประเภทอุปกรณ์และเบราว์เซอร์ และภูมิภาคโดยประมาณ ผ่านคุกกี้ของ Google Analytics",
      ]},
      { h: "3. ระยะเวลาการเก็บและการลบ", p: [
        "เราเก็บข้อมูลจนกว่าเรื่องของคุณจะเสร็จ หรือจนกว่าคุณจะขอให้ลบ แล้วแต่อย่างใดถึงก่อน จากนั้นจะลบทันที",
        "ข้อความจะถูกลบออกจากบัญชีแชตของเรา บันทึกและไฟล์จะถูกลบถาวรจนกู้คืนไม่ได้",
      ]},
      { h: "4. การส่งข้อมูลให้ผู้เชี่ยวชาญ", p: [
        "หากเรื่องของคุณต้องใช้ผู้เชี่ยวชาญ เราจะส่งเฉพาะข้อมูลที่จำเป็นให้ผู้เชี่ยวชาญคนนั้น และจะส่งหลังจากคุณยินยอมแล้วเท่านั้น",
        "ผู้เชี่ยวชาญใช้ข้อมูลเพื่อดำเนินเรื่องของคุณเท่านั้นและต้องรักษาความลับ เราไม่ขายข้อมูลส่วนบุคคลให้ใคร",
      ]},
      { h: "5. บริการภายนอกที่เราใช้", p: [
        "การพูดคุยเกิดขึ้นบน LINE (LY Corporation) และ Facebook Messenger (Meta) ซึ่งนโยบายความเป็นส่วนตัวของบริการนั้นมีผลด้วย",
        "สถิติเว็บไซต์ประมวลผลโดย Google Analytics (Google LLC) เราไม่ส่งรายละเอียดเรื่องของคุณให้บริการเหล่านี้",
      ]},
      { h: "6. คุกกี้และวิธีปฏิเสธ", p: [
        "เว็บไซต์ใช้คุกกี้ของ Google Analytics เพื่อนับจำนวนผู้เข้าชม คุกกี้นี้ไม่ได้ระบุตัวคุณด้วยชื่อ",
        "คุณบล็อกหรือลบคุกกี้ได้ในการตั้งค่าเบราว์เซอร์ หรือติดตั้งส่วนเสริมปฏิเสธการเก็บข้อมูลของ Google เว็บไซต์ยังใช้งานได้เหมือนเดิม",
      ]},
      { h: "7. สิทธิของคุณ", p: [
        "คุณขอดู แก้ไข ลบ หรือระงับการใช้ข้อมูลของคุณได้ทุกเมื่อ ผู้แทนโดยชอบธรรมสามารถขอแทนผู้เยาว์ได้",
        "ส่งคำขอทางอีเมล LINE หรือ Messenger เราจะดำเนินการทันทีและแจ้งให้ทราบเมื่อเสร็จ",
      ]},
      { h: "8. การรักษาความปลอดภัย", p: [
        "เฉพาะเจ้าหน้าที่ที่ดูแลเรื่องของคุณเท่านั้นที่เข้าถึงข้อมูลได้",
        "บัญชีที่เก็บบันทึกเรื่องได้รับการป้องกันด้วยรหัสผ่าน และเราไม่เก็บรายละเอียดเรื่องไว้ในคอมพิวเตอร์สาธารณะหรือใช้ร่วมกัน",
      ]},
      { h: "9. ติดต่อเรื่องข้อมูลส่วนบุคคล", p: [
        "ฝ่ายคุ้มครองข้อมูลส่วนบุคคล Kori Care",
        "หากไม่พอใจคำตอบของเรา คุณติดต่อศูนย์รับแจ้งการละเมิดข้อมูลส่วนบุคคลของเกาหลีได้ (privacy.kisa.or.kr โทร 118 ในเกาหลี)",
      ]},
      { h: "10. การเปลี่ยนแปลง", p: [
        `นโยบายนี้มีผลตั้งแต่ ${EFFECTIVE} และใช้แทนฉบับก่อนหน้า หากมีการเปลี่ยนแปลงเราจะประกาศในหน้านี้พร้อมวันที่ใหม่`,
      ]},
    ],
    contactLabel: "ช่องทางติดต่อ",
  },
  {
    code: "vi",
    label: "Tiếng Việt",
    title: "Chính sách quyền riêng tư",
    effective: `Có hiệu lực từ ${EFFECTIVE}`,
    intro: "Kori Care đảm nhận các vấn đề sinh hoạt, lao động, visa và y tế cho người nước ngoài sống tại Hàn Quốc, và giao cho chuyên gia có giấy phép khi hồ sơ cần. Chính sách này cho biết chúng tôi thu thập thông tin cá nhân nào, vì sao, lưu trong bao lâu và bạn có thể kiểm soát thông tin của mình như thế nào.",
    sections: [
      { h: "1. Mục đích", p: [
        "Để trả lời yêu cầu và xử lý hồ sơ của bạn qua LINE hoặc Facebook Messenger.",
        "Để giao hồ sơ cho đúng chuyên gia (ví dụ chuyên gia lao động, chuyên viên hành chính hoặc luật sư) và quản lý cho đến khi hoàn tất.",
        "Để cải thiện trang web và các bài hướng dẫn dựa trên thống kê truy cập ẩn danh.",
      ]},
      { h: "2. Thông tin chúng tôi thu thập", p: [
        "Thông tin bạn gửi: tên hoặc biệt danh, ID LINE hoặc Messenger, số điện thoại hoặc email nếu bạn cung cấp, và nội dung sự việc.",
        "Trong các trường hợp khám chữa bệnh hoặc tai nạn lao động, bạn có thể cho biết tình trạng sức khỏe. Chúng tôi chỉ dùng thông tin này cho yêu cầu đó và không chuyển cho ai khi chưa có sự đồng ý riêng của bạn.",
        "Trang web tự động thu thập: trang đã xem, loại thiết bị và trình duyệt, khu vực ước tính, thông qua cookie của Google Analytics.",
      ]},
      { h: "3. Thời gian lưu và xóa", p: [
        "Chúng tôi chỉ lưu thông tin cho đến khi hồ sơ hoàn tất hoặc khi bạn yêu cầu xóa, tùy điều nào đến trước, sau đó xóa ngay.",
        "Tin nhắn được xóa khỏi tài khoản trò chuyện của chúng tôi. Ghi chú và tệp được xóa vĩnh viễn, không thể khôi phục.",
      ]},
      { h: "4. Chia sẻ với chuyên gia", p: [
        "Khi hồ sơ cần chuyên gia, chúng tôi chỉ chia sẻ những thông tin chuyên gia đó cần, và chỉ sau khi bạn đồng ý.",
        "Chuyên gia chỉ dùng thông tin để xử lý hồ sơ của bạn và phải giữ bí mật. Chúng tôi không bán thông tin cá nhân cho bất kỳ ai.",
      ]},
      { h: "5. Dịch vụ bên ngoài chúng tôi sử dụng", p: [
        "Việc trao đổi diễn ra trên LINE (LY Corporation) và Facebook Messenger (Meta); chính sách quyền riêng tư của các dịch vụ này cũng được áp dụng.",
        "Thống kê trang web do Google Analytics (Google LLC) xử lý. Chúng tôi không chuyển nội dung hồ sơ của bạn cho các dịch vụ này.",
      ]},
      { h: "6. Cookie và cách từ chối", p: [
        "Trang web dùng cookie của Google Analytics để đếm lượt truy cập. Cookie này không nhận diện bạn bằng tên.",
        "Bạn có thể chặn hoặc xóa cookie trong cài đặt trình duyệt, hoặc cài tiện ích từ chối thu thập của Google. Trang web vẫn hoạt động như bình thường.",
      ]},
      { h: "7. Quyền của bạn", p: [
        "Bạn có thể yêu cầu xem, sửa, xóa hoặc ngừng sử dụng thông tin của mình bất cứ lúc nào. Người đại diện hợp pháp có thể yêu cầu thay cho người chưa thành niên.",
        "Gửi yêu cầu qua email, LINE hoặc Messenger. Chúng tôi xử lý ngay và báo cho bạn khi hoàn tất.",
      ]},
      { h: "8. Biện pháp bảo vệ", p: [
        "Chỉ nhân viên phụ trách hồ sơ của bạn mới được truy cập thông tin.",
        "Các tài khoản chứa hồ sơ được bảo vệ bằng mật khẩu, và chúng tôi không lưu nội dung hồ sơ trên máy tính công cộng hoặc dùng chung.",
      ]},
      { h: "9. Liên hệ về quyền riêng tư", p: [
        "Bộ phận bảo vệ thông tin cá nhân Kori Care",
        "Nếu chưa hài lòng với câu trả lời của chúng tôi, bạn có thể liên hệ Trung tâm tiếp nhận báo cáo xâm phạm thông tin cá nhân Hàn Quốc (privacy.kisa.or.kr, gọi 118 tại Hàn Quốc).",
      ]},
      { h: "10. Thay đổi", p: [
        `Chính sách này có hiệu lực từ ${EFFECTIVE} và thay thế phiên bản trước. Mọi thay đổi sẽ được đăng trên trang này kèm ngày mới.`,
      ]},
    ],
    contactLabel: "Liên hệ",
  },
];

const linkStyle = { color: "#1a4fc4", textDecoration: "underline", wordBreak: "break-all" as const };

export default function PrivacyPage() {
  return (
    <main style={{ background: "var(--soft-white)", minHeight: "100vh", padding: "28px 16px 64px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#002366", fontWeight: 800, fontSize: 18, textDecoration: "none" }} translate="no">
          <img src="https://www.koricare.kr/link/koricare_main_logo_nobg.png" alt="" width={32} height={32} />
          Kori Care
        </a>

        <nav aria-label="Language" style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "20px 0 8px" }}>
          {docs.map((d) => (
            <a key={d.code} href={`#${d.code}`} lang={d.code} style={{ padding: "7px 14px", borderRadius: 999, background: "#ffffff", border: "1px solid rgba(0,35,102,0.15)", color: "#002366", fontSize: 13.5, fontWeight: 600, textDecoration: "none" }}>
              {d.label}
            </a>
          ))}
        </nav>

        {docs.map((d) => (
          <section key={d.code} id={d.code} lang={d.code} style={{ background: "#ffffff", borderRadius: 18, border: "1px solid rgba(0,35,102,0.08)", padding: "24px 20px", marginTop: 18, scrollMarginTop: 16 }}>
            <h1 style={{ fontSize: "clamp(21px, 5vw, 26px)", fontWeight: 800, color: "#002366", lineHeight: 1.3, margin: 0 }}>
              {d.title}
            </h1>
            <p style={{ fontSize: 12.5, color: "#718096", margin: "6px 0 14px" }}>Kori Care · {d.effective}</p>
            <p style={{ fontSize: 14.5, color: "#334155", lineHeight: 1.7, margin: 0 }}>{d.intro}</p>

            {d.sections.map((s, i) => (
              <div key={i} style={{ marginTop: 20 }}>
                <h2 style={{ fontSize: 16, fontWeight: 700, color: "#002366", margin: "0 0 6px" }}>{s.h}</h2>
                {s.p.map((line, j) => (
                  <p key={j} style={{ fontSize: 14.5, color: "#334155", lineHeight: 1.7, margin: "4px 0 0" }}>{line}</p>
                ))}
                {i === 5 && (
                  <p style={{ fontSize: 14, margin: "6px 0 0" }}>
                    <a href={GA_OPTOUT} target="_blank" rel="noopener noreferrer" style={linkStyle}>{GA_OPTOUT}</a>
                  </p>
                )}
                {i === 8 && (
                  <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0", fontSize: 14.5, lineHeight: 1.9, color: "#334155" }}>
                    <li>{d.contactLabel}: <a href={`mailto:${EMAIL}`} style={linkStyle} translate="no">{EMAIL}</a></li>
                    <li>LINE: <a href={LINE} target="_blank" rel="noopener noreferrer" style={linkStyle}>@768mkjml</a></li>
                    <li>Messenger: <a href={MESSENGER} target="_blank" rel="noopener noreferrer" style={linkStyle}>m.me/theokoricare</a></li>
                  </ul>
                )}
              </div>
            ))}
          </section>
        ))}

        <p style={{ textAlign: "center", fontSize: 12, color: "#a0aec0", marginTop: 28 }} translate="no">
          © 2026 Kori Care. All rights reserved.
        </p>
      </div>
    </main>
  );
}
