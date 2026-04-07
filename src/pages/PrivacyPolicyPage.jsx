import { C, F, spacing } from "../styles/design-tokens";
import { Reveal } from "../components/ui/Reveal";

/* ═══════════════════════════════════════════════════════
   oblige! — Privacy Policy Page
   ═══════════════════════════════════════════════════════ */

function SectionHead({ en, ja }) {
  return (
    <Reveal>
      <div style={{
        display: "flex", alignItems: "baseline", gap: 16,
        marginBottom: 48,
      }}>
        <h2 style={{
          fontFamily: F.heading, fontSize: "clamp(28px, 3.5vw, 44px)",
          fontWeight: 700, color: C.text, lineHeight: 1,
          letterSpacing: "0.04em", textTransform: "uppercase",
        }}>{en}</h2>
        <span style={{
          fontFamily: F.body, fontSize: "clamp(12px, 1vw, 14px)",
          color: C.textMuted, letterSpacing: "0.06em",
        }}>— {ja}</span>
      </div>
    </Reveal>
  );
}

const policies = [
  {
    title: "個人情報の収集について",
    body: "当社は、お客様の個人情報を収集する場合、利用目的を明示し、適法かつ公正な手段によって収集いたします。収集する個人情報の範囲は、利用目的を達成するために必要な範囲に限定いたします。",
  },
  {
    title: "個人情報の利用目的",
    body: "当社は、お客様からお預かりした個人情報を、以下の目的で利用いたします。\n\n・お問い合わせへの回答およびご連絡\n・サービスの提供・改善・開発\n・各種ご案内やお知らせの送付\n・契約の履行および管理\n・その他、上記利用目的に付随する業務",
  },
  {
    title: "個人情報の第三者提供",
    body: "当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません。\n\n・お客様の同意がある場合\n・法令に基づく場合\n・人の生命、身体または財産の保護のために必要がある場合\n・業務委託先に対して、利用目的の達成に必要な範囲で提供する場合",
  },
  {
    title: "個人情報の安全管理",
    body: "当社は、お客様の個人情報の漏洩、紛失、破壊、改ざんおよび不正なアクセスを防止するため、必要かつ適切なセキュリティ対策を実施し、個人情報の安全管理に努めます。",
  },
  {
    title: "個人情報の開示・訂正・削除",
    body: "お客様ご自身の個人情報について、開示・訂正・追加・削除・利用停止等のご要望がある場合は、所定の手続きに基づき、速やかに対応いたします。下記のお問い合わせ窓口までご連絡ください。",
  },
  {
    title: "Cookieの使用について",
    body: "当社のウェブサイトでは、お客様の利便性向上およびアクセス解析のためにCookieを使用しています。Cookieによって個人を特定できる情報は取得しておりません。ブラウザの設定によりCookieの受け取りを拒否することも可能ですが、一部サービスが正常に機能しない場合があります。",
  },
  {
    title: "SSL暗号化通信について",
    body: "当社のウェブサイトでは、お客様の個人情報を保護するため、SSL（Secure Sockets Layer）暗号化通信を採用しています。入力された情報は暗号化されて送信されるため、第三者に情報が傍受される心配はありません。",
  },
  {
    title: "プライバシーポリシーの改定",
    body: "当社は、法令の変更や事業内容の変更等に伴い、本プライバシーポリシーを改定することがあります。改定した場合は、当ウェブサイトにて公表いたします。",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        background: C.dark,
        padding: "clamp(120px, 16vw, 200px) 0 clamp(60px, 8vw, 100px)",
        textAlign: "center",
      }}>
        <Reveal>
          <span style={{
            display: "inline-block",
            fontFamily: F.label, fontSize: 11, letterSpacing: 3,
            color: C.accent, textTransform: "uppercase", marginBottom: 16,
          }}>Policy</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 style={{
            fontFamily: F.heading,
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 700, color: C.textLight,
            letterSpacing: "0.04em", textTransform: "uppercase",
          }}>Privacy Policy</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p style={{
            fontFamily: F.body, fontSize: "clamp(12px, 1vw, 14px)",
            color: C.textMuted, marginTop: 12,
          }}>個人情報保護方針</p>
        </Reveal>
      </section>

      {/* Content */}
      <section style={{ padding: spacing.sectionPadding + " 0" }}>
        <div style={{ maxWidth: spacing.containerNarrow, margin: "0 auto", padding: "0 clamp(24px, 4vw, 64px)" }}>

          <Reveal>
            <p style={{
              fontFamily: F.body,
              fontSize: "clamp(13px, 1vw, 15px)",
              lineHeight: 2.2,
              color: C.text,
              marginBottom: 64,
            }}>
              株式会社oblige（以下「当社」）は、お客様の個人情報の保護を重要な責務と認識し、以下のとおりプライバシーポリシーを定め、個人情報の適切な管理・保護に努めてまいります。
            </p>
          </Reveal>

          {policies.map((item, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <div style={{ marginBottom: 48 }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 12,
                  marginBottom: 16,
                }}>
                  <span style={{
                    fontFamily: F.mono, fontSize: 12, fontWeight: 600,
                    color: C.accent, letterSpacing: 1,
                  }}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 style={{
                    fontFamily: F.body, fontSize: "clamp(15px, 1.2vw, 18px)",
                    fontWeight: 600, color: C.text,
                  }}>{item.title}</h3>
                </div>
                <p style={{
                  fontFamily: F.body,
                  fontSize: "clamp(13px, 1vw, 15px)",
                  lineHeight: 2.2,
                  color: C.textMuted,
                  whiteSpace: "pre-line",
                  paddingLeft: 36,
                }}>{item.body}</p>
              </div>
            </Reveal>
          ))}

          {/* Contact */}
          <Reveal>
            <div style={{
              marginTop: 48, padding: "32px 36px",
              background: C.bgAlt,
              borderLeft: `3px solid ${C.accent}`,
            }}>
              <h3 style={{
                fontFamily: F.body, fontSize: "clamp(14px, 1.1vw, 16px)",
                fontWeight: 600, color: C.text, marginBottom: 12,
              }}>お問い合わせ窓口</h3>
              <p style={{
                fontFamily: F.body,
                fontSize: "clamp(13px, 1vw, 15px)",
                lineHeight: 2,
                color: C.textMuted,
              }}>
                株式会社oblige<br />
                〒104-0045 東京都中央区築地●-●-●<br />
                TEL: 03-XXXX-XXXX<br />
                E-mail: info@oblige.co.jp
              </p>
            </div>
          </Reveal>

        </div>
      </section>
    </div>
  );
}
