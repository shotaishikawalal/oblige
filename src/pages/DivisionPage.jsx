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

  const relatedDivs = (div.related || [])
    .map(rid => divisions.find(d => d.id === rid))
    .filter(Boolean);

  return (
    <div style={{ background: C.bg }}>

      {/* ═══════ HERO (Dark with photo) ═══════ */}
      <section style={{
        height: "70vh", minHeight: 480,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden",
      }}>
        {/* Background photo */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${heroPhotos[div.id] || "/251206-003.jpg"})`,
          backgroundSize: "cover", backgroundPosition: "center",
          filter: "brightness(0.3)",
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
          fontWeight: 700, color: "rgba(255,255,255,0.05)", lineHeight: 1,
          userSelect: "none",
        }}>
          {div.number}
        </span>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          {/* Capsule — Japanese name */}
          <span style={{
            display: "inline-block", fontFamily: F.body, fontSize: 12,
            color: "rgba(255,255,255,0.6)",
            background: "rgba(255,255,255,0.08)", backdropFilter: "blur(6px)",
            padding: "6px 20px", borderRadius: 20, marginBottom: 20,
          }}>{div.nameJa}</span>

          {/* English main title */}
          <h1 style={{
            fontFamily: F.heading, fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 700, color: C.white, marginBottom: 16,
            letterSpacing: "0.04em", textTransform: "uppercase",
          }}>
            {div.nameEn}
          </h1>
          <div style={{ width: 32, height: 2, background: C.accent, margin: "0 auto 20px" }} />
          <p style={{
            fontFamily: F.body, fontSize: fontSize.body,
            color: "rgba(255,255,255,0.6)", lineHeight: 1.8,
          }}>
            {div.tagline}
          </p>
        </div>

      </section>

      {/* ═══════ ANCHOR NAV — hive-inspired ↓ section jump ═══════ */}
      <nav style={{
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
                  {div.description}
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
                  alt={div.nameJa}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════ STRENGTHS (light surface) ═══════ */}
      <section id="sec-strengths" style={{ padding: spacing.sectionPadding + " 0", background: C.bgAlt }}>
        <div className="container">
          <SectionHead en={t.division.sections.strengths.en} ja={t.division.sections.strengths.ja} />
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}>
            {div.strengths.map((s, i) => (
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
            gridTemplateColumns: `repeat(${Math.min(div.process.length, 5)}, 1fr)`,
            gap: 0,
          }}>
            {div.process.map((p, i) => (
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
            {div.faq.map((f, i) => (
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
                          alt={rd.nameJa}
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
                        }}>{rd.nameJa}</h3>
                        <p style={{
                          fontFamily: F.body, fontSize: 12, color: C.textMuted,
                          lineHeight: 1.8,
                        }}>{rd.tagline}</p>
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
      <DivisionCTA divName={div.nameJa} t={t} />
    </div>
  );
}

/* ── CTA — hive-inspired hover color shift ── */
function DivisionCTA({ divName, t }) {
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
            }}>
              {t.division.cta.desc}
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
