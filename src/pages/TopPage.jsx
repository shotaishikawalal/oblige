import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { C, F, fontSize, spacing } from "../styles/design-tokens";
import { divisions } from "../data/divisions";
import SectionLabel from "../components/ui/SectionLabel";
import AnimLine from "../components/ui/AnimLine";
import { Reveal, MaskReveal } from "../components/ui/Reveal";

export default function TopPage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <div>
      {/* ═══════ HERO ═══════ */}
      <section style={{
        height: "100vh", minHeight: 600,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        background: C.dark, color: C.white, textAlign: "center",
        padding: "0 24px", position: "relative", overflow: "hidden",
      }}>
        {/* Video Background */}
        <video
          autoPlay muted loop playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          src="/hero-video.mp4"
        />
        {/* Dark overlay */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 1.2s cubic-bezier(.22,1,.36,1) 0.3s",
          }}>
            <p style={{
              fontFamily: F.label, fontSize: fontSize.label,
              letterSpacing: 6, color: C.accent, textTransform: "uppercase", marginBottom: 32,
            }}>
              Total Night Production
            </p>
          </div>

          <div style={{
            opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 1.2s cubic-bezier(.22,1,.36,1) 0.6s",
          }}>
            <h1 style={{
              fontFamily: F.en, fontSize: fontSize.heroTitle,
              fontWeight: 300, letterSpacing: 2, lineHeight: 1.3,
            }}>
              Creating the Night.<br />Defining the Scene.
            </h1>
          </div>

          <div style={{
            opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 1.2s cubic-bezier(.22,1,.36,1) 1s",
          }}>
            <p style={{
              fontFamily: F.body, fontSize: fontSize.body,
              color: C.muted, letterSpacing: 2, marginTop: 32,
            }}>
              ナイトタイムエコノミーのトータルプロデュース
            </p>
          </div>

          <div style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 1s ease 1.6s",
            marginTop: 48,
          }}>
            <a href="#business" onClick={(e) => {
              e.preventDefault();
              document.getElementById("business")?.scrollIntoView({ behavior: "smooth" });
            }} style={{
              display: "inline-block", padding: "14px 48px",
              border: `1px solid rgba(184,149,106,0.4)`, color: C.accent,
              fontFamily: F.label, fontSize: 10, letterSpacing: 3,
              textTransform: "uppercase", transition: "all 0.3s",
            }}>
              Explore
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
          opacity: loaded ? 0.5 : 0, transition: "opacity 1s ease 2s",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        }}>
          <span style={{ fontFamily: F.label, fontSize: 9, letterSpacing: 3, color: C.muted }}>SCROLL</span>
          <div style={{ width: 1, height: 40, background: `linear-gradient(180deg, ${C.muted} 0%, transparent 100%)` }} />
        </div>
      </section>

      {/* ═══════ ABOUT ═══════ */}
      <section id="about" style={{ padding: spacing.sectionPadding + " 0" }}>
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <SectionLabel en="About" ja="私たちについて" />
          <Reveal delay={0.2}>
            <p style={{
              fontFamily: F.body, fontSize: fontSize.body,
              lineHeight: 2.4, color: C.sub, maxWidth: 640, margin: "0 auto",
            }}>
              obligeは、ナイトタイムエコノミーに特化した<br />
              トータルプロデュース会社です。<br /><br />
              建設・不動産・内装設計・飲食・マーケティング・ブランディングの<br />
              6つの事業を通じて、夜の経済圏に新たな価値を創造します。
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 24, marginTop: 64,
            }}>
              {[
                ["6", "事業", "ワンストップ対応"],
                ["Night", "特化", "ナイトタイム専門"],
                ["Total", "プロデュース", "企画から運営まで"],
              ].map(([num, label, sub], i) => (
                <div key={i} style={{
                  padding: "36px 24px", background: C.surface,
                  border: `1px solid ${C.border}`,
                }}>
                  <div style={{ fontFamily: F.en, fontSize: 28, fontWeight: 300, color: C.accent, marginBottom: 8 }}>{num}</div>
                  <div style={{ fontFamily: F.body, fontSize: 14, fontWeight: 500, color: C.text, marginBottom: 4 }}>{label}</div>
                  <div style={{ fontFamily: F.body, fontSize: 11, color: C.light }}>{sub}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════ BUSINESS GRID ═══════ */}
      <section id="business" style={{ padding: spacing.sectionPadding + " 0", background: C.surface }}>
        <div className="container">
          <SectionLabel en="Business" ja="事業内容" />
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: 20, marginTop: 16,
          }}>
            {divisions.map((d, i) => (
              <Reveal key={d.id} delay={i * 0.08}>
                <Link to={d.path} style={{ display: "block", textDecoration: "none" }}>
                  <div style={{
                    position: "relative", padding: "48px 36px",
                    background: C.white, border: `1px solid ${C.border}`,
                    transition: "all 0.4s ease", cursor: "pointer",
                    overflow: "hidden", minHeight: 200,
                    display: "flex", flexDirection: "column", justifyContent: "space-between",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = C.accent;
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.06)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}>
                    {/* Number watermark */}
                    <span style={{
                      position: "absolute", top: -10, right: 20,
                      fontFamily: F.en, fontSize: 80, fontWeight: 300,
                      color: C.surfaceAlt, lineHeight: 1,
                    }}>{d.number}</span>

                    <div style={{ position: "relative", zIndex: 1 }}>
                      <p style={{
                        fontFamily: F.label, fontSize: 10, letterSpacing: 3,
                        color: C.accent, textTransform: "uppercase", marginBottom: 12,
                      }}>{d.nameEn}</p>
                      <h3 style={{
                        fontFamily: F.body, fontSize: 18, fontWeight: 500,
                        color: C.text, marginBottom: 12,
                      }}>{d.nameJa}</h3>
                      <p style={{
                        fontFamily: F.body, fontSize: 12, lineHeight: 1.8,
                        color: C.sub,
                      }}>{d.tagline}</p>
                    </div>

                    <div style={{
                      marginTop: 24,
                      fontFamily: F.label, fontSize: 10, letterSpacing: 2,
                      color: C.accent, textTransform: "uppercase",
                      display: "flex", alignItems: "center", gap: 8,
                    }}>
                      <span>View More</span>
                      <span style={{ fontSize: 14 }}>→</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ STRENGTH ═══════ */}
      <section style={{ padding: spacing.sectionPadding + " 0" }}>
        <div className="container">
          <SectionLabel en="Strength" ja="obligeが選ばれる理由" />
          <div style={{ display: "flex", flexDirection: "column", gap: 64, marginTop: 16 }}>
            {[
              {
                num: "01",
                title: "ワンストップソリューション",
                desc: "建設・不動産・内装設計・飲食・マーケティング・ブランディングの6事業が連携。企画段階から運営まで、一貫したプロデュースを実現します。",
              },
              {
                num: "02",
                title: "ナイトタイム特化の専門性",
                desc: "ナイトタイムエコノミーに特化して培った業界知識と人脈。深夜営業ならではの法規制、集客、空間設計のノウハウで最適な提案を行います。",
              },
              {
                num: "03",
                title: "ブランディング起点の設計",
                desc: "見た目だけでなく、ブランド戦略から空間を設計。ターゲット分析・競合調査を経て、唯一無二のブランド体験を構築します。",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={0.1}>
                <div style={{ display: "flex", gap: 40, alignItems: "flex-start", flexWrap: "wrap" }}>
                  <div style={{
                    fontFamily: F.en, fontSize: 48, fontWeight: 300,
                    color: C.accent, lineHeight: 1, minWidth: 80,
                  }}>{item.num}</div>
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <h3 style={{
                      fontFamily: F.body, fontSize: 20, fontWeight: 500,
                      color: C.text, marginBottom: 16,
                    }}>{item.title}</h3>
                    <AnimLine width="40px" />
                    <p style={{
                      fontFamily: F.body, fontSize: 14, lineHeight: 2.2,
                      color: C.sub, marginTop: 16,
                    }}>{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ COMPANY ═══════ */}
      <section id="company" style={{ padding: spacing.sectionPadding + " 0", background: C.surface }}>
        <div className="container">
          <SectionLabel en="Company" ja="会社概要" />
          <Reveal delay={0.2}>
            <div style={{
              display: "grid", gridTemplateColumns: "100px 1fr",
              gap: "20px 32px", fontFamily: F.body, fontSize: 14, lineHeight: 2,
              maxWidth: 600,
            }}>
              {[
                ["会社名", "株式会社オブライジ"],
                ["英文名", "Oblige Co., Ltd."],
                ["代表者", "（代表者名）"],
                ["所在地", "大阪府大阪市北区曽根崎新地"],
                ["事業内容", "建設 / 不動産 / 内装設計 / 飲食 / SNS・WEB広告 / ブランディング"],
                ["対応エリア", "銀座・北新地を中心に全国対応"],
              ].map(([label, value], i) => (
                <div key={i} style={{ display: "contents" }}>
                  <span style={{ color: C.light, fontSize: 12 }}>{label}</span>
                  <span style={{ color: C.text }}>{value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════ CONTACT CTA ═══════ */}
      <section id="contact" style={{
        padding: spacing.sectionPadding + " 0",
        background: C.dark, textAlign: "center",
      }}>
        <div className="container-narrow">
          <SectionLabel en="Contact" ja="お問い合わせ" light />
          <Reveal delay={0.2}>
            <p style={{
              fontFamily: F.body, fontSize: fontSize.body,
              color: C.muted, lineHeight: 2, marginBottom: 48,
            }}>
              事業に関するご相談・お見積りは無料です。<br />
              お気軽にお問い合わせください。
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <a href="mailto:info@oblige.jp" style={{
              display: "inline-block", padding: "14px 56px",
              background: C.white, color: C.dark,
              fontFamily: F.label, fontSize: 11, letterSpacing: 3,
              textTransform: "uppercase", transition: "all 0.3s",
            }}>
              Email
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
