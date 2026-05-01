import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
  "food-beverage":  "/yamaneya_1642.jpg",
  marketing:        "/yamaneya_1229.JPG",
  branding:         "/251206-098.jpg",
};

/* ── INTRO (session-once) ── */
function Intro({ onComplete }) {
  const ref = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    if (sessionStorage.getItem("oblige-intro")) { onComplete(); return; }
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("oblige-intro", "1");
        document.body.style.overflow = "";
        onComplete();
      },
    });

    gsap.set(logoRef.current, { scale: 0.8, opacity: 0 });
    tl.to(logoRef.current, { scale: 1, opacity: 1, duration: 0.8, ease: "power2.out" }, 0.3);
    tl.to({}, { duration: 0.6 });
    tl.to(ref.current, { yPercent: -100, duration: 0.7, ease: "power3.inOut" });

    return () => tl.kill();
  }, []);

  return (
    <div ref={ref} style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: C.white,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div ref={logoRef} style={{ opacity: 0, textAlign: "center" }}>
        <img src="/logo.svg" alt="oblige!" style={{ height: 48 }} />
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

/* ── HERO — all CSS transitions, no GSAP ── */
/* ═══════ HERO — editorial split with pulsing target video ═══════ */
function HeroSection({ loaded }) {
  const { t } = useLang();
  const h = t.hero;
  const [hit, setHit] = useState(false);

  useEffect(() => {
    if (!loaded) return;
    const tm = setTimeout(() => setHit(true), 300);
    return () => clearTimeout(tm);
  }, [loaded]);

  // Split headline lines so the accent character (e.g. "的") can be colored
  const renderHeadlineLine = (line, accent) => {
    if (!accent || !line.includes(accent)) return line;
    const idx = line.indexOf(accent);
    return (
      <>
        <span style={{ color: C.accent }}>{accent}</span>
        {line.slice(idx + accent.length)}
      </>
    );
  };

  const renderBubble = (text, accent) => {
    if (!accent || !text.includes(accent)) return text;
    const parts = text.split(accent);
    return (
      <>
        {parts[0]}
        <span style={{ color: C.accent, fontWeight: 700 }}>{accent}</span>
        {parts.slice(1).join(accent)}
      </>
    );
  };

  return (
    <section style={{
      background: C.bg,
      paddingTop: "clamp(120px, 14vw, 180px)",
      paddingBottom: 0,
      position: "relative",
      overflow: "hidden",
    }}>
      <div className="container">
        <div className="hero-split">
          {/* ── LEFT ── */}
          <div style={{
            opacity: hit ? 1 : 0,
            transform: `translateY(${hit ? 0 : 24}px)`,
            transition: `opacity 0.9s ease 0.1s, transform 0.9s ${timing.easeOut} 0.1s`,
          }}>
            {/* Headline */}
            <h1 style={{
              fontFamily: "'Noto Sans JP', 'Montserrat', sans-serif",
              fontSize: "clamp(48px, 6.5vw, 96px)",
              fontWeight: 900,
              color: C.text,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              marginBottom: 18,
            }}>
              <span style={{ display: "block" }}>
                {renderHeadlineLine(h.headlineLine1, h.headlineAccent)}
              </span>
              <span style={{ display: "block" }}>
                {h.headlineLine2}
              </span>
            </h1>

            {/* Accent rule + Precision tagline */}
            <div style={{
              display: "flex", alignItems: "center", gap: 12,
              marginBottom: 24,
            }}>
              <span style={{
                width: 28, height: 2, background: C.accent, display: "inline-block",
              }} />
              <span style={{
                fontFamily: F.heading,
                fontSize: "clamp(15px, 1.3vw, 19px)",
                fontWeight: 500, color: C.text, letterSpacing: "0.04em",
              }}>
                <span style={{ color: C.accent, fontWeight: 600 }}>{h.precisionEn}</span>
                {"  "}{h.precisionTail}
              </span>
            </div>

            {/* Description */}
            <p style={{
              fontFamily: F.body,
              fontSize: "clamp(13px, 1vw, 15px)",
              lineHeight: 2.1,
              color: C.textMuted,
              whiteSpace: "pre-line",
              marginBottom: 40,
              maxWidth: 480,
            }}>
              {h.description}
            </p>

            {/* Icon cards */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 0,
              marginBottom: 36,
              maxWidth: 540,
            }}>
              {h.cards.map((card, i) => (
                <div key={i} style={{
                  padding: "0 14px 0 0",
                  borderLeft: i === 0 ? "none" : `1px solid ${C.border}`,
                  paddingLeft: i === 0 ? 0 : 14,
                }}>
                  <div style={{
                    width: 28, height: 28, marginBottom: 10,
                    color: C.accent,
                  }}>
                    <HeroCardIcon variant={i} />
                  </div>
                  <div style={{
                    fontFamily: F.body, fontSize: 12, fontWeight: 600,
                    color: C.text, marginBottom: 4,
                  }}>{card.label}</div>
                  <div style={{
                    fontFamily: F.body, fontSize: 10, lineHeight: 1.6,
                    color: C.textMuted, whiteSpace: "pre-line",
                  }}>{card.desc}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
              <Link to="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: 14,
                background: C.accent, color: C.white,
                fontFamily: F.label, fontSize: 12, fontWeight: 500,
                letterSpacing: 3, textTransform: "uppercase",
                padding: "16px 28px",
                transition: `all ${timing.fast} ${timing.easeOut}`,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = C.accentDark; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.accent; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {h.ctaPrimary}
                <span style={{ fontSize: 16, lineHeight: 1 }}>→</span>
              </Link>

              <a href="#business" onClick={(e) => {
                e.preventDefault();
                document.getElementById("business")?.scrollIntoView({ behavior: "smooth" });
              }} style={{
                display: "inline-flex", alignItems: "center", gap: 12,
                fontFamily: F.label, fontSize: 12, fontWeight: 500,
                letterSpacing: 3, textTransform: "uppercase", color: C.text,
                transition: `color ${timing.fast}`,
              }}
              onMouseEnter={e => { e.currentTarget.style.color = C.accent; }}
              onMouseLeave={e => { e.currentTarget.style.color = C.text; }}
              >
                {h.ctaSecondary}
                <span style={{ fontSize: 16, lineHeight: 1 }}>→</span>
              </a>
            </div>
          </div>

          {/* ── RIGHT — illustration collage ── */}
          <div className="hero-illustration" style={{
            position: "relative",
            aspectRatio: "1 / 1",
            opacity: hit ? 1 : 0,
            transform: `scale(${hit ? 1 : 0.96})`,
            transition: `opacity 1s ease 0.3s, transform 1s ${timing.easeOut} 0.3s`,
          }}>
            <HeroIllustration bubble={h.bubble} bubbleAccent={h.bubbleAccent} renderBubble={renderBubble} vertical={h.vertical} />
          </div>
        </div>

        {/* ── BOTTOM STATS BAR ── */}
        <div style={{
          marginTop: "clamp(40px, 5vw, 64px)",
          paddingTop: 28, paddingBottom: 28,
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "clamp(16px, 3vw, 48px)",
          alignItems: "center",
          opacity: hit ? 1 : 0,
          transform: `translateY(${hit ? 0 : 16}px)`,
          transition: `opacity 0.9s ease 0.6s, transform 0.9s ${timing.easeOut} 0.6s`,
        }} className="hero-stats">
          {h.stats.map((s, i) => (
            <div key={i} style={{
              borderRight: i < h.stats.length - 1 ? `1px solid ${C.border}` : "none",
              paddingRight: i < h.stats.length - 1 ? "clamp(8px, 2vw, 24px)" : 0,
            }}>
              <div style={{
                fontFamily: F.display, fontSize: "clamp(28px, 3.4vw, 44px)",
                fontWeight: 700, color: C.text, lineHeight: 1,
                marginBottom: 6,
              }}>
                {s.num}<span style={{ color: C.accent, fontSize: "0.6em" }}>{s.suffix}</span>
              </div>
              <div style={{
                fontFamily: F.label, fontSize: 10, fontWeight: 500,
                letterSpacing: 2, color: C.textMuted, textTransform: "uppercase",
                marginBottom: 4,
              }}>{s.label}</div>
              <div style={{
                fontFamily: F.body, fontSize: 11, color: C.textMuted, lineHeight: 1.5,
              }}>{s.subLabel}</div>
            </div>
          ))}
          {/* Final tagline cell */}
          <div>
            <div style={{
              fontFamily: F.heading, fontSize: "clamp(14px, 1.4vw, 18px)",
              fontWeight: 700, color: C.text, letterSpacing: "0.04em",
              marginBottom: 6,
            }}>{h.tagline}</div>
            <div style={{
              fontFamily: F.body, fontSize: 12, color: C.textMuted,
            }}>{h.taglineSub}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── HERO ICON CARDS — minimal line icons ── */
function HeroCardIcon({ variant }) {
  const stroke = "currentColor";
  const sw = 1.5;
  if (variant === 0) return ( // 新規出店 — target with arrow
    <svg viewBox="0 0 28 28" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="14" r="10" />
      <circle cx="14" cy="14" r="5" />
      <line x1="22" y1="6" x2="14" y2="14" />
      <polygon points="20,4 22,6 24,8" fill={stroke} />
    </svg>
  );
  if (variant === 1) return ( // リニューアル — refresh arrows
    <svg viewBox="0 0 28 28" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 14a8 8 0 1 1-3-6.2" />
      <polyline points="22,4 22,9 17,9" />
      <path d="M6 14a8 8 0 0 1 3 6.2" transform="rotate(180 14 14)" />
    </svg>
  );
  if (variant === 2) return ( // 多店舗展開 — stacked squares
    <svg viewBox="0 0 28 28" fill="none" stroke={stroke} strokeWidth={sw} strokeLinejoin="round">
      <rect x="4" y="4" width="14" height="14" rx="1" />
      <rect x="10" y="10" width="14" height="14" rx="1" />
    </svg>
  );
  // 許認可対応 — shield with check
  return (
    <svg viewBox="0 0 28 28" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3 L24 7 V14 C24 19 19.5 23.5 14 25 C8.5 23.5 4 19 4 14 V7 Z" />
      <polyline points="9,14 13,18 19,11" />
    </svg>
  );
}

/* ── HERO ILLUSTRATION — playful editorial collage with pulsing video ── */
function HeroIllustration({ bubble, bubbleAccent, renderBubble, vertical }) {
  const dark = C.text;
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Soft cream backdrop */}
      <div style={{
        position: "absolute",
        left: "6%", top: "10%",
        width: "30%", aspectRatio: "1 / 1",
        borderRadius: "50%",
        background: `radial-gradient(circle, ${C.bgAlt} 0%, ${C.bg} 70%)`,
        opacity: 0.7,
      }} />

      {/* ═══ TARGET RINGS ═══ */}
      <svg viewBox="0 0 600 600" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        {/* Outermost dashed ring (slow rotate) */}
        <g className="hero-ring-rotate" style={{ transformBox: "fill-box", transformOrigin: "300px 300px" }}>
          <circle cx="300" cy="300" r="278" fill="none" stroke={C.accent} strokeWidth="1.2" strokeDasharray="2 6" opacity="0.4" />
        </g>

        {/* Counter-rotating sparkle path */}
        <g className="hero-ring-rotate-rev" style={{ transformBox: "fill-box", transformOrigin: "300px 300px" }}>
          <circle cx="300" cy="300" r="262" fill="none" stroke={C.accent} strokeWidth="0.8" strokeDasharray="0.5 14" opacity="0.5" />
        </g>

        {/* Outer solid ring (pulse) */}
        <g className="hero-outer-pulse" style={{ transformBox: "fill-box", transformOrigin: "300px 300px" }}>
          <circle cx="300" cy="300" r="240" fill="none" stroke={C.accent} strokeWidth="2" opacity="0.85" />
        </g>

        {/* Mid solid orange arc (the chunky one from mockup) */}
        <circle cx="300" cy="300" r="200" fill="none" stroke={C.accent} strokeWidth="40" strokeDasharray="380 600" strokeDashoffset="-50" opacity="0.92" />

        {/* Inner ring break + accent rim */}
        <circle cx="300" cy="300" r="160" fill="none" stroke={C.bg} strokeWidth="10" />
        <circle cx="300" cy="300" r="155" fill="none" stroke={C.accent} strokeWidth="2" />

        {/* Hand-drawn squiggles, scribbles, doodles around the scene */}
        <g className="hero-scribble">
          {/* Top-right scribble lines */}
          <path d="M 540 80 q 12 -6 24 0 q 12 6 24 0" fill="none" stroke={dark} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 540 100 q 12 -6 24 0 q 12 6 24 0" fill="none" stroke={dark} strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Left-side zigzag (lightning shape from mockup) */}
        <path d="M 80 230 l 18 26 l -10 4 l 22 32 l -12 5 l 24 30" fill="none" stroke={dark} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

        {/* Bottom-left curl */}
        <path d="M 60 480 q 16 -10 28 -2 q -10 14 0 22 q 18 -2 24 -16" fill="none" stroke={dark} strokeWidth="1.5" strokeLinecap="round" />

        {/* Diamond accents */}
        <g className="hero-sparkle" style={{ transformBox: "fill-box", transformOrigin: "490px 540px" }}>
          <polygon points="490,530 498,540 490,550 482,540" fill={C.accent} />
        </g>
        <g className="hero-sparkle" style={{ transformBox: "fill-box", transformOrigin: "120px 100px", animationDelay: "1s" }}>
          <polygon points="120,93 127,100 120,107 113,100" fill={C.accent} opacity="0.85" />
        </g>

        {/* Mini dot cluster bottom-center */}
        <circle cx="280" cy="560" r="3" fill={dark} />
        <circle cx="295" cy="555" r="2.2" fill={dark} opacity="0.6" />
        <circle cx="305" cy="568" r="2.6" fill={dark} opacity="0.8" />

        {/* Sparkle stars */}
        <g className="hero-sparkle" style={{ transformBox: "fill-box", transformOrigin: "560px 280px", animationDelay: "0.5s" }}>
          <path d="M 560 270 L 562 278 L 570 280 L 562 282 L 560 290 L 558 282 L 550 280 L 558 278 Z" fill={C.accent} opacity="0.9" />
        </g>

        {/* Halftone-style city silhouette (bottom right) */}
        <g opacity="0.88">
          <defs>
            <pattern id="halftone" patternUnits="userSpaceOnUse" width="6" height="6">
              <circle cx="3" cy="3" r="0.9" fill={dark} />
            </pattern>
          </defs>
          <path d="M 420 580
                   L 420 540 L 438 540 L 438 520 L 458 520 L 458 500 L 472 500 L 472 470 L 490 470 L 490 510 L 510 510 L 510 490 L 525 490 L 525 470 L 542 470 L 542 460 L 555 460 L 555 510 L 568 510 L 568 540 L 580 540 L 580 580 Z"
                fill="url(#halftone)" />
          {/* Small sun behind city */}
          <circle cx="540" cy="500" r="34" fill={C.accent} opacity="0.85" />
          <path d="M 420 580
                   L 420 540 L 438 540 L 438 520 L 458 520 L 458 500 L 472 500 L 472 470 L 490 470 L 490 510 L 510 510 L 510 490 L 525 490 L 525 470 L 542 470 L 542 460 L 555 460 L 555 510 L 568 510 L 568 540 L 580 540 L 580 580 Z"
                fill="url(#halftone)" />
        </g>
      </svg>

      {/* ═══ CHARACTER 1 — Person with telescope (top-left, looking in) ═══ */}
      <img
        src="/hero-char-telescope.png"
        alt=""
        className="hero-character"
        style={{
          position: "absolute", left: "2%", top: "12%",
          width: "26%", height: "auto",
          animationDelay: "0s",
          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.06))",
        }}
      />

      {/* ═══ CENTER — pulsing video bullseye ═══ */}
      <div style={{
        position: "absolute",
        left: "50%", top: "50%",
        transform: "translate(-50%, -50%)",
        width: "44%", aspectRatio: "1 / 1",
        borderRadius: "50%",
        overflow: "hidden",
        border: `4px solid ${C.bg}`,
        boxShadow: `0 0 0 3px ${C.accent}, 0 12px 40px rgba(0,0,0,0.18)`,
      }}>
        <video
          autoPlay muted loop playsInline
          className="hero-video-pulse"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          src="/hero-video.mp4"
        />
        <div style={{
          position: "absolute", left: "50%", top: "50%",
          transform: "translate(-50%, -50%)",
          width: 18, height: 18, borderRadius: "50%",
          background: C.accent,
          boxShadow: `0 0 14px rgba(255,90,0,0.6)`,
        }} />
      </div>

      {/* ═══ DART (wobbling) ═══ */}
      <svg viewBox="0 0 200 200" className="hero-dart" style={{
        position: "absolute",
        right: "-4%", top: "6%",
        width: "55%",
        filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.18))",
      }}>
        <line x1="40" y1="160" x2="115" y2="85" stroke={dark} strokeWidth="6" strokeLinecap="round" />
        <polygon points="32,168 42,158 52,160 42,170" fill={dark} />
        <polygon points="115,85 145,55 155,65 125,95" fill={C.accent} />
        <polygon points="125,95 155,65 165,75 135,105" fill={dark} />
        <polygon points="135,105 165,75 175,85 145,115" fill={C.accent} />
        <text x="148" y="70" fill={C.bg} fontSize="9" fontFamily="Barlow Semi Condensed" fontWeight="700" transform="rotate(-45 148 70)">
          oblige
        </text>
        {/* Tiny impact lines */}
        <path d="M 50 155 l 8 -8 M 60 162 l 6 -6 M 36 152 l -8 -8" fill="none" stroke={C.accent} strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      {/* ═══ SPEECH BUBBLE (bobbing) ═══ */}
      <div className="hero-bubble" style={{
        position: "absolute",
        right: "0%", top: "30%",
        background: C.bg,
        border: `1.8px solid ${C.text}`,
        borderRadius: "50% / 58%",
        padding: "18px 22px",
        fontFamily: F.body,
        fontSize: "clamp(11px, 1vw, 14px)",
        fontWeight: 500,
        color: C.text,
        lineHeight: 1.5,
        whiteSpace: "pre-line",
        textAlign: "center",
        boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
        zIndex: 4,
      }}>
        {renderBubble(bubble, bubbleAccent)}
        <div style={{
          position: "absolute",
          left: "-13px", bottom: "28%",
          width: 0, height: 0,
          borderTop: "9px solid transparent",
          borderBottom: "9px solid transparent",
          borderRight: `13px solid ${C.text}`,
        }} />
        <div style={{
          position: "absolute",
          left: "-10px", bottom: "28%",
          width: 0, height: 0,
          borderTop: "9px solid transparent",
          borderBottom: "9px solid transparent",
          borderRight: `13px solid ${C.bg}`,
        }} />
      </div>

      {/* ═══ CHARACTER 2 — Person sitting with wine (bottom-center) ═══ */}
      <img
        src="/hero-char-wine.png"
        alt=""
        className="hero-character"
        style={{
          position: "absolute", left: "32%", bottom: "4%",
          width: "18%", height: "auto",
          animationDelay: "1.2s",
          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.06))",
        }}
      />

      {/* ═══ CHARACTER 3 — Person on ladder pointing (right) ═══ */}
      <img
        src="/hero-char-ladder.png"
        alt=""
        className="hero-character"
        style={{
          position: "absolute", right: "4%", bottom: "8%",
          width: "20%", height: "auto",
          animationDelay: "0.6s",
          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.06))",
        }}
      />

      {/* ═══ Vertical OBLIGE INC. ═══ */}
      <div style={{
        position: "absolute",
        right: "-6px", bottom: "4%",
        fontFamily: F.label, fontSize: 9,
        letterSpacing: 4, color: C.textMuted,
        textTransform: "uppercase",
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
      }}>{vertical}</div>

      {/* ═══ Floating accent circles ═══ */}
      <div className="hero-float-1" style={{
        position: "absolute", right: "20%", bottom: "32%",
        width: 28, height: 28, borderRadius: "50%",
        background: C.accent, opacity: 0.85,
      }} />
      <div className="hero-float-2" style={{
        position: "absolute", left: "30%", bottom: "20%",
        width: 12, height: 12, borderRadius: "50%",
        background: C.accent, opacity: 0.7,
      }} />
      <div className="hero-float-1" style={{
        position: "absolute", left: "12%", bottom: "30%",
        width: 8, height: 8, borderRadius: "50%",
        background: dark, opacity: 0.55,
        animationDelay: "1.5s",
      }} />

      {/* Hand-drawn arrow scribble pointing at the dart */}
      <svg style={{
        position: "absolute",
        right: "30%", top: "10%",
        width: "12%",
        pointerEvents: "none",
      }} viewBox="0 0 80 50">
        <path d="M 8 40 Q 30 8 60 18" fill="none" stroke={C.text} strokeWidth="1.5" strokeLinecap="round" />
        <polygon points="60,18 56,12 54,22" fill={C.text} />
      </svg>

      {/* Grain noise texture */}
      <div className="hero-grain" />
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
    <section style={{
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
      onClick={(e) => {
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
    <section style={{ padding: spacing.sectionPadding + " 0" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <SectionHead en={t.philosophy.sectionEn} ja={t.philosophy.sectionJa} align="center" />

        {/* 3 icons */}
        <div className="philosophy-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: "clamp(16px, 2vw, 32px)",
          maxWidth: 900, margin: "0 auto",
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
          maxWidth: 900, margin: "0 auto",
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
        <div style={{ marginTop: active ? 32 : 48, transition: "margin 0.4s ease" }}>
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
  const [hovered, setHovered] = useState(false);

  return (
    <Link to="/contact" style={{ display: "block", textDecoration: "none" }}>
    <section
      id="contact"
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
        {/* Left — text */}
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
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke={C.white} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="8" y1="40" x2="40" y2="8" />
              <polyline points="20,8 40,8 40,28" />
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
    </Link>
  );
}

/* ═══════ TOP PAGE ═══════ */
export default function TopPage() {
  const { t } = useLang();
  const [loaded, setLoaded] = useState(false);
  const [introDone, setIntroDone] = useState(() => !!sessionStorage.getItem("oblige-intro"));

  useEffect(() => {
    if (introDone) setTimeout(() => setLoaded(true), 100);
  }, [introDone]);

  const fadeIn = (delay = 0) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(24px)",
    transition: `all 1s ${timing.easeOut} ${delay}s`,
  });

  return (
    <div>
      {!introDone && <Intro onComplete={() => setIntroDone(true)} />}

      {/* ═══════ HERO ═══════ */}
      <HeroSection loaded={loaded} />

      {/* ═══════ MARQUEE TICKER ═══════ */}
      <MarqueeBand />

      {/* ═══════ PHILOSOPHY — icons first ═══════ */}
      <PhilosophySection />

      {/* ═══════ BUSINESS — bento grid ═══════ */}
      <section id="business" style={{ padding: spacing.sectionPadding + " 0" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 clamp(24px, 4vw, 64px)" }}>
          <SectionHead en={t.business.sectionEn} ja={t.business.sectionJa} mb={20} />

          {(() => {
            const d = divisions;
            /* shared hover helper — capsule color change only */
            const hoverCapsule = {
              onMouseEnter: e => {
                const cap = e.currentTarget.querySelector('.capsule');
                if (cap) { cap.style.background = C.accent; cap.style.color = C.white; cap.style.borderColor = C.accent; }
                const img = e.currentTarget.querySelector('.bi');
                if (img) img.style.transform = "scale(1.04)";
              },
              onMouseLeave: e => {
                const cap = e.currentTarget.querySelector('.capsule');
                if (cap) { cap.style.background = ""; cap.style.color = ""; cap.style.borderColor = ""; }
                const img = e.currentTarget.querySelector('.bi');
                if (img) img.style.transform = "scale(1)";
              },
            };
            /* capsule on dark overlay */
            const hoverCapsuleDark = {
              onMouseEnter: e => {
                const cap = e.currentTarget.querySelector('.capsule');
                if (cap) { cap.style.background = C.accent; cap.style.color = C.white; cap.style.borderColor = C.accent; }
                const img = e.currentTarget.querySelector('.bi');
                if (img) img.style.transform = "scale(1.04)";
              },
              onMouseLeave: e => {
                const cap = e.currentTarget.querySelector('.capsule');
                if (cap) { cap.style.background = "rgba(255,255,255,0.08)"; cap.style.color = "rgba(255,255,255,0.6)"; cap.style.borderColor = "transparent"; }
                const img = e.currentTarget.querySelector('.bi');
                if (img) img.style.transform = "scale(1)";
              },
            };

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

                {/* ── D: 飲食 — padded card ── */}
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
                          width: "100%", height: "100%", objectFit: "cover",
                        }} />
                        <div className="card-illust" style={{
                          position: "absolute", inset: 0, overflow: "hidden",
                          pointerEvents: "none", background: C.accent,
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <svg width="70" height="70" viewBox="0 0 200 200" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M50 50 L80 100 L80 160" /><path d="M110 50 L80 100" />
                            <line x1="65" y1="160" x2="95" y2="160" /><line x1="45" y1="50" x2="115" y2="50" />
                            <circle cx="95" cy="75" r="6" />
                            <ellipse cx="150" cy="145" rx="35" ry="10" />
                            <line x1="135" y1="80" x2="135" y2="130" /><line x1="130" y1="80" x2="130" y2="100" /><line x1="140" y1="80" x2="140" y2="100" />
                            <path d="M130 100 Q135 108 140 100" />
                          </svg>
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
