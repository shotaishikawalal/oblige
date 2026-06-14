import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { C, F, fontSize, spacing, timing } from "../styles/design-tokens";
import { divisions } from "../data/divisions";
import { Reveal } from "../components/ui/Reveal";
import { useLang } from "../i18n/LanguageContext";

/* ═══════════════════════════════════════════════════════
   oblige! — Top Page (White-first + Photo-driven)
   Brand philosophy: 的を射る + ! = precision × surprise
   ═══════════════════════════════════════════════════════ */

/* Photos for divisions (251206=ラウンジ, yamaneya=バー) */
const divisionPhotos = {
  construction:     "/251206-029.jpg",
  "real-estate":    "/251206-051.jpg",
  "interior-design":"/251206-003.jpg",
  "food-beverage":  "/taiho-seika-package.png",
  marketing:        "/yamaneya_1229.JPG",
  branding:         "/251206-098.jpg",
};

/* ── INTRO (session-once, with safety fallback) ── */
function Intro({ onComplete }) {
  const ref = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    if (sessionStorage.getItem("oblige-intro")) {
      document.body.style.overflow = "";
      onComplete();
      return;
    }
    document.body.style.overflow = "hidden";

    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      try {
        sessionStorage.setItem("oblige-intro", "1");
      } catch {
        // Some privacy modes can block sessionStorage.
      }
      document.body.style.overflow = "";
      onComplete();
    };

    // Safety net — guarantee finish after 3.5s no matter what GSAP does
    const safety = setTimeout(finish, 3500);

    let tl;
    try {
      tl = gsap.timeline({ onComplete: finish });
      gsap.set(logoRef.current, { scale: 0.8, opacity: 0 });
      tl.to(logoRef.current, { scale: 1, opacity: 1, duration: 0.8, ease: "power2.out" }, 0.3);
      tl.to({}, { duration: 0.6 });
      tl.to(ref.current, { yPercent: -100, duration: 0.7, ease: "power3.inOut" });
    } catch {
      // GSAP failed to load or run — finish immediately
      finish();
    }

    return () => {
      clearTimeout(safety);
      if (tl) tl.kill();
      // Always restore overflow on unmount, even if mid-animation
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div ref={ref} style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: C.bg,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div ref={logoRef} style={{ opacity: 0, textAlign: "center" }}>
        <img src="/logo.svg" alt="oblige!" style={{ width: 168, height: "auto" }} />
      </div>
    </div>
  );
}

/* ── SECTION LABEL ── */
function SectionHead({ en, ja, align = "left", light = false, mb = 48 }) {
  const justifyMap = { left: "flex-start", center: "center", right: "flex-end" };
  return (
    <Reveal>
      <div style={{
        display: "flex", alignItems: "baseline", gap: 16,
        marginBottom: mb,
        justifyContent: justifyMap[align] || "flex-start",
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

/* ── RED LINE DIVIDER ── */
function RedLine({ width = "40px", style: s }) {
  return (
    <Reveal>
      <div style={{ width, height: 2, background: C.accent, ...s }} />
    </Reveal>
  );
}

/* ── HERO — editorial visual first view ── */
function HeroSection({ loaded }) {
  const { t } = useLang();
  const h = t.hero;
  const [hit, setHit] = useState(false);

  useEffect(() => {
    if (!loaded) return;
    const tm = setTimeout(() => setHit(true), 300);
    return () => clearTimeout(tm);
  }, [loaded]);

  // Split headline lines so a key phrase can be colored.
  const renderHeadlineLine = (line, accent) => {
    if (!accent || !line.includes(accent)) return line;
    const idx = line.indexOf(accent);
    return (
      <>
        {line.slice(0, idx)}
        <span style={{ color: C.accent }}>{accent}</span>
        {line.slice(idx + accent.length)}
      </>
    );
  };

  return (
    <section className="home-hero" style={{
      minHeight: "100svh",
      background: C.bg,
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      color: C.text,
    }}>
      <div className="hero-grain" aria-hidden="true" />

      <div className="home-hero-inner" style={{
        position: "relative",
        zIndex: 1,
        width: "100%",
        maxWidth: 1720,
        margin: "0 auto",
        padding: "clamp(92px, 8vw, 118px) clamp(24px, 3.5vw, 56px) 24px",
        flex: 1,
        display: "grid",
        gridTemplateColumns: "minmax(0, 0.88fr) minmax(520px, 0.95fr)",
        gap: "clamp(28px, 5vw, 82px)",
        alignItems: "center",
      }}>
        <div className="home-hero-copy" style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 820,
          opacity: hit ? 1 : 0,
          transform: `translateY(${hit ? 0 : 28}px)`,
          transition: `opacity 0.9s ease 0.1s, transform 0.9s ${timing.easeOut} 0.1s`,
        }}>
          <p className="home-hero-description" style={{
            fontFamily: F.label,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 5,
            color: C.accent,
            textTransform: "uppercase",
            marginBottom: 22,
          }}>
            {h.title}
          </p>

          <h1 style={{
            fontFamily: "'Hiragino Mincho ProN', 'Yu Mincho', 'YuMincho', 'Noto Serif JP', serif",
            fontSize: "clamp(43px, 5.8vw, 88px)",
            fontWeight: 700,
            color: C.text,
            lineHeight: 1.15,
            letterSpacing: "0.04em",
            fontFeatureSettings: '"palt" 0',
            marginBottom: 20,
          }}>
            <span style={{ display: "block" }}>
              {renderHeadlineLine(h.headlineLine1, h.headlineAccent)}
            </span>
            <span style={{ display: "block" }}>
              {renderHeadlineLine(h.headlineLine2, h.headlineAccent)}
            </span>
          </h1>

          <p style={{
            fontFamily: F.heading,
            fontSize: "clamp(13px, 1.3vw, 18px)",
            fontWeight: 600,
            letterSpacing: "0.12em",
            color: C.text,
            textTransform: "uppercase",
            marginBottom: 18,
          }}>
            {h.sub}
          </p>

          <p style={{
            fontFamily: F.body,
            fontSize: "clamp(13px, 1.15vw, 16px)",
            lineHeight: 2,
            color: C.textMuted,
            whiteSpace: "pre-line",
            marginBottom: 28,
            maxWidth: 640,
          }}>
            {h.description}
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            <a href="#business" onClick={(e) => {
              e.preventDefault();
              document.getElementById("business")?.scrollIntoView({ behavior: "smooth" });
            }} style={{
              display: "inline-flex", alignItems: "center", gap: 14,
              background: C.accent, color: C.white,
              fontFamily: F.label, fontSize: 12, fontWeight: 600,
              letterSpacing: 3, textTransform: "uppercase",
              padding: "16px 28px",
              transition: `all ${timing.fast} ${timing.easeOut}`,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = C.accentDark; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = C.accent; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              {h.ctaPrimary}
              <span style={{ fontSize: 16, lineHeight: 1 }}>→</span>
            </a>

            <Link to="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              fontFamily: F.label, fontSize: 12, fontWeight: 600,
              letterSpacing: 3, textTransform: "uppercase",
              color: C.text,
              borderBottom: `1px solid ${C.border}`,
              paddingBottom: 4,
              transition: `all ${timing.fast}`,
            }}
            onMouseEnter={e => { e.currentTarget.style.color = C.accent; e.currentTarget.style.borderColor = C.accent; }}
            onMouseLeave={e => { e.currentTarget.style.color = C.text; e.currentTarget.style.borderColor = C.border; }}
            >
              {h.ctaSecondary}
              <span style={{ fontSize: 16, lineHeight: 1 }}>→</span>
            </Link>
          </div>
        </div>

        <HeroEditorialVisual hit={hit} />
      </div>

      <div className="home-hero-business" style={{
        position: "relative",
        zIndex: 2,
        borderTop: `1px solid ${C.border}`,
        background: "rgba(255,255,255,0.66)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}>
        <div style={{
          maxWidth: 1720,
          margin: "0 auto",
          padding: "0 clamp(24px, 3.5vw, 56px)",
          display: "grid",
          gridTemplateColumns: "minmax(240px, 360px) 1fr",
        }} className="home-hero-business-inner">
          <div style={{
            padding: "22px 28px 22px 0",
            borderRight: `1px solid ${C.border}`,
          }}>
            <p style={{
              fontFamily: F.heading,
              fontSize: "clamp(13px, 1.2vw, 16px)",
              fontWeight: 700,
              color: C.text,
              letterSpacing: "0.06em",
              marginBottom: 6,
            }}>{h.tagline}</p>
            <p style={{
              fontFamily: F.body,
              fontSize: 11,
              color: C.textMuted,
              lineHeight: 1.7,
            }}>{h.taglineSub}</p>
          </div>

          <div className="home-hero-business-links" style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
          }}>
            {divisions.map((div, i) => (
              <Link
                key={div.id}
                to={div.path}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 4,
                  minHeight: 96,
                  padding: "18px clamp(12px, 1.6vw, 22px)",
                  borderRight: i === divisions.length - 1 ? "none" : `1px solid ${C.border}`,
                  transition: `background ${timing.fast}, color ${timing.fast}`,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = C.accentSoft; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
              >
                <span style={{
                  fontFamily: F.mono,
                  fontSize: 10,
                  color: C.accent,
                  letterSpacing: "0.18em",
                }}>0{i + 1}</span>
                <span style={{
                  fontFamily: F.heading,
                  fontSize: "clamp(10px, 0.85vw, 12px)",
                  fontWeight: 700,
                  color: C.text,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  lineHeight: 1.3,
                }}>{div.nameEn}</span>
                <span style={{
                  fontFamily: F.body,
                  fontSize: 10,
                  color: C.textMuted,
                  lineHeight: 1.3,
                }}>{t.divisions[div.id]?.nameJa || div.nameJa}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   HERO — GUNZE-style (Case A) — radial editorial poster
   Activated via ?style=gunze
   ═══════════════════════════════════════════════════════ */
function HeroSectionGunze({ loaded }) {
  const { t } = useLang();
  const h = t.hero;
  const [hit, setHit] = useState(false);
  const [dartHit, setDartHit] = useState(false);
  const [noteShown, setNoteShown] = useState(false);
  const dartRef = useRef(null);

  useEffect(() => {
    if (!loaded) return;
    const tm = setTimeout(() => setHit(true), 300);
    return () => clearTimeout(tm);
  }, [loaded]);

  // Orbit text — repeated tile so circle path fills evenly (localized)
  const g = h.gunze || {};
  const tile = g.orbitTile || "OBLIGE · NIGHT TIME PRODUCTION · ";
  const hidden = g.hiddenMessage || "You found it.";
  // Insert hidden message only on 3rd repetition
  const orbitText = tile.repeat(3) + tile.slice(0, -3) + hidden + " · ";

  // Dart animation: when user hovers/taps the period (。)
  const handlePeriodHover = (e) => {
    if (!dartRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setDartHit(true);
    setNoteShown(true);
    dartRef.current.style.left = rect.left + "px";
    dartRef.current.style.top = rect.top - 20 + "px";
    gsap.to(dartRef.current, {
      left: `${rect.left + 4}px`,
      top: `${rect.top + 4}px`,
      opacity: 1,
      duration: 0.4,
      ease: "back.out",
      onComplete: () => {
        setTimeout(() => {
          gsap.to(dartRef.current, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => setDartHit(false),
          });
        }, 600);
      },
    });
  };

  // The three brand verbs are fixed English (design tokens), destinations differ.
  const pillNav = [
    { label: "FIND", dest: "#philosophy" },
    { label: "AIM",  dest: "#business" },
    { label: "HIT",  dest: "/contact" },
  ];

  // 6 business mini-characters scattered around the central headline
  const biz = [
    { num: "01", key: "build",  en: "BUILD",  ja: "建設",     src: "/hero-char-build.png" },
    { num: "02", key: "find",   en: "FIND",   ja: "不動産",   src: "/hero-char-find.png" },
    { num: "03", key: "design", en: "DESIGN", ja: "内装",     src: "/hero-char-design.png" },
    { num: "04", key: "serve",  en: "SERVE",  ja: "飲食",     src: "/hero-char-serve.png" },
    { num: "05", key: "reach",  en: "REACH",  ja: "マーケ",   src: "/hero-char-reach.png" },
    { num: "06", key: "shape",  en: "SHAPE",  ja: "ブランド", src: "/hero-char-shape.png" },
  ];

  // Desktop and mobile coordinates for the 6 business characters on the inner ring.
  const bizPositions = [
    { top: "17%", left: "29%", mobileTop: "19%", mobileLeft: "25%" },
    { top: "18%", left: "63%", mobileTop: "19%", mobileLeft: "75%" },
    { top: "43%", left: "80%", mobileTop: "43%", mobileLeft: "91%" },
    { top: "72%", left: "68%", mobileTop: "76%", mobileLeft: "75%" },
    { top: "73%", left: "27%", mobileTop: "76%", mobileLeft: "25%" },
    { top: "44%", left: "13%", mobileTop: "43%", mobileLeft: "9%" },
  ];

  return (
    <section className="home-hero-gunze" style={{
      minHeight: "100svh",
      background: C.bg,
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      color: C.text,
    }}>
      <div className="hero-grain" aria-hidden="true" />

      {/* ── Stage (the radial composition) ── */}
      <div className="hero-gunze-stage" style={{
        position: "relative",
        flex: 1,
        width: "100%",
        maxWidth: 1720,
        margin: "0 auto",
        padding: "clamp(72px, 7vw, 120px) clamp(24px, 4vw, 64px) clamp(80px, 6vw, 120px)",
      }}>

        {/* ── Double circular orbit text (slow rotate) ── */}
        <div style={{
          position: "absolute",
          left: "50%", top: "50%",
          width: "min(98vmin, 960px)",
          height: "min(98vmin, 960px)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          opacity: hit ? 1 : 0,
          zIndex: 1,
          transition: `opacity 1.4s ease 0.2s`,
        }}>
          <svg viewBox="0 0 1000 1000" className="hero-gunze-orbit hero-gunze-orbit-outer" style={{ width: "100%", height: "100%" }}>
            <defs>
              <path id="gunze-circle-outer" d="M 500 500 m -460 0 a 460 460 0 1 1 920 0 a 460 460 0 1 1 -920 0" />
            </defs>
            <text fill={C.accent} fontFamily="'Montserrat', 'Noto Sans JP', sans-serif"
                  fontSize="32" fontWeight="700" letterSpacing="2" opacity="0.30">
              <textPath href="#gunze-circle-outer" startOffset="0">{orbitText}</textPath>
            </text>
          </svg>

          <svg viewBox="0 0 1000 1000" className="hero-gunze-orbit hero-gunze-orbit-inner" style={{
            position: "absolute",
            inset: "12%",
            width: "76%",
            height: "76%",
          }}>
            <defs>
              <path id="gunze-circle-inner" d="M 500 500 m -452 0 a 452 452 0 1 1 904 0 a 452 452 0 1 1 -904 0" />
            </defs>
            <text fill={C.text} fontFamily="'Montserrat', 'Noto Sans JP', sans-serif"
                  fontSize="27" fontWeight="700" letterSpacing="2.6" opacity="0.18">
              <textPath href="#gunze-circle-inner" startOffset="14%">{orbitText}</textPath>
            </text>
          </svg>
        </div>

        {/* ── Inner dotted ring for depth ── */}
        <svg viewBox="0 0 1000 1000" style={{
          position: "absolute", left: "50%", top: "50%",
          width: "min(72vmin, 700px)", height: "min(72vmin, 700px)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          opacity: hit ? 0.14 : 0,
          zIndex: 1,
          transition: `opacity 1.2s ease 0.5s`,
        }}>
          <circle cx="500" cy="500" r="490" fill="none" stroke={C.text}
                  strokeWidth="2" strokeDasharray="1 8" />
        </svg>

        {/* ── 6 business characters (decorative) ── */}
        {biz.map((b, i) => (
          <div
            key={b.num}
            className={`hero-gunze-biz-character hero-gunze-biz-character-${b.key}`}
            aria-hidden="true"
            style={{
              "--hero-char-left": bizPositions[i].left,
              "--hero-char-top": bizPositions[i].top,
              "--hero-char-mobile-left": bizPositions[i].mobileLeft,
              "--hero-char-mobile-top": bizPositions[i].mobileTop,
              opacity: hit ? 1 : 0,
              transform: `translate(-50%, -50%) translateY(${hit ? 0 : 14}px) rotate(${i % 2 === 0 ? -4 : 4}deg) scale(${hit ? 1 : 0.76})`,
              transition: `opacity 0.7s ease ${0.62 + i * 0.08}s, transform 0.8s ${timing.easeBounce} ${0.62 + i * 0.08}s`,
            }}
          >
            <img src={b.src} alt="" loading="eager" decoding="async" />
          </div>
        ))}

        {/* ── Giant hands (GUNZE-style props) ── */}
        <img
          src="/hero-hand-left.png" alt="" aria-hidden="true"
          className="hero-gunze-hand hero-gunze-hand-left"
          style={{
            opacity: hit ? 1 : 0,
            transition: `opacity 0.9s ease 0.9s, transform 1s ${timing.easeOut} 0.9s`,
          }}
        />
        <img
          src="/hero-hand-right.png" alt="" aria-hidden="true"
          className="hero-gunze-hand hero-gunze-hand-right"
          style={{
            opacity: hit ? 1 : 0,
            transition: `opacity 0.9s ease 1.05s, transform 1s ${timing.easeOut} 1.05s`,
          }}
        />

        {/* ── Central producer figure (bottom-center, reading the plans) ── */}
        <img
          src="/hero-main-producer.png" alt="" aria-hidden="true"
          className="hero-gunze-producer"
          style={{
            opacity: hit ? 1 : 0,
            transition: `opacity 0.9s ease 0.75s, transform 0.9s ${timing.easeBounce} 0.75s`,
          }}
        />

        {/* ── Center headline ── */}
        <div style={{
          position: "absolute", left: "50%", top: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 7,
          opacity: hit ? 1 : 0,
          transition: `opacity 0.9s ease 0.4s, transform 0.9s ${timing.easeOut} 0.4s`,
        }}>
          <p style={{
            fontFamily: F.label, fontSize: "clamp(10px, 1vw, 13px)",
            fontWeight: 700, letterSpacing: 5,
            color: C.accent, textTransform: "uppercase",
            marginBottom: 10,
          }}>{h.title}</p>
          <h1 style={{
            fontFamily: "'Hiragino Mincho ProN', 'Yu Mincho', 'YuMincho', 'Noto Serif JP', serif",
            fontSize: "clamp(42px, 8.2vw, 142px)",
            fontWeight: 900,
            color: C.text,
            lineHeight: 1,
            letterSpacing: 0,
            fontFeatureSettings: '"palt" 1',
            whiteSpace: "nowrap",
            textShadow: "0 4px 20px rgba(242,236,228,0.85)",
          }}>
            {g.headlinePre}<span style={{ color: C.accent }}>{g.headlineAccent}</span>
            <span
              onMouseEnter={handlePeriodHover}
              onClick={handlePeriodHover}
              style={{
                cursor: "pointer",
                position: "relative",
                display: "inline-block",
              }}
            >
              {g.headlinePost}
              {noteShown && (
                <span className="hero-gunze-period-note" aria-hidden="true">
                  {g.dartNote}
                </span>
              )}
            </span>
          </h1>
          <p style={{
            fontFamily: F.body, fontSize: "clamp(11px, 1.05vw, 14px)",
            color: C.textMuted, marginTop: 14,
            letterSpacing: "0.04em",
          }}>{h.taglineSub}</p>
        </div>

      </div>

      {/* ── Bottom: FIND / AIM / HIT 3-button strip ── */}
      <div style={{
        position: "relative",
        zIndex: 6,
        display: "flex", justifyContent: "center", alignItems: "center", gap: "clamp(8px, 1.5vw, 24px)",
        paddingBottom: "clamp(32px, 4vw, 56px)",
        opacity: hit ? 1 : 0,
        transform: `translateY(${hit ? 0 : 14}px)`,
        transition: `all 0.9s ${timing.easeOut} 1.1s`,
      }}>
        {pillNav.map((p, i) => {
          const subLabel = h.stats?.[i]?.subLabel || "";
          const pillStyle = {
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "12px 22px",
            background: i === 1 ? C.accent : "transparent",
            color: i === 1 ? C.white : C.text,
            border: `1.5px solid ${i === 1 ? C.accent : C.text}`,
            borderRadius: 999,
            fontFamily: F.label, fontSize: 11, fontWeight: 700,
            letterSpacing: 2.5, textTransform: "uppercase",
            transition: `all ${timing.fast}`,
          };
          const hoverOn = e => {
            e.currentTarget.style.background = C.accent;
            e.currentTarget.style.color = C.white;
            e.currentTarget.style.borderColor = C.accent;
          };
          const hoverOff = e => {
            e.currentTarget.style.background = i === 1 ? C.accent : "transparent";
            e.currentTarget.style.color = i === 1 ? C.white : C.text;
            e.currentTarget.style.borderColor = i === 1 ? C.accent : C.text;
          };
          const inner = (
            <>
              <span style={{ fontFamily: F.body, fontSize: 10, opacity: 0.7 }}>0{i + 1}</span>
              {p.label}
            </>
          );
          return p.dest.startsWith("#") ? (
            <a key={p.label} href={p.dest} title={subLabel} onClick={(e) => {
              e.preventDefault();
              document.getElementById(p.dest.slice(1))?.scrollIntoView({ behavior: "smooth" });
            }} style={pillStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
              {inner}
            </a>
          ) : (
            <Link key={p.label} to={p.dest} title={subLabel}
              style={pillStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
              {inner}
            </Link>
          );
        })}
      </div>

      {/* ── Dart SVG (appears on period hover) ── */}
      <div
        ref={dartRef}
        style={{
          position: "fixed",
          width: 24,
          height: 24,
          opacity: 0,
          pointerEvents: "none",
          zIndex: 999,
        }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" fill="none">
          <line x1="12" y1="2" x2="12" y2="16" stroke={C.accent} strokeWidth="2.5" strokeLinecap="round" />
          <polygon points="12,18 10,13 14,13" fill={C.accent} />
          <circle cx="12" cy="3" r="1.5" fill={C.accent} opacity="0.6" />
        </svg>
      </div>
    </section>
  );
}

function HeroEditorialVisual({ hit }) {
  return (
    <div className="home-hero-visual home-hero-editorial-visual" style={{
      position: "relative",
      alignSelf: "center",
      justifySelf: "end",
      width: "min(53vw, 780px)",
      minHeight: "clamp(520px, 43vw, 690px)",
      opacity: hit ? 1 : 0,
      transform: `translateY(${hit ? 0 : 20}px) scale(${hit ? 1 : 0.96})`,
      transition: `opacity 0.9s ease 0.45s, transform 1s ${timing.easeOut} 0.45s`,
    }}>
      <div className="hero-editorial-frame" aria-hidden="true">
        <img
          className="hero-editorial-image"
          src="/hero-oblige-editorial-aim-crop.png"
          alt=""
          loading="eager"
          decoding="async"
        />
        <span className="hero-editorial-scan hero-editorial-scan-a" />
        <span className="hero-editorial-scan hero-editorial-scan-b" />
      </div>
    </div>
  );
}

/* ── MARQUEE TICKER BAND ── */
function MarqueeBand() {
  const text = "Creating the Night. Defining the Scene.";
  const dot = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";
  // Each copy needs enough repetitions to fill the viewport
  const single = Array(8).fill(text).join(dot) + dot;

  const spanStyle = {
    fontFamily: F.heading,
    fontSize: "clamp(44px, 6vw, 84px)",
    fontWeight: 700,
    color: "#BEB5A6",
    letterSpacing: "0.05em",
    whiteSpace: "nowrap",
    userSelect: "none",
    lineHeight: 1,
    display: "inline-block",
  };

  return (
    <section className="marquee-band" style={{
      background: C.bg,
      padding: "clamp(18px, 2.5vw, 32px) 0",
      overflow: "hidden",
      position: "relative",
    }}>
      <div className="marquee-track">
        <span style={spanStyle}>{single}</span>
        <span style={spanStyle}>{single}</span>
      </div>
    </section>
  );
}

/* ── PHILOSOPHY ICON — hover-animated, clickable ── */
function PhilosophyIcon({ id, label, sub, desc, active, onClick, onHoverEnter, onHoverLeave, delay = 0 }) {
  const [hovered, setHovered] = useState(false);
  const touchedRef = useRef(false);
  const size = 80;

  const iconSvg = {
    target: (
      <svg width={size} height={size} viewBox="-10 -10 100 100" fill="none" style={{ overflow: "visible" }}>
        {/* outer ring */}
        <circle cx="40" cy="40" r="32" stroke={C.accent} strokeWidth="1.5"
          className={hovered ? "" : "target-outer"}
          style={hovered ? {
            animation: "none",
            transform: "scale(1)",
            transformOrigin: "center",
            transition: "transform 0.3s ease",
          } : {}}
        />
        {/* inner ring */}
        <circle cx="40" cy="40" r="18" stroke={C.accent} strokeWidth="1.5"
          className={hovered ? "" : "target-inner"}
          style={hovered ? {
            animation: "none",
            transform: "scale(1)",
            transformOrigin: "center",
            transition: "transform 0.3s ease",
          } : {}}
        />
        {/* center dot — becomes impact flash on hover */}
        <circle cx="40" cy="40" r="4" fill={C.accent}
          className={hovered ? "target-hit-dot" : "target-dot"}
          style={hovered ? {
            animation: "none",
          } : {}}
        />
        {/* arrow — flies in from top-left and hits center on hover */}
        <g style={{
          transform: hovered ? "translate(0px, 0px)" : "translate(-30px, -30px)",
          opacity: hovered ? 1 : 0,
          transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
        }}>
          {/* arrow shaft */}
          <line x1="15" y1="15" x2="36" y2="36" stroke={C.accent} strokeWidth="2" strokeLinecap="round" />
          {/* arrowhead */}
          <polygon points="38,34 40,40 34,38" fill={C.accent} />
        </g>
        {/* impact ripple ring 1 */}
        <circle cx="40" cy="40" r="10" stroke={C.accent} strokeWidth="1"
          style={{
            opacity: hovered ? 0 : 0,
            transform: hovered ? "scale(3)" : "scale(0.5)",
            transformOrigin: "center",
            transition: "all 0.6s ease 0.2s",
            ...(hovered ? { animation: "targetRipple 0.6s ease-out 0.15s forwards" } : {}),
          }}
        />
        {/* impact ripple ring 2 */}
        <circle cx="40" cy="40" r="10" stroke={C.accent} strokeWidth="0.5"
          style={{
            opacity: hovered ? 0 : 0,
            transform: hovered ? "scale(4)" : "scale(0.5)",
            transformOrigin: "center",
            transition: "all 0.8s ease 0.3s",
            ...(hovered ? { animation: "targetRipple 0.7s ease-out 0.25s forwards" } : {}),
          }}
        />
      </svg>
    ),
    surprise: (
      <svg width={size} height={size} viewBox="-10 -10 100 100" fill="none" style={{ overflow: "visible" }}>
        {/* stem */}
        <rect x="37" y="14" width="6" height="36" rx="3" fill={C.accent}
          style={{
            transform: hovered ? "scaleY(1.2) translateY(-8px)" : "scaleY(1)",
            transformOrigin: "center bottom",
            transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        />
        {/* dot — bounces on hover */}
        <circle cx="40" cy="62" r="4.5" fill={C.accent}
          style={{
            transform: hovered ? "scale(2) translateY(4px)" : "scale(1)",
            transformOrigin: "center",
            transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.1s",
          }}
        />
        {/* spark lines on hover */}
        {hovered && [[-12, -6], [12, -6], [-8, 6], [8, 6]].map(([dx, dy], i) => (
          <line key={i}
            x1={40 + dx * 0.5} y1={62 + dy * 0.5}
            x2={40 + dx} y2={62 + dy}
            stroke={C.accent} strokeWidth="1.5" strokeLinecap="round"
            style={{
              opacity: 0.7,
              transform: `scale(${hovered ? 1 : 0})`,
              transformOrigin: "center",
              transition: `all 0.3s ease ${0.1 + i * 0.05}s`,
            }}
          />
        ))}
      </svg>
    ),
    loop: (
      <svg width={size} height={size} viewBox="-10 -10 100 100" fill="none" style={{ overflow: "visible" }}>
        {/* circular arrow path — idle: spin, hover: fast spin */}
        <path d="M40 16 A24 24 0 1 1 20 28" stroke={C.accent} strokeWidth="1.5" strokeLinecap="round" fill="none"
          className={hovered ? "loop-hover" : "loop-path"}
          style={{ transformOrigin: "40px 40px" }}
        />
        {/* arrowhead */}
        <polygon points="14,24 22,30 20,20" fill={C.accent}
          className={hovered ? "loop-hover" : "loop-arrow"}
          style={{ transformOrigin: "40px 40px" }}
        />
      </svg>
    ),
  };

  const isActive = active || hovered;

  return (
    <div
      className="philosophy-card"
      style={{
        textAlign: "center", cursor: "pointer",
        padding: "24px 16px",
        borderBottom: active ? `2px solid ${C.accent}` : "2px solid transparent",
        transition: "border-color 0.3s ease",
      }}
      onMouseEnter={() => { setHovered(true); onHoverEnter && onHoverEnter(); }}
      onMouseLeave={() => { setHovered(false); onHoverLeave && onHoverLeave(); }}
      onTouchStart={() => { touchedRef.current = true; }}
      onTouchEnd={(e) => {
        if (touchedRef.current) {
          e.preventDefault();
          setHovered(true);
          onClick && onClick();
          setTimeout(() => { setHovered(false); }, 1500);
          touchedRef.current = false;
        }
      }}
      onClick={() => {
        if (!touchedRef.current) { onClick && onClick(); }
      }}
    >
      <div className="philosophy-icon" style={{
        marginBottom: 24, display: "flex", justifyContent: "center",
        animationDelay: `${delay}s`,
      }}>
        {iconSvg[id]}
      </div>
      <div style={{
        fontFamily: F.heading, fontSize: "clamp(16px, 1.6vw, 20px)", fontWeight: 600,
        color: isActive ? C.accent : C.text, marginBottom: 6, letterSpacing: "-0.01em",
        transition: "color 0.3s ease",
      }}>{label}</div>
      <div style={{
        fontFamily: F.label, fontSize: 10,
        color: C.textDim, letterSpacing: 3, textTransform: "uppercase",
        marginBottom: 16,
      }}>{sub}</div>
      <p style={{
        fontFamily: F.body, fontSize: 12, lineHeight: 2,
        color: C.textMuted, whiteSpace: "pre-line",
      }}>{desc}</p>
    </div>
  );
}

/* ── PHILOSOPHY SECTION — clickable icons with expand panel ── */
const philosophyImages = {
  target: "/251206-029.jpg",
  surprise: "/251206-003.jpg",
  loop: "/251206-098.jpg",
};
function getPhilosophyItems(t) {
  return ["target", "surprise", "loop"].map(id => ({
    id,
    label: t.philosophy[id].label,
    sub: t.philosophy[id].sub,
    desc: t.philosophy[id].desc,
    detail: t.philosophy[id].detail,
    image: philosophyImages[id],
  }));
}

function PhilosophySection() {
  const { t } = useLang();
  const [activeIdx, setActiveIdx] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const items = getPhilosophyItems(t);
  const active = activeIdx !== null ? items[activeIdx] : null;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="philosophy" style={{ padding: spacing.sectionPadding + " 0" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <SectionHead en={t.philosophy.sectionEn} ja={t.philosophy.sectionJa} align="center" />

        {/* 3 icons */}
        <div className="philosophy-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: "clamp(16px, 2vw, 32px)",
          maxWidth: 1120, margin: "0 auto",
          overflow: "visible",
        }}>
          {items.map((v, i) => (
            <Reveal key={i} delay={0.1 + i * 0.1}>
              <PhilosophyIcon
                {...v}
                active={activeIdx === i}
                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                onHoverEnter={isMobile ? undefined : () => setActiveIdx(i)}
                onHoverLeave={isMobile ? undefined : () => setActiveIdx(null)}
                delay={i * 0.4}
              />
            </Reveal>
          ))}
        </div>

        {/* Expand panel */}
        <div style={{
          maxHeight: active ? (isMobile ? 1200 : 400) : 0,
          opacity: active ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease",
          maxWidth: 1120, margin: "0 auto",
        }}>
          {active && (
            <div className="grid-2col" style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: "clamp(32px, 4vw, 56px)",
              textAlign: "left",
              padding: "48px 0 16px",
            }}>
              {/* Image */}
              <div style={{
                overflow: "hidden", aspectRatio: "4 / 3",
              }}>
                <img
                  src={active.image}
                  alt={active.label}
                  style={{
                    width: "100%", height: "100%", objectFit: "cover",
                  }}
                />
              </div>

              {/* Text */}
              <div style={{
                display: "flex", flexDirection: "column", justifyContent: "center",
              }}>
                <span style={{
                  display: "inline-block", alignSelf: "flex-start",
                  fontFamily: F.label, fontSize: 10, letterSpacing: 3,
                  color: C.accent, textTransform: "uppercase",
                  marginBottom: 12,
                }}>{active.sub}</span>
                <h3 style={{
                  fontFamily: F.heading, fontSize: "clamp(20px, 2vw, 28px)",
                  fontWeight: 600, color: C.text, lineHeight: 1.4,
                  marginBottom: 20,
                }}>{active.label}</h3>
                <p style={{
                  fontFamily: F.body, fontSize: "clamp(13px, 1vw, 15px)",
                  lineHeight: 2.2, color: C.textMuted, letterSpacing: "0.02em",
                }}>{active.detail}</p>
              </div>
            </div>
          )}
        </div>

        {/* Tagline — sub */}
        <div className="philosophy-tagline" style={{ marginTop: active ? 32 : 48, transition: "margin 0.4s ease" }}>
          <Reveal delay={0.4}>
            <p style={{
              fontFamily: F.heading, fontSize: "clamp(18px, 2.2vw, 28px)",
              fontWeight: 500, color: C.textMuted, lineHeight: 1.8,
            }}>
              {(() => {
                const parts = t.philosophy.tagline.split("!");
                return (
                  <>
                    {parts[0]}
                    <span style={{ color: C.accent, fontWeight: 600 }}>!</span>
                    {parts.slice(1).join("!")}
                  </>
                );
              })()}
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <p style={{
              fontFamily: F.body, fontSize: fontSize.small,
              lineHeight: 2.2, color: C.textDim, maxWidth: 480, margin: "20px auto 0",
              whiteSpace: "pre-line",
            }}>
              {t.philosophy.taglineSub}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── CONTACT CTA — hive-inspired hover color shift ── */
function ContactCTA() {
  const { t } = useLang();
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const ctaText = hovered ? C.white : C.text;
  const ctaBody = hovered ? "rgba(255,255,255,0.72)" : C.textMuted;
  const ctaBorder = hovered ? "rgba(255,255,255,0.38)" : "rgba(17,17,17,0.28)";

  // The whole section acts as a link, but it contains real <a> children
  // (mailto / Instagram) — nesting <a> in <a> is invalid HTML, so the wrapper
  // is a div with link semantics instead.
  return (
    <section
      id="contact"
      role="link"
      tabIndex={0}
      aria-label={t.contact.heading}
      onClick={() => navigate("/contact")}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); navigate("/contact"); }
      }}
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
        {/* Left — text */}
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
              whiteSpace: "pre-line",
              transition: "color 0.5s ease",
            }}>
              {t.contact.desc}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ display: "flex", gap: 20, marginTop: 32, flexWrap: "wrap" }}>
              <a href="mailto:info@oblige.jp" onClick={e => e.stopPropagation()} style={{
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
              <a href="https://www.instagram.com/oblige.co.ltd/" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontFamily: F.label, fontSize: 11, fontWeight: 500,
                letterSpacing: 3, textTransform: "uppercase",
                color: ctaText, borderBottom: `1px solid ${ctaBorder}`,
                paddingBottom: 4, transition: `border-color ${timing.fast}`,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = hovered ? C.white : C.accent; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = ctaBorder; }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
                Instagram
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right — arrow icon */}
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

/* ═══════ TOP PAGE ═══════ */
export default function TopPage() {
  const { t } = useLang();
  const [loaded, setLoaded] = useState(false);
  const [introDone, setIntroDone] = useState(() => !!sessionStorage.getItem("oblige-intro"));

  // GUNZE-style radial poster is the default hero.
  // Fall back to the classic editorial split via ?style=classic.
  const useClassic = typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("style") === "classic";
  const useGunze = !useClassic;

  useEffect(() => {
    if (introDone) setTimeout(() => setLoaded(true), 100);
  }, [introDone]);

  return (
    <div>
      {!introDone && <Intro onComplete={() => setIntroDone(true)} />}

      {/* ═══════ HERO ═══════ */}
      {useGunze
        ? <HeroSectionGunze loaded={loaded} />
        : <HeroSection loaded={loaded} />}

      {/* ═══════ MARQUEE TICKER ═══════ */}
      <MarqueeBand />

      {/* ═══════ PHILOSOPHY — icons first ═══════ */}
      <PhilosophySection />

      {/* ═══════ BUSINESS — bento grid ═══════ */}
      <section id="business" style={{ padding: spacing.sectionPadding + " 0" }}>
        <div style={{ maxWidth: 1560, margin: "0 auto", padding: "0 clamp(24px, 3vw, 48px)" }}>
          <SectionHead en={t.business.sectionEn} ja={t.business.sectionJa} mb={20} />

          {(() => {
            const d = divisions;

            return (
              <div className="bento-grid" style={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                gridAutoRows: "clamp(180px, 22vw, 280px)",
                gap: 5,
              }}>

                {/* ── A: 不動産 — large photo overlay (left, 2 rows) ── */}
                <Reveal style={{ gridColumn: "1 / 8", gridRow: "1 / 3" }}>
                  <Link to={d[1].path} style={{ display: "block", height: "100%", textDecoration: "none" }}>
                    <div className="card-hover" style={{
                      position: "relative", overflow: "hidden", height: "100%",
                      cursor: "pointer",
                    }}>
                      <img className="card-photo" src={divisionPhotos[d[1].id]} alt="" style={{
                        width: "100%", height: "100%", objectFit: "cover",
                      }} />
                      {/* Orange slide-up overlay */}
                      <div className="card-slide-overlay">
                        {/* Illustration inside overlay */}
                        <div className="card-illust" style={{
                          position: "absolute", inset: 0, overflow: "hidden",
                          display: "flex", alignItems: "flex-start", justifyContent: "center",
                          paddingTop: "2%",
                          background: C.accent,
                        }}>
                          <img src="/illust-realestate.jpg" alt="" style={{
                            width: "65%", maxHeight: "62%", objectFit: "contain",
                            filter: "invert(1)", mixBlendMode: "screen",
                          }} />
                        </div>
                      </div>
                      <div className="grad-overlay" style={{
                        position: "absolute", inset: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 45%)",
                        transition: `opacity 0.5s ${timing.easeOut}`,
                      }} />
                      <div style={{
                        position: "absolute", bottom: 0, left: 0, right: 0,
                        padding: "clamp(28px, 3vw, 44px)",
                        display: "flex", alignItems: "flex-end", justifyContent: "space-between",
                        zIndex: 2,
                      }}>
                        <div>
                          <span className="card-capsule-light" style={{
                            display: "inline-block", fontFamily: F.body, fontSize: 11,
                            color: "rgba(255,255,255,0.6)",
                            background: "rgba(255,255,255,0.08)", backdropFilter: "blur(6px)",
                            padding: "5px 16px", marginBottom: 18, borderRadius: 20,
                            transition: "all 0.3s ease",
                          }}>{t.divisions[d[1].id].nameJa}</span>
                          <h3 style={{
                            fontFamily: F.heading, fontSize: "clamp(28px, 3.5vw, 44px)",
                            fontWeight: 600, color: C.white, lineHeight: 1.15,
                            letterSpacing: "0.04em", textTransform: "uppercase",
                          }}>{d[1].nameEn}</h3>
                        </div>
                        <div style={{
                          width: 44, height: 44, borderRadius: "50%",
                          border: "1px solid rgba(255,255,255,0.3)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0,
                        }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.white} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="4" y1="20" x2="20" y2="4" /><polyline points="10,4 20,4 20,14" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>

                {/* ── B: インテリア設計 — hover→orange + illustration ── */}
                <Reveal delay={0.06} style={{ gridColumn: "8 / 13", gridRow: "1 / 2" }}>
                  <Link to={d[2].path} style={{ display: "block", height: "100%", textDecoration: "none" }}>
                    <div className="card-hover" style={{
                      height: "100%", background: C.white,
                      padding: "clamp(16px, 1.5vw, 24px)", cursor: "pointer",
                      display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(16px, 1.5vw, 24px)",
                      position: "relative", overflow: "hidden",
                    }}>
                      {/* Orange slide-up overlay */}
                      <div className="card-slide-overlay" />
                      <div style={{ overflow: "hidden", position: "relative", zIndex: 2 }}>
                        <img className="card-photo" src={divisionPhotos[d[2].id]} alt="" style={{
                          width: "100%", height: "100%", objectFit: "cover",
                        }} />
                        {/* Illustration overlay — white drawing on orange bg */}
                        <div className="card-illust" style={{
                          position: "absolute", inset: 0, overflow: "hidden",
                          pointerEvents: "none", background: C.accent,
                        }}>
                          <img src="/illust-interior.jpg" alt="" style={{
                            position: "absolute", top: "-20%", left: "50%",
                            transform: "translateX(-50%) scaleX(-1)",
                            width: "300%", height: "auto",
                            filter: "invert(1)", mixBlendMode: "screen",
                          }} />
                        </div>
                      </div>
                      <div style={{
                        display: "flex", flexDirection: "column", justifyContent: "center",
                        position: "relative", zIndex: 2,
                      }}>
                        <span className="card-capsule-light" style={{
                          display: "inline-block", alignSelf: "flex-start",
                          fontFamily: F.body, fontSize: 10,
                          color: C.textMuted, border: `1px solid ${C.border}`,
                          padding: "4px 14px", borderRadius: 20, marginBottom: 14,
                          transition: "all 0.3s ease",
                        }}>{t.divisions[d[2].id].nameJa}</span>
                        <h3 className="card-title-dark" style={{
                          fontFamily: F.heading, fontSize: "clamp(17px, 1.8vw, 24px)",
                          fontWeight: 600, color: C.text, lineHeight: 1.3,
                          letterSpacing: "0.03em", textTransform: "uppercase",
                          transition: "color 0.3s ease",
                        }}>{d[2].nameEn}</h3>
                      </div>
                    </div>
                  </Link>
                </Reveal>

                {/* ── C: 建設 — padded card ── */}
                <Reveal delay={0.1} style={{ gridColumn: "8 / 10", gridRow: "2 / 3" }}>
                  <Link to={d[0].path} style={{ display: "block", height: "100%", textDecoration: "none" }}>
                    <div className="card-hover" style={{
                      height: "100%", background: C.white,
                      padding: "clamp(12px, 1.2vw, 18px)", cursor: "pointer",
                      display: "flex", flexDirection: "column", gap: 12,
                      position: "relative", overflow: "hidden",
                    }}>
                      <div className="card-slide-overlay" />
                      <div style={{ flex: 1, overflow: "hidden", position: "relative", zIndex: 2 }}>
                        <img className="card-photo" src={divisionPhotos[d[0].id]} alt="" style={{
                          width: "100%", height: "100%", objectFit: "cover",
                        }} />
                        <div className="card-illust" style={{
                          position: "absolute", inset: 0, overflow: "hidden",
                          pointerEvents: "none", background: C.accent,
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <svg width="70" height="70" viewBox="0 0 200 200" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M60 90 Q60 60 100 55 Q140 60 140 90" />
                            <rect x="50" y="90" width="100" height="12" rx="3" />
                            <rect x="75" y="110" width="50" height="70" />
                            <line x1="88" y1="120" x2="88" y2="130" /><line x1="100" y1="120" x2="100" y2="130" /><line x1="112" y1="120" x2="112" y2="130" />
                            <line x1="88" y1="140" x2="88" y2="150" /><line x1="100" y1="140" x2="100" y2="150" /><line x1="112" y1="140" x2="112" y2="150" />
                            <rect x="92" y="160" width="16" height="20" />
                            <line x1="155" y1="180" x2="155" y2="40" /><line x1="155" y1="40" x2="180" y2="40" /><line x1="180" y1="40" x2="180" y2="55" /><line x1="155" y1="40" x2="130" y2="50" />
                          </svg>
                        </div>
                      </div>
                      <div style={{ position: "relative", zIndex: 2 }}>
                        <span className="card-capsule-light" style={{
                          display: "inline-block", fontFamily: F.body, fontSize: 9,
                          color: C.textMuted, border: `1px solid ${C.border}`,
                          padding: "3px 12px", borderRadius: 20, marginBottom: 8,
                          transition: "all 0.3s ease",
                        }}>{t.divisions[d[0].id].nameJa}</span>
                        <h3 className="card-title-dark" style={{
                          fontFamily: F.heading, fontSize: "clamp(14px, 1.5vw, 19px)",
                          fontWeight: 600, color: C.text, lineHeight: 1.3,
                          letterSpacing: "0.02em", textTransform: "uppercase",
                          transition: "color 0.3s ease",
                        }}>{d[0].nameEn}</h3>
                      </div>
                    </div>
                  </Link>
                </Reveal>

                {/* ── D: 飲食 — TAIHO SEIKA launch card ── */}
                <Reveal delay={0.13} style={{ gridColumn: "10 / 13", gridRow: "2 / 3" }}>
                  <Link to={d[3].path} style={{ display: "block", height: "100%", textDecoration: "none" }}>
                    <div className="card-hover" style={{
                      height: "100%", background: C.white,
                      padding: "clamp(12px, 1.2vw, 18px)", cursor: "pointer",
                      display: "flex", flexDirection: "column", gap: 12,
                      position: "relative", overflow: "hidden",
                    }}>
                      <div className="card-slide-overlay" />
                      <div style={{ flex: 1, overflow: "hidden", position: "relative", zIndex: 2 }}>
                        <img className="card-photo" src={divisionPhotos[d[3].id]} alt="" style={{
                          width: "100%", height: "100%", objectFit: "contain",
                          background: "#F7F2EA",
                          padding: "clamp(8px, 1vw, 16px)",
                        }} />
                        <span style={{
                          position: "absolute",
                          left: 10,
                          top: 10,
                          fontFamily: F.mono,
                          fontSize: 9,
                          fontWeight: 600,
                          letterSpacing: "0.16em",
                          color: "#245D38",
                          background: "rgba(247,242,234,0.86)",
                          padding: "4px 8px",
                        }}>
                          1968 GREEN
                        </span>
                        <div className="card-illust" style={{
                          position: "absolute", inset: 0, overflow: "hidden",
                          pointerEvents: "none", background: C.accent,
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <div style={{
                            textAlign: "center",
                            color: C.white,
                            fontFamily: F.heading,
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            lineHeight: 1.15,
                          }}>
                            <div style={{ fontSize: 18 }}>TAIHO</div>
                            <div style={{ fontSize: 18 }}>SEIKA</div>
                            <div style={{
                              width: 34,
                              height: 1,
                              background: "rgba(255,255,255,0.65)",
                              margin: "10px auto",
                            }} />
                            <div style={{
                              fontFamily: F.body,
                              fontSize: 10,
                              fontWeight: 500,
                              letterSpacing: "0.16em",
                            }}>GREEN SMOOTHIE</div>
                          </div>
                        </div>
                      </div>
                      <div style={{ position: "relative", zIndex: 2 }}>
                        <span className="card-capsule-light" style={{
                          display: "inline-block", fontFamily: F.body, fontSize: 9,
                          color: C.textMuted, border: `1px solid ${C.border}`,
                          padding: "3px 12px", borderRadius: 20, marginBottom: 8,
                          transition: "all 0.3s ease",
                        }}>{t.divisions[d[3].id].nameJa}</span>
                        <h3 className="card-title-dark" style={{
                          fontFamily: F.heading, fontSize: "clamp(14px, 1.5vw, 19px)",
                          fontWeight: 600, color: C.text, lineHeight: 1.3,
                          letterSpacing: "0.02em", textTransform: "uppercase",
                          transition: "color 0.3s ease",
                        }}>{d[3].nameEn}</h3>
                      </div>
                    </div>
                  </Link>
                </Reveal>

                {/* ── E: ブランディング — photo overlay, wide ── */}
                <Reveal delay={0.16} style={{ gridColumn: "1 / 8", gridRow: "3 / 4" }}>
                  <Link to={d[5].path} style={{ display: "block", height: "100%", textDecoration: "none" }}>
                    <div className="card-hover" style={{
                      position: "relative", overflow: "hidden", height: "100%",
                      cursor: "pointer",
                    }}>
                      <img className="card-photo" src={divisionPhotos[d[5].id]} alt="" style={{
                        width: "100%", height: "100%", objectFit: "cover",
                      }} />
                      {/* Orange slide-up overlay with illustration */}
                      <div className="card-slide-overlay" style={{
                        display: "flex", alignItems: "center", justifyContent: "flex-end",
                        paddingRight: "clamp(40px, 6vw, 80px)",
                      }}>
                        <div className="card-illust">
                          <svg width="140" height="140" viewBox="0 0 200 200" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="100,30 140,80 100,170 60,80" />
                            <line x1="60" y1="80" x2="140" y2="80" />
                            <line x1="100" y1="30" x2="80" y2="80" /><line x1="100" y1="30" x2="120" y2="80" />
                            <line x1="80" y1="80" x2="100" y2="170" /><line x1="120" y1="80" x2="100" y2="170" />
                            <line x1="145" y1="40" x2="160" y2="30" /><line x1="155" y1="55" x2="170" y2="50" /><line x1="150" y1="25" x2="158" y2="15" />
                            <line x1="40" y1="45" x2="28" y2="35" /><line x1="35" y1="60" x2="20" y2="55" />
                            <line x1="165" y1="65" x2="165" y2="85" /><line x1="155" y1="75" x2="175" y2="75" />
                          </svg>
                        </div>
                      </div>
                      <div className="grad-overlay" style={{
                        position: "absolute", inset: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)",
                        transition: `opacity 0.5s ${timing.easeOut}`,
                      }} />
                      <div style={{
                        position: "absolute", bottom: 0, left: 0, padding: "clamp(24px, 3vw, 36px)",
                        zIndex: 2,
                      }}>
                        <span className="card-capsule-light" style={{
                          display: "inline-block", fontFamily: F.body, fontSize: 11,
                          color: "rgba(255,255,255,0.6)",
                          background: "rgba(255,255,255,0.08)", backdropFilter: "blur(6px)",
                          padding: "5px 16px", borderRadius: 20, marginBottom: 14,
                          transition: "all 0.3s ease",
                        }}>{t.divisions[d[5].id].nameJa}</span>
                        <h3 style={{
                          fontFamily: F.heading, fontSize: "clamp(20px, 2.4vw, 30px)",
                          fontWeight: 600, color: C.white, lineHeight: 1.2,
                          letterSpacing: "0.04em", textTransform: "uppercase",
                        }}>{d[5].nameEn}</h3>
                      </div>
                    </div>
                  </Link>
                </Reveal>

                {/* ── F: SNS/WEB広告 — dark card with slide-up overlay (bottom-right) ── */}
                <Reveal delay={0.18} style={{ gridColumn: "8 / 13", gridRow: "3 / 4" }}>
                  <Link to={d[4].path} style={{ display: "block", height: "100%", textDecoration: "none" }}>
                    <div className="card-hover" style={{
                      overflow: "hidden", height: "100%",
                      background: C.dark, cursor: "pointer",
                      padding: "clamp(28px, 3vw, 44px)",
                      display: "flex", flexDirection: "column", justifyContent: "space-between",
                      position: "relative",
                    }}>
                      {/* Orange slide-up overlay with illustration */}
                      <div className="card-slide-overlay" style={{
                        display: "flex", alignItems: "center", justifyContent: "flex-end",
                        paddingRight: "clamp(20px, 3vw, 40px)",
                      }}>
                        <div className="card-illust">
                          <svg width="100" height="100" viewBox="0 0 200 200" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.35 }}>
                            <rect x="60" y="20" width="80" height="160" rx="10" />
                            <line x1="85" y1="35" x2="115" y2="35" />
                            <circle cx="100" cy="165" r="5" />
                            <polyline points="75,130 90,105 110,115 135,80" />
                            <polyline points="120,80 135,80 135,95" />
                            <circle cx="45" cy="50" r="12" />
                            <line x1="45" y1="42" x2="45" y2="48" />
                            <line x1="45" y1="52" x2="45" y2="53" />
                            <path d="M150 60 C150 52, 162 52, 162 60 C162 52, 174 52, 174 60 C174 72, 162 80, 162 80 C162 80, 150 72, 150 60Z" />
                            <path d="M35 90 L55 90 L55 110 L45 110 L40 118 L40 110 L35 110Z" />
                          </svg>
                        </div>
                      </div>
                      <div style={{ position: "relative", zIndex: 2 }}>
                        <span className="card-capsule-light" style={{
                          display: "inline-block", fontFamily: F.body, fontSize: 11,
                          color: "rgba(255,255,255,0.45)",
                          background: "rgba(255,255,255,0.08)",
                          padding: "4px 14px", borderRadius: 20,
                          transition: "all 0.3s ease",
                        }}>{t.divisions[d[4].id].nameJa}</span>
                        <h3 style={{
                          fontFamily: F.heading, fontSize: "clamp(20px, 2.4vw, 30px)",
                          fontWeight: 600, color: C.white, lineHeight: 1.2,
                          letterSpacing: "0.04em", textTransform: "uppercase", marginTop: 14,
                        }}>{d[4].nameEn}</h3>
                      </div>
                      <div style={{ display: "flex", justifyContent: "flex-end", position: "relative", zIndex: 2 }}>
                        <div style={{
                          width: 44, height: 44, borderRadius: "50%",
                          border: "1px solid rgba(255,255,255,0.2)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.white} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="4" y1="20" x2="20" y2="4" /><polyline points="10,4 20,4 20,14" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>

              </div>
            );
          })()}
        </div>
      </section>

      {/* ═══════ STRENGTH — hive-inspired alternating layout ═══════ */}
      <section style={{ padding: spacing.sectionPadding + " 0" }}>
        <div className="container">
          <SectionHead en={t.strength.sectionEn} ja={t.strength.sectionJa} />

          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(80px, 10vw, 120px)" }}>
            {t.strength.items.map((s, idx) => ({ ...s, image: ["/251206-017.jpg", "/yamaneya_1255.JPG", "/251206-102.jpg"][idx] })).map((item, i) => (
              <Reveal key={i} delay={0.1}>
                <div className="grid-2col" style={{
                  display: "grid",
                  gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
                  gap: "clamp(40px, 6vw, 80px)",
                  alignItems: "center",
                }}>
                  {/* Image — alternates left/right */}
                  <div style={{ order: i % 2 === 0 ? 0 : 1, overflow: "hidden" }}>
                    <img
                      src={item.image} alt={item.title}
                      style={{
                        width: "100%", height: "100%", objectFit: "cover",
                        aspectRatio: "4 / 3",
                      }}
                    />
                  </div>

                  {/* Text */}
                  <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                    <div style={{
                      fontFamily: F.display, fontSize: "clamp(56px, 7vw, 88px)",
                      fontWeight: 700, color: C.accent, lineHeight: 1, marginBottom: 20,
                      opacity: 0.9,
                    }}>{item.num}</div>
                    <h3 style={{
                      fontFamily: F.heading, fontSize: "clamp(20px, 2vw, 28px)",
                      fontWeight: 600, color: C.text, marginBottom: 20,
                      lineHeight: 1.4, letterSpacing: "0.02em",
                    }}>{item.title}</h3>
                    <p style={{
                      fontFamily: F.body, fontSize: "clamp(13px, 1vw, 15px)",
                      lineHeight: 2.2, color: C.textMuted,
                      letterSpacing: "0.02em",
                    }}>{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ COMPANY (light surface) ═══════ */}
      <section id="company" style={{ padding: spacing.sectionPadding + " 0" }}>
        <div className="container">
          <SectionHead en={t.company.sectionEn} ja={t.company.sectionJa} />

          <Reveal delay={0.2}>
            <div style={{
              display: "grid", gridTemplateColumns: "100px 1fr",
              gap: "16px 32px", fontFamily: F.body, fontSize: 14, lineHeight: 2,
              maxWidth: 600,
            }}>
              {t.company.rows.map(([label, value], i) => (
                <div key={i} style={{ display: "contents" }}>
                  <span style={{ color: C.textDim, fontSize: 12 }}>{label}</span>
                  <span style={{ color: C.text }}>{value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════ CONTACT CTA — hive-inspired color-shift ═══════ */}
      <ContactCTA />
    </div>
  );
}
