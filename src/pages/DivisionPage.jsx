import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { C, F, fontSize, spacing, timing } from "../styles/design-tokens";
import { divisions } from "../data/divisions";
import { Reveal } from "../components/ui/Reveal";
import { useLang } from "../i18n/LanguageContext";

/* ═══════════════════════════════════════════════════════
   oblige! — Division Page (White-first + Photo-driven)
   ═══════════════════════════════════════════════════════ */

/* Hero photos per division (251206=ラウンジ, yamaneya=バー) */
const heroPhotos = {
  construction:      "/251206-029.jpg",
  "real-estate":     "/251206-051.jpg",
  "interior-design": "/251206-003.jpg",
  "food-beverage":   "/yamaneya_1642.jpg",
  marketing:         "/yamaneya_1229.JPG",
  branding:          "/251206-098.jpg",
};

/* Overview section side photos (different from hero) */
const overviewPhotos = {
  construction:      "/251206-017.jpg",
  "real-estate":     "/251206-029.jpg",
  "interior-design": "/251206-102.jpg",
  "food-beverage":   "/yamaneya_1229.JPG",
  marketing:         "/yamaneya_1151.JPG",
  branding:          "/251206-003.jpg",
};

/* ── SECTION LABEL — unified style ── */
function SectionHead({ en, ja, light = false }) {
  return (
    <Reveal>
      <div style={{
        display: "flex", alignItems: "baseline", gap: 16,
        marginBottom: 48,
      }}>
        <h2 style={{
          fontFamily: F.heading, fontSize: "clamp(28px, 3.5vw, 44px)",
          fontWeight: 700, color: light ? C.textLight : C.text, lineHeight: 1,
          letterSpacing: "0.04em", textTransform: "uppercase",
        }}>{en}</h2>
        <span style={{
          fontFamily: F.body, fontSize: "clamp(12px, 1vw, 14px)",
          color: light ? "rgba(255,255,255,0.5)" : C.textMuted, letterSpacing: "0.06em",
        }}>— {ja}</span>
      </div>
    </Reveal>
  );
}

export default function DivisionPage() {
  const { t } = useLang();
  const { id } = useParams();
  const div = divisions.find(d => d.path === `/${id}`);

  if (!div) return (
    <div style={{
      padding: "200px 24px", textAlign: "center",
      background: C.bg, color: C.text, minHeight: "100vh",
    }}>
      <p style={{ fontFamily: F.heading, fontSize: fontSize.section }}>
        Page Not Found
      </p>
    </div>
  );

  const tDiv = t.divisions[div.id] || {};
  const relatedDivs = (div.related || [])
    .map(rid => divisions.find(d => d.id === rid))
    .filter(Boolean);

  return (
    <div style={{ background: C.bg }}>

      {/* ═══════ HERO (Dark with photo) ═══════ */}
      <section className="division-hero" style={{
        height: "70vh", minHeight: 480,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden",
      }}>
        {/* Background photo */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${heroPhotos[div.id] || "/251206-003.jpg"})`,
          backgroundSize: "cover", backgroundPosition: "center",
          filter: "brightness(1.02) saturate(0.92)",
        }} />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, rgba(242,236,228,0.9) 0%, rgba(242,236,228,0.7) 45%, rgba(242,236,228,0.32) 100%), linear-gradient(180deg, rgba(242,236,228,0.08) 0%, rgba(242,236,228,0.26) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }} />

        {/* Top red accent line */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: 3, background: C.accent, zIndex: 2,
        }} />

        {/* Large watermark number */}
        <span style={{
          position: "absolute", zIndex: 1,
          fontFamily: F.display, fontSize: "clamp(100px, 20vw, 240px)",
          fontWeight: 700, color: "rgba(17,17,17,0.055)", lineHeight: 1,
          userSelect: "none",
        }}>
          {div.number}
        </span>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", textShadow: "0 12px 34px rgba(242,236,228,0.42)" }}>
          {/* Capsule — Japanese name */}
          <span style={{
            display: "inline-block", fontFamily: F.body, fontSize: 12,
            color: C.textMuted,
            background: "rgba(255,255,255,0.52)", backdropFilter: "blur(6px)",
            padding: "6px 20px", borderRadius: 20, marginBottom: 20,
          }}>{tDiv.nameJa || div.nameJa}</span>

          {/* English main title */}
          <h1 style={{
            fontFamily: F.heading, fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 700, color: C.text, marginBottom: 16,
            letterSpacing: "0.04em", textTransform: "uppercase",
          }}>
            {div.nameEn}
          </h1>
          <div style={{ width: 32, height: 2, background: C.accent, margin: "0 auto 20px" }} />
          <p style={{
            fontFamily: F.body, fontSize: fontSize.body,
            color: C.textMuted, lineHeight: 1.8,
          }}>
            {tDiv.tagline || div.tagline}
          </p>
        </div>

      </section>

      {/* ═══════ ANCHOR NAV — hive-inspired ↓ section jump ═══════ */}
      <nav className="division-anchor-nav" style={{
        padding: "28px 0",
        borderBottom: `1px solid ${C.border}`,
      }}>
        <div className="container anchor-nav" style={{
          display: "flex", alignItems: "center", gap: "clamp(24px, 4vw, 48px)",
          flexWrap: "wrap",
        }}>
          {[
            { label: t.division.anchorNav.overview, anchor: "sec-overview" },
            { label: t.division.anchorNav.strengths, anchor: "sec-strengths" },
            { label: t.division.anchorNav.flow, anchor: "sec-flow" },
            { label: t.division.anchorNav.faq, anchor: "sec-faq" },
          ].map((item) => (
            <button
              key={item.anchor}
              className="anchor-arrow"
              onClick={() => {
                const el = document.getElementById(item.anchor);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                fontFamily: F.heading, fontSize: "clamp(13px, 1.1vw, 15px)",
                fontWeight: 500, color: C.text, letterSpacing: "0.02em",
                cursor: "pointer", padding: 0,
                transition: `color ${timing.fast}`,
              }}
              onMouseEnter={e => { e.currentTarget.style.color = C.accent; }}
              onMouseLeave={e => { e.currentTarget.style.color = C.text; }}
            >
              {/* Down arrow circle */}
              <span className="arrow-circle" style={{
                width: 28, height: 28, borderRadius: "50%",
                background: C.accent,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke={C.white} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="6" y1="1" x2="6" y2="11" />
                  <polyline points="2,7 6,11 10,7" />
                </svg>
              </span>
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ═══════ OVERVIEW (white) ═══════ */}
      <section id="sec-overview" style={{ padding: spacing.sectionPadding + " 0", background: C.bg }}>
        <div className="container">
          <div className="grid-2col" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64,
            alignItems: "center",
          }}>
            <div>
              <SectionHead en={t.division.sections.overview.en} ja={t.division.sections.overview.ja} />
              <Reveal delay={0.1}>
                <p style={{
                  fontFamily: F.body, fontSize: fontSize.body,
                  lineHeight: 2.4, color: C.textMuted,
                }}>
                  {tDiv.description || div.description}
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <div style={{
                height: 360, overflow: "hidden",
                border: `1px solid ${C.border}`,
              }}>
                <img
                  src={overviewPhotos[div.id] || "/251206-003.jpg"}
                  alt={tDiv.nameJa || div.nameJa}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════ TAIHO SEIKA — Food & Beverage exclusive launch showcase ═══════ */}
      {div.id === "food-beverage" && <TaihoSeikaShowcase />}

      {/* ═══════ INTERIOR — Featured projects (Club Shuki / Collectons Bar) ═══════ */}
      {div.id === "interior-design" && <InteriorWorksShowcase />}

      {/* ═══════ STRENGTHS (light surface) ═══════ */}
      <section id="sec-strengths" style={{ padding: spacing.sectionPadding + " 0", background: C.bgAlt }}>
        <div className="container">
          <SectionHead en={t.division.sections.strengths.en} ja={t.division.sections.strengths.ja} />
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}>
            {(tDiv.strengths || div.strengths).map((s, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{
                  padding: "36px 28px",
                  background: C.white,
                  border: `1px solid ${C.border}`,
                  transition: `all ${timing.fast}`,
                  height: "100%",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = C.borderActive;
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.06)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}>
                  <div style={{
                    fontFamily: F.display, fontSize: 28, fontWeight: 700,
                    color: C.accent, lineHeight: 1, marginBottom: 16,
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 style={{
                    fontFamily: F.heading, fontSize: 16, fontWeight: 600,
                    color: C.text, marginBottom: 12,
                  }}>
                    {s.title}
                  </h3>
                  <p style={{
                    fontFamily: F.body, fontSize: 13, lineHeight: 2,
                    color: C.textMuted,
                  }}>
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FLOW — hive-inspired numbered steps ═══════ */}
      <section id="sec-flow" style={{ padding: spacing.sectionPadding + " 0", background: C.bg }}>
        <div className="container">
          <SectionHead en={t.division.sections.flow.en} ja={t.division.sections.flow.ja} />
          <div className="flow-grid" style={{
            display: "grid",
            gridTemplateColumns: `repeat(${Math.min((tDiv.process || div.process).length, 5)}, 1fr)`,
            gap: 0,
          }}>
            {(tDiv.process || div.process).map((p, i) => (
              <Reveal key={i} delay={0.06 + i * 0.06}>
                <div style={{
                  padding: "0 clamp(16px, 2vw, 32px)",
                  borderLeft: i === 0 ? "none" : `1px solid ${C.border}`,
                  height: "100%",
                }}>
                  {/* Large number */}
                  <div style={{
                    fontFamily: F.display, fontSize: "clamp(48px, 5vw, 72px)",
                    fontWeight: 700, color: C.accent, lineHeight: 1,
                    marginBottom: 20,
                  }}>
                    {p.step}
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: F.heading, fontSize: "clamp(14px, 1.2vw, 17px)",
                    fontWeight: 600, color: C.text, lineHeight: 1.4,
                    marginBottom: 12, letterSpacing: "0.02em",
                  }}>
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontFamily: F.body, fontSize: "clamp(11px, 0.9vw, 13px)",
                    lineHeight: 2, color: C.textMuted,
                    letterSpacing: "0.02em",
                  }}>
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FAQ (light surface) ═══════ */}
      <section id="sec-faq" style={{ padding: spacing.sectionPadding + " 0", background: C.bgAlt }}>
        <div className="container-narrow">
          <SectionHead en={t.division.sections.faq.en} ja={t.division.sections.faq.ja} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            {(tDiv.faq || div.faq).map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ RELATED (white) ═══════ */}
      {relatedDivs.length > 0 && (
        <section style={{ padding: spacing.sectionPadding + " 0", background: C.bg }}>
          <div className="container">
            <SectionHead en={t.division.sections.related.en} ja={t.division.sections.related.ja} />
            <div className="related-grid" style={{
              display: "grid",
              gridTemplateColumns: `repeat(${Math.min(relatedDivs.length, 3)}, 1fr)`,
              gap: 20,
            }}>
              {relatedDivs.map((rd, i) => (
                <Reveal key={rd.id} delay={i * 0.06}>
                  <Link to={rd.path} style={{ display: "block", textDecoration: "none" }}>
                    <div style={{
                      overflow: "hidden",
                      background: C.white, border: `1px solid ${C.border}`,
                      transition: `all ${timing.fast}`,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = C.borderActive;
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = C.border;
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}>
                      {/* Photo */}
                      <div style={{ height: 180, overflow: "hidden" }}>
                        <img
                          src={heroPhotos[rd.id] || "/251206-003.jpg"}
                          alt={t.divisions[rd.id]?.nameJa || rd.nameJa}
                          style={{
                            width: "100%", height: "100%", objectFit: "cover",
                            transition: `transform 0.6s ${timing.easeOut}`,
                          }}
                          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; }}
                          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
                        />
                      </div>

                      <div style={{ padding: "20px 24px 24px" }}>
                        <p style={{
                          fontFamily: F.label, fontSize: fontSize.data,
                          letterSpacing: 3, color: C.accent, textTransform: "uppercase",
                          fontWeight: 500, marginBottom: 6,
                        }}>{rd.nameEn}</p>
                        <h3 style={{
                          fontFamily: F.heading, fontSize: 18, fontWeight: 600,
                          color: C.text, marginBottom: 4,
                        }}>{t.divisions[rd.id]?.nameJa || rd.nameJa}</h3>
                        <p style={{
                          fontFamily: F.body, fontSize: 12, color: C.textMuted,
                          lineHeight: 1.8,
                        }}>{t.divisions[rd.id]?.tagline || rd.tagline}</p>
                        <div style={{
                          marginTop: 12,
                          fontFamily: F.label, fontSize: fontSize.data,
                          letterSpacing: 2, color: C.accent, textTransform: "uppercase",
                          fontWeight: 500, display: "flex", alignItems: "center", gap: 6,
                        }}>
                          <span>View</span>
                          <span style={{ fontSize: 12 }}>→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════ CTA — hive-inspired color-shift ═══════ */}
      <DivisionCTA t={t} />
    </div>
  );
}

/* ── CTA — hive-inspired hover color shift ── */
function DivisionCTA({ t }) {
  const [hovered, setHovered] = useState(false);
  const ctaText = hovered ? C.white : C.text;
  const ctaBody = hovered ? "rgba(255,255,255,0.72)" : C.textMuted;
  const ctaBorder = hovered ? "rgba(255,255,255,0.38)" : "rgba(17,17,17,0.28)";

  return (
    <section
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "clamp(100px, 14vw, 180px) 0",
        background: hovered ? C.accent : C.bgAlt,
        position: "relative", overflow: "hidden",
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        transition: "background 0.5s ease, border-color 0.5s ease",
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
              fontWeight: 700, color: ctaText, lineHeight: 1.2, marginBottom: 20,
              transition: "color 0.5s ease",
            }}>
              {t.contact.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{
              fontFamily: F.body, fontSize: fontSize.body,
              color: ctaBody, lineHeight: 2,
              transition: "color 0.5s ease",
            }}>
              {t.division.cta.desc}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ display: "flex", gap: 20, marginTop: 32, flexWrap: "wrap" }}>
              <a href="mailto:info@oblige.jp" style={{
                fontFamily: F.label, fontSize: 11, fontWeight: 500,
                letterSpacing: 3, textTransform: "uppercase",
                color: ctaText, borderBottom: `1px solid ${ctaBorder}`,
                paddingBottom: 4, transition: `border-color ${timing.fast}`,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = hovered ? C.white : C.accent; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = ctaBorder; }}
              >
                info@oblige.jp
              </a>
              <a href="https://www.instagram.com/oblige.co.ltd/" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontFamily: F.label, fontSize: 11, fontWeight: 500,
                letterSpacing: 3, textTransform: "uppercase",
                color: ctaText, borderBottom: `1px solid ${ctaBorder}`,
                paddingBottom: 4, transition: `border-color ${timing.fast}`,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = hovered ? C.white : C.accent; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = ctaBorder; }}
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
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke={hovered ? C.white : C.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "stroke 0.5s ease" }}>
              <line x1="8" y1="40" x2="40" y2="8" />
              <polyline points="20,8 40,8 40,28" />
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── TAIHO SEIKA — Cinematic editorial showcase ── */
function TaihoSeikaShowcase() {
  const { t } = useLang();
  const [hovered, setHovered] = useState(false);
  const p = t.partnership;
  const work = {
    nameEn: p.titleEn,
    nameJa: p.titleSubJa,
    category: p.category,
    location: p.location,
    locationJa: p.dataValues.location,
    type: p.dataValues.type,
    release: p.dataValues.release,
    scope: p.scope,
    tagline: p.tagline,
    description: p.description,
    link: "https://taiho-seika.com/",
    linkLabel: "taiho-seika.com",
    linkType: "web",
    image: "/taiho-seika-package.png",
    logo: "/taiho-seika-logo.png",
  };

  return (
    <section style={{
      padding: "clamp(80px, 12vw, 160px) 0",
      background: C.bg,
      position: "relative", overflow: "hidden",
      borderTop: `2px solid ${C.accent}`,
    }}>
      {/* Giant backdrop type */}
      <span aria-hidden style={{
        position: "absolute", top: "clamp(40px, 6vw, 80px)", left: "-2vw",
        fontFamily: F.display,
        fontSize: "clamp(140px, 22vw, 340px)",
        fontWeight: 700, color: "rgba(26,23,20,0.04)", lineHeight: 0.85,
        letterSpacing: "-0.04em", userSelect: "none", pointerEvents: "none",
        whiteSpace: "nowrap", textTransform: "uppercase",
      }}>
        {work.nameEn}
      </span>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section eyebrow header */}
        <Reveal>
          <p style={{
            fontFamily: F.label, fontSize: 11, fontWeight: 500,
            letterSpacing: 4, textTransform: "uppercase",
            color: C.accent, marginBottom: 14,
          }}>
            {p.eyebrow}
          </p>
        </Reveal>

        {/* Meta strip */}
        <Reveal delay={0.05}>
          <div style={{
            display: "flex", alignItems: "center", gap: 20,
            marginBottom: 28, flexWrap: "wrap",
          }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontFamily: F.label, fontSize: 11, fontWeight: 500,
              letterSpacing: 3, textTransform: "uppercase",
              color: C.accent,
              padding: "6px 14px",
              border: `1px solid ${C.accent}`,
              borderRadius: 20,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: C.accent,
                boxShadow: `0 0 8px ${C.accent}`,
              }} />
              {p.comingBadge}
            </span>
            <span style={{
              fontFamily: F.label, fontSize: 11, fontWeight: 500,
              letterSpacing: 3, textTransform: "uppercase",
              color: C.textMuted,
            }}>
              {work.category}
            </span>
            <span style={{
              flex: 1, height: 1, background: C.border,
              minWidth: 40,
            }} />
            <span style={{
              fontFamily: F.mono, fontSize: 11, fontWeight: 500,
              letterSpacing: "0.2em", color: C.textDim,
            }}>
              {work.release} · {work.scope}
            </span>
          </div>
        </Reveal>

        {/* Title */}
        <Reveal delay={0.08}>
          <h2 style={{
            fontFamily: F.heading,
            fontSize: "clamp(40px, 6.5vw, 88px)",
            fontWeight: 700, color: C.text, lineHeight: 0.95,
            letterSpacing: "-0.01em", textTransform: "uppercase",
            marginBottom: 16,
          }}>
            {work.nameEn}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{
            fontFamily: F.body, fontSize: "clamp(15px, 1.3vw, 18px)",
            fontWeight: 500, color: C.text, letterSpacing: "0.04em",
            marginBottom: 48,
          }}>
            {work.nameJa}
          </p>
        </Reveal>

        {/* Hero image — cinematic package */}
        <Reveal delay={0.12}>
          <a
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              display: "block", position: "relative",
              width: "100%",
              aspectRatio: "16 / 10",
              overflow: "hidden",
              background: C.white,
              cursor: "pointer",
              marginBottom: "clamp(40px, 5vw, 72px)",
              border: `1px solid ${C.border}`,
            }}
          >
            <img
              src={work.image}
              alt="大宝青果 パッケージデザイン"
              style={{
                width: "100%", height: "100%", objectFit: "contain",
                padding: "clamp(24px, 4vw, 56px)",
                transform: hovered ? "scale(1.04)" : "scale(1)",
                transition: `transform 1.2s ${timing.easeOut}`,
              }}
            />
            {/* Corner label */}
            <div style={{
              position: "absolute", top: 0, left: 0,
              padding: "20px 24px",
              display: "flex", alignItems: "center", gap: 10,
              fontFamily: F.mono, fontSize: 10, fontWeight: 500,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: C.text,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: C.accent,
                boxShadow: `0 0 8px ${C.accent}`,
              }} />
              {work.location}
            </div>
            {/* Hover hint */}
            <div style={{
              position: "absolute", bottom: 24, right: 24,
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "14px 20px",
              background: hovered ? C.accent : "rgba(255,255,255,0.95)",
              color: hovered ? C.white : C.text,
              fontFamily: F.label, fontSize: 11, fontWeight: 600,
              letterSpacing: 3, textTransform: "uppercase",
              transition: `all ${timing.fast}`,
              transform: hovered ? "translate(-4px, -4px)" : "none",
              border: `1px solid ${hovered ? C.accent : C.border}`,
            }}>
              <PlatformIcon type={work.linkType} size={14} />
              {work.linkLabel}
              <span style={{ fontSize: 14 }}>↗</span>
            </div>
          </a>
        </Reveal>

        {/* Data + narrative row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "clamp(40px, 5vw, 80px)",
          marginBottom: "clamp(40px, 5vw, 72px)",
        }} className="grid-2col">
          {/* Left — data */}
          <Reveal delay={0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                { k: p.dataLabels.location, v: work.locationJa },
                { k: p.dataLabels.type, v: work.type },
                { k: p.dataLabels.release, v: work.release },
                { k: p.dataLabels.scope, v: work.scope },
              ].map(({ k, v }) => (
                <div key={k} style={{
                  paddingBottom: 12,
                  borderBottom: `1px solid ${C.border}`,
                }}>
                  <p style={{
                    fontFamily: F.mono, fontSize: 10, fontWeight: 500,
                    letterSpacing: "0.24em", textTransform: "uppercase",
                    color: C.accent, marginBottom: 6,
                  }}>
                    / {k}
                  </p>
                  <p style={{
                    fontFamily: F.body, fontSize: 14,
                    color: C.text, letterSpacing: "0.02em",
                    lineHeight: 1.6,
                  }}>
                    {v}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — narrative */}
          <div>
            <Reveal delay={0.15}>
              <p style={{
                fontFamily: F.body, fontSize: "clamp(18px, 1.6vw, 24px)",
                fontWeight: 500, color: C.text, lineHeight: 1.7,
                letterSpacing: "0.02em", marginBottom: 32,
              }}>
                「{work.tagline}」
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{
                fontFamily: F.body, fontSize: 14,
                color: C.textMuted, lineHeight: 2.2,
              }}>
                {work.description}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Logo lockup */}
        <Reveal delay={0.1}>
          <div>
            <div style={{
              display: "flex", alignItems: "center", gap: 12,
              marginBottom: 20,
            }}>
              <span style={{
                fontFamily: F.mono, fontSize: 10, fontWeight: 500,
                letterSpacing: "0.24em", textTransform: "uppercase",
                color: C.accent,
              }}>
                {p.brandIdentity}
              </span>
              <span style={{ flex: 1, height: 1, background: C.border }} />
              <span style={{
                fontFamily: F.mono, fontSize: 10, fontWeight: 500,
                letterSpacing: "0.2em", color: C.textDim,
              }}>
                {p.logoNote}
              </span>
            </div>
            <div style={{
              background: C.white,
              border: `1px solid ${C.border}`,
              padding: "clamp(40px, 6vw, 72px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              minHeight: 180,
            }}>
              <img
                src={work.logo}
                alt="大宝青果 ロゴ"
                style={{
                  width: "100%", maxWidth: 420, height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Platform icons for external links ── */
function PlatformIcon({ type, size = 16, color = "currentColor" }) {
  if (type === "instagram") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  }
  // web / globe
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

/* ── INTERIOR WORKS — Cinematic editorial showcase ── */
const INTERIOR_WORKS = [
  {
    id: "club-shuki",
    category: "Lounge / Club",
    nameJa: "北新地 クラブ朱妃",
    nameEn: "CLUB SHUKI",
    location: "Osaka, Kitashinchi",
    locationJa: "大阪・北新地 堂島ビル 1F",
    year: "2025",
    scope: "Design + Build",
    tagline: "洗練とラグジュアリーが交差する、ピアノが響く高級クラブ空間。",
    description:
      "北新地の中心に構える高級クラブ「朱妃」。シャンパン・ワイン・ウイスキー・焼酎が並ぶメインカウンターと、生ピアノの音色が溶け合う空間を、照明計画・素材選定・動線設計まで一貫してプロデュース。夜の余韻を最大化する、静謐で上質な内装を実現しました。",
    image: "/251206-003.jpg",
    subImages: ["/251206-017.jpg", "/251206-051.jpg", "/251206-102.jpg", "/251206-029.jpg", "/251206-074.jpg", "/251206-098.jpg"],
    link: "https://club-shuki.jp/",
    linkLabel: "club-shuki.jp",
    linkType: "web",
  },
  {
    id: "collectons-bar",
    category: "Bar",
    nameJa: "コレクトンズ バー",
    nameEn: "COLLECTONS BAR",
    location: "Osaka, Minamihonmachi",
    locationJa: "大阪市中央区南本町 3-1-3 カネセオ第3ビル B1",
    year: "2024",
    scope: "Design + Build",
    tagline: "こだわりの一杯と、静かに愉しむ大人の時間。",
    description:
      "カウンターに身を預け、静かに会話を愉しむための空間設計。素材感のある壁面と間接照明で、夜の密度を丁寧に整えました。バックバーのディスプレイ、座面の奥行き、カウンターの高さまで、バーテンダーとゲスト双方の所作を考慮した設計を実施しています。",
    image: "/yamaneya_1642.jpg",
    subImages: ["/yamaneya_1229.JPG", "/yamaneya_1151.JPG", "/yamaneya_1960.JPG", "/yamaneya_1265.JPG", "/yamaneya_1908.JPG", "/yamaneya_1938.JPG"],
    link: "https://www.instagram.com/collectons_bar/",
    linkLabel: "@collectons_bar",
    linkType: "instagram",
  },
];

function InteriorWorksShowcase() {
  return (
    <section style={{
      padding: "clamp(80px, 12vw, 160px) 0 0",
      background: C.bg,
      position: "relative", overflow: "hidden",
    }}>
      {/* Top accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: 2, background: C.accent,
      }} />

      {/* Header */}
      <div className="container" style={{
        display: "flex", alignItems: "flex-end", justifyContent: "space-between",
        gap: 32, flexWrap: "wrap", marginBottom: "clamp(48px, 6vw, 88px)",
      }}>
        <div>
          <Reveal>
            <p style={{
              fontFamily: F.label, fontSize: 11, fontWeight: 500,
              letterSpacing: 4, textTransform: "uppercase",
              color: C.accent, marginBottom: 14,
            }}>
              ● Selected Projects
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 style={{
              fontFamily: F.heading,
              fontSize: "clamp(40px, 7vw, 96px)",
              fontWeight: 700, color: C.text, lineHeight: 0.95,
              letterSpacing: "-0.01em", textTransform: "uppercase",
            }}>
              Works<span style={{ color: C.accent }}>.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p style={{
              fontFamily: F.body, fontSize: "clamp(13px, 1vw, 15px)",
              color: C.textMuted, letterSpacing: "0.06em",
              marginTop: 16,
            }}>
              ナイトタイムシーンに特化した、選りすぐりの空間設計事例。
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div style={{
            fontFamily: F.mono, fontSize: 11, fontWeight: 500,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: C.textDim, textAlign: "right",
            lineHeight: 1.8,
          }}>
            <div>{String(INTERIOR_WORKS.length).padStart(2, "0")} Featured</div>
            <div style={{ color: C.textMuted }}>Scroll ↓</div>
          </div>
        </Reveal>
      </div>

      {/* Works */}
      <div>
        {INTERIOR_WORKS.map((work, i) => (
          <InteriorWorkSpread key={work.id} work={work} index={i} />
        ))}
      </div>
    </section>
  );
}

function InteriorWorkSpread({ work, index }) {
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  return (
    <article style={{
      padding: "clamp(80px, 10vw, 160px) 0",
      position: "relative",
      borderTop: index > 0 ? `1px solid ${C.border}` : "none",
    }}>
      {/* Giant backdrop type */}
      <span aria-hidden style={{
        position: "absolute", top: "clamp(40px, 6vw, 80px)", left: "-2vw",
        fontFamily: F.display,
        fontSize: "clamp(140px, 22vw, 340px)",
        fontWeight: 700, color: "rgba(26,23,20,0.04)", lineHeight: 0.85,
        letterSpacing: "-0.04em", userSelect: "none", pointerEvents: "none",
        whiteSpace: "nowrap", textTransform: "uppercase",
      }}>
        {work.nameEn}
      </span>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Meta strip */}
        <Reveal>
          <div style={{
            display: "flex", alignItems: "center", gap: 20,
            marginBottom: 28, flexWrap: "wrap",
          }}>
            <span style={{
              fontFamily: F.display, fontSize: 14, fontWeight: 600,
              letterSpacing: "0.12em", color: C.accent,
            }}>
              — {num}
            </span>
            <span style={{
              fontFamily: F.label, fontSize: 11, fontWeight: 500,
              letterSpacing: 3, textTransform: "uppercase",
              color: C.textMuted,
            }}>
              {work.category}
            </span>
            <span style={{
              flex: 1, height: 1, background: C.border,
              minWidth: 40,
            }} />
            <span style={{
              fontFamily: F.mono, fontSize: 11, fontWeight: 500,
              letterSpacing: "0.2em", color: C.textDim,
            }}>
              {work.year} · {work.scope}
            </span>
          </div>
        </Reveal>

        {/* Title */}
        <Reveal delay={0.05}>
          <h3 style={{
            fontFamily: F.heading,
            fontSize: "clamp(40px, 6.5vw, 88px)",
            fontWeight: 700, color: C.text, lineHeight: 0.95,
            letterSpacing: "-0.01em", textTransform: "uppercase",
            marginBottom: 16,
          }}>
            {work.nameEn}
          </h3>
        </Reveal>
        <Reveal delay={0.08}>
          <p style={{
            fontFamily: F.body, fontSize: "clamp(15px, 1.3vw, 18px)",
            fontWeight: 500, color: C.text, letterSpacing: "0.04em",
            marginBottom: 48,
          }}>
            {work.nameJa}
          </p>
        </Reveal>

        {/* Hero image — tall cinematic */}
        <Reveal delay={0.12}>
          <a
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              display: "block", position: "relative",
              width: "100%",
              aspectRatio: "16 / 10",
              overflow: "hidden",
              background: C.surface,
              cursor: "pointer",
              marginBottom: "clamp(40px, 5vw, 72px)",
            }}
          >
            <img
              src={work.image}
              alt={work.nameJa}
              style={{
                width: "100%", height: "100%", objectFit: "cover",
                transform: hovered ? "scale(1.06)" : "scale(1)",
                transition: `transform 1.2s ${timing.easeOut}`,
              }}
            />
            {/* Corner label */}
            <div style={{
              position: "absolute", top: 0, left: 0,
              padding: "20px 24px",
              display: "flex", alignItems: "center", gap: 10,
              fontFamily: F.mono, fontSize: 10, fontWeight: 500,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: C.white,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: C.accent,
                boxShadow: `0 0 8px ${C.accent}`,
              }} />
              {work.location}
            </div>
            {/* Hover hint */}
            <div style={{
              position: "absolute", bottom: 24, right: 24,
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "14px 20px",
              background: hovered ? C.accent : "rgba(255,255,255,0.95)",
              color: hovered ? C.white : C.text,
              fontFamily: F.label, fontSize: 11, fontWeight: 600,
              letterSpacing: 3, textTransform: "uppercase",
              transition: `all ${timing.fast}`,
              transform: hovered ? "translate(-4px, -4px)" : "none",
            }}>
              <PlatformIcon type={work.linkType} size={14} />
              {work.linkLabel}
              <span style={{ fontSize: 14 }}>↗</span>
            </div>
          </a>
        </Reveal>

        {/* Data + narrative row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "clamp(40px, 5vw, 80px)",
          marginBottom: "clamp(40px, 5vw, 72px)",
        }} className="grid-2col">
          {/* Left — data */}
          <Reveal delay={0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                { k: "Location", v: work.locationJa },
                { k: "Type", v: work.category },
                { k: "Completed", v: work.year },
                { k: "Scope", v: work.scope },
              ].map(({ k, v }) => (
                <div key={k} style={{
                  paddingBottom: 12,
                  borderBottom: `1px solid ${C.border}`,
                }}>
                  <p style={{
                    fontFamily: F.mono, fontSize: 10, fontWeight: 500,
                    letterSpacing: "0.24em", textTransform: "uppercase",
                    color: C.accent, marginBottom: 6,
                  }}>
                    / {k}
                  </p>
                  <p style={{
                    fontFamily: F.body, fontSize: 14,
                    color: C.text, letterSpacing: "0.02em",
                    lineHeight: 1.6,
                  }}>
                    {v}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — narrative */}
          <div>
            <Reveal delay={0.15}>
              <p style={{
                fontFamily: F.body, fontSize: "clamp(18px, 1.6vw, 24px)",
                fontWeight: 500, color: C.text, lineHeight: 1.7,
                letterSpacing: "0.02em", marginBottom: 32,
              }}>
                「{work.tagline}」
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{
                fontFamily: F.body, fontSize: 14,
                color: C.textMuted, lineHeight: 2.2,
              }}>
                {work.description}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Horizontal scrolling gallery */}
        {work.subImages && work.subImages.length > 0 && (
          <Reveal delay={0.1}>
            <div>
              <div style={{
                display: "flex", alignItems: "center", gap: 12,
                marginBottom: 20,
              }}>
                <span style={{
                  fontFamily: F.mono, fontSize: 10, fontWeight: 500,
                  letterSpacing: "0.24em", textTransform: "uppercase",
                  color: C.accent,
                }}>
                  / Gallery
                </span>
                <span style={{ flex: 1, height: 1, background: C.border }} />
                <span style={{
                  fontFamily: F.mono, fontSize: 10, fontWeight: 500,
                  letterSpacing: "0.2em", color: C.textDim,
                }}>
                  {String(work.subImages.length).padStart(2, "0")} IMAGES · SCROLL →
                </span>
              </div>
              <div
                className="works-gallery"
                style={{
                  display: "flex", gap: 16, overflowX: "auto",
                  scrollSnapType: "x mandatory",
                  paddingBottom: 20,
                  scrollbarWidth: "thin",
                }}
              >
                {work.subImages.map((src, i) => (
                  <div key={i} style={{
                    flex: "0 0 clamp(260px, 32vw, 420px)",
                    aspectRatio: "3 / 4",
                    overflow: "hidden",
                    background: C.surface,
                    scrollSnapAlign: "start",
                    position: "relative",
                  }}>
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      style={{
                        width: "100%", height: "100%", objectFit: "cover",
                        transition: `transform 0.8s ${timing.easeOut}`,
                      }}
                      onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.06)"; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
                    />
                    <span style={{
                      position: "absolute", bottom: 12, left: 12,
                      fontFamily: F.mono, fontSize: 10, fontWeight: 500,
                      letterSpacing: "0.2em", color: C.white,
                      background: "rgba(26,23,20,0.55)", backdropFilter: "blur(6px)",
                      padding: "3px 8px",
                    }}>
                      {num}·{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </article>
  );
}

/* ── FAQ Accordion ── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${C.border}` }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", padding: "24px 0", display: "flex",
          justifyContent: "space-between", alignItems: "center", textAlign: "left",
          cursor: "pointer",
        }}
      >
        <span style={{
          fontFamily: F.body, fontSize: 14, fontWeight: 400,
          color: C.text,
        }}>{q}</span>
        <span style={{
          fontFamily: F.display, fontSize: 20, color: C.accent,
          fontWeight: 500,
          transform: open ? "rotate(45deg)" : "none",
          transition: `transform ${timing.fast}`,
          flexShrink: 0, marginLeft: 16,
        }}>+</span>
      </button>
      <div style={{
        maxHeight: open ? 200 : 0, overflow: "hidden",
        transition: `max-height ${timing.normal} ease`,
      }}>
        <p style={{
          fontFamily: F.body, fontSize: 13, lineHeight: 2,
          color: C.textMuted, paddingBottom: 24,
        }}>
          {a}
        </p>
      </div>
    </div>
  );
}
