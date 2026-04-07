import { useState } from "react";
import { C, F, fontSize, spacing, timing } from "../styles/design-tokens";
import { Reveal } from "../components/ui/Reveal";
import { useLang } from "../i18n/LanguageContext";

/* ═══════════════════════════════════════════════════════
   oblige! — About Page
   hive-inspired: clean, generous whitespace, narrative CEO message
   ═══════════════════════════════════════════════════════ */

/* ── Section heading — inline English + Japanese ── */
function SectionLabel({ en, ja }) {
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

/* ── Page hero — minimal, text only ── */
function AboutHero({ t }) {
  return (
    <section style={{
      paddingTop: "clamp(140px, 18vw, 220px)",
      paddingBottom: "clamp(60px, 8vw, 100px)",
    }}>
      <div className="container">
        <Reveal>
          <p style={{
            fontFamily: F.label, fontSize: fontSize.label,
            letterSpacing: 4, color: C.accent, textTransform: "uppercase",
            fontWeight: 500, marginBottom: 16,
          }}>About</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 style={{
            fontFamily: F.heading, fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 700, color: C.text, lineHeight: 1.3,
            letterSpacing: "0.02em",
          }}>
            {t.about.heroTitle}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <div style={{
            width: 40, height: 2, background: C.accent, marginTop: 32,
          }} />
        </Reveal>
      </div>
    </section>
  );
}

/* ── CEO Message ── */
function CEOMessage({ t }) {
  return (
    <section style={{ paddingBottom: spacing.sectionPadding }}>
      <div className="container">
        <SectionLabel en={t.about.message.sectionEn} ja={t.about.message.sectionJa} />

        <div className="grid-2col" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "start",
        }}>
          {/* Photo */}
          <Reveal>
            <div style={{ overflow: "hidden" }}>
              <img
                src="/251206-074.jpg"
                alt="代表 香山 達也"
                style={{
                  width: "100%", height: "auto", objectFit: "cover",
                  aspectRatio: "3 / 4",
                }}
              />
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal delay={0.1}>
              <p style={{
                fontFamily: F.body, fontSize: "clamp(13px, 1.1vw, 15px)",
                lineHeight: 2.4, color: C.text, letterSpacing: "0.04em",
              }}>
                ナイトタイムエコノミー——夜の経済圏は、日本において未だ大きなポテンシャルを秘めた領域です。
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p style={{
                fontFamily: F.body, fontSize: "clamp(13px, 1.1vw, 15px)",
                lineHeight: 2.4, color: C.text, letterSpacing: "0.04em",
                marginTop: 24,
              }}>
                私たちobligeは、その可能性を信じ、不動産・インテリア設計・建設・飲食・ブランディング・デジタルマーケティングの6つの事業を通じて、夜の街に確かな価値を届けることを使命としています。
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p style={{
                fontFamily: F.body, fontSize: "clamp(13px, 1.1vw, 15px)",
                lineHeight: 2.4, color: C.text, letterSpacing: "0.04em",
                marginTop: 24,
              }}>
                「oblige」とは、義務を負う、恩義を施す、喜ぶことをする。この言葉に込めた想いは、お客様への約束です。的を射る提案で期待を超え、最後まで責任を持って伴走する。その姿勢こそが、私たちの価値だと考えています。
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p style={{
                fontFamily: F.body, fontSize: "clamp(13px, 1.1vw, 15px)",
                lineHeight: 2.4, color: C.text, letterSpacing: "0.04em",
                marginTop: 24,
              }}>
                銀座・北新地を起点に、夜の街で培った経験と人脈を活かし、ワンストップで事業をプロデュース。空間づくりからブランド戦略、集客まで、すべてを一貫してサポートします。
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div style={{ marginTop: 48 }}>
                <p style={{
                  fontFamily: F.label, fontSize: 10, letterSpacing: 3,
                  color: C.textDim, textTransform: "uppercase", marginBottom: 8,
                }}>CEO / Founder</p>
                <p style={{
                  fontFamily: F.heading, fontSize: "clamp(18px, 2vw, 24px)",
                  fontWeight: 600, color: C.text, letterSpacing: "0.02em",
                }}>香山 達也</p>
                <p style={{
                  fontFamily: F.label, fontSize: 11, letterSpacing: 2,
                  color: C.textMuted, marginTop: 4,
                }}>Tatsuya Kayama</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Philosophy / Vision ── */
function PhilosophySection({ t }) {
  return (
    <section style={{
      padding: spacing.sectionPadding + " 0",
      background: C.dark,
    }}>
      <div className="container" style={{ textAlign: "center" }}>
        <Reveal>
          <p style={{
            fontFamily: F.label, fontSize: fontSize.label,
            letterSpacing: 4, color: C.accent, textTransform: "uppercase",
            fontWeight: 500, marginBottom: 20,
          }}>Philosophy</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 style={{
            fontFamily: F.heading, fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700, color: C.textLight, lineHeight: 1.6,
            letterSpacing: "0.06em", whiteSpace: "pre-line",
          }}>
            {t.about.philosophy.tagline}
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{
            width: 40, height: 2, background: C.accent,
            margin: "40px auto 40px",
          }} />
        </Reveal>

        <Reveal delay={0.25}>
          <p style={{
            fontFamily: F.body, fontSize: "clamp(13px, 1.1vw, 15px)",
            lineHeight: 2.4, color: "rgba(255,255,255,0.6)",
            maxWidth: 560, margin: "0 auto",
            letterSpacing: "0.04em", whiteSpace: "pre-line",
          }}>
            {t.about.philosophy.desc}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Company Info ── */
function CompanySection({ t }) {
  const rows = t.company.rows;

  return (
    <section style={{ padding: spacing.sectionPadding + " 0" }}>
      <div className="container">
        <SectionLabel en={t.about.company.sectionEn} ja={t.about.company.sectionJa} />

        <Reveal delay={0.1}>
          <div style={{ maxWidth: 700 }}>
            {rows.map(([label, value], i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "120px 1fr",
                gap: 24, padding: "20px 0",
                borderBottom: `1px solid ${C.border}`,
              }}>
                <span style={{
                  fontFamily: F.body, fontSize: 12, color: C.textDim,
                  letterSpacing: "0.04em",
                }}>{label}</span>
                <span style={{
                  fontFamily: F.body, fontSize: 14, color: C.text,
                  lineHeight: 1.8, letterSpacing: "0.02em",
                }}>{value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── CTA — hive-inspired hover color shift ── */
function AboutCTA({ t }) {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "clamp(100px, 14vw, 180px) 0",
        background: hovered ? C.accent : C.dark,
        position: "relative", overflow: "hidden",
        transition: "background 0.5s ease",
        cursor: "pointer",
      }}
    >
      <div className="container" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 40,
      }}>
        <div>
          <Reveal>
            <h2 style={{
              fontFamily: F.heading, fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 700, color: C.white, lineHeight: 1.2, marginBottom: 20,
            }}>
              {t.contact.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{
              fontFamily: F.body, fontSize: fontSize.body,
              color: "rgba(255,255,255,0.6)", lineHeight: 2,
              whiteSpace: "pre-line",
            }}>
              {t.contact.desc}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ display: "flex", gap: 20, marginTop: 32, flexWrap: "wrap" }}>
              <a href="mailto:info@oblige.jp" style={{
                fontFamily: F.label, fontSize: 11, fontWeight: 500,
                letterSpacing: 3, textTransform: "uppercase",
                color: C.white, borderBottom: "1px solid rgba(255,255,255,0.3)",
                paddingBottom: 4, transition: `border-color ${timing.fast}`,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.white; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
              >
                info@oblige.jp
              </a>
              <a href="https://www.instagram.com/oblige.co.ltd/" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontFamily: F.label, fontSize: 11, fontWeight: 500,
                letterSpacing: 3, textTransform: "uppercase",
                color: C.white, borderBottom: "1px solid rgba(255,255,255,0.3)",
                paddingBottom: 4, transition: `border-color ${timing.fast}`,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.white; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
              >
                Instagram
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div style={{
            width: 80, height: 80,
            display: "flex", alignItems: "center", justifyContent: "center",
            transform: hovered ? "translate(8px, -8px)" : "none",
            transition: `transform 0.4s ${timing.easeOut}`,
          }}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke={C.white} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="8" y1="40" x2="40" y2="8" />
              <polyline points="20,8 40,8 40,28" />
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════ ABOUT PAGE ═══════ */
export default function AboutPage() {
  const { t } = useLang();
  return (
    <div>
      <AboutHero t={t} />
      <CEOMessage t={t} />
      <PhilosophySection t={t} />
      <CompanySection t={t} />
      <AboutCTA t={t} />
    </div>
  );
}
