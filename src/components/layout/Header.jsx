import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { C, F, timing } from "../../styles/design-tokens";
import { useLang } from "../../i18n/LanguageContext";
import { Wordmark } from "../ui/Wordmark";

const navLinkDefs = [
  { key: "business", path: "/#business", subJa: "事業内容" },
  { key: "about", path: "/about", subJa: "私たちについて" },
  { key: "column", path: "/column", subJa: "知見・コラム" },
  { key: "company", path: "/#company", subJa: "会社情報" },
  { key: "contact", path: "/#contact", subJa: "お問い合わせ" },
];

const langOptions = [
  { code: "ja", label: "JA" },
  { code: "en", label: "EN" },
  { code: "zh", label: "ZH" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isTop = location.pathname === "/";
  const { lang, setLang, t } = useLang();

  const navLinks = navLinkDefs.map(d => ({ label: t.nav[d.key], path: d.path, subJa: d.subJa }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMenuOpen(false));
    return () => cancelAnimationFrame(id);
  }, [location]);

  const handleNavClick = (e, path) => {
    if (path.startsWith("/#") && isTop) {
      e.preventDefault();
      const id = path.replace("/#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Cream-based hero — header always uses dark text on translucent cream
  const headerBg = scrolled ? "rgba(245,243,238,0.92)" : "rgba(245,243,238,0.6)";
  const borderBottom = scrolled ? `1px solid ${C.border}` : "1px solid transparent";
  const navColor = C.textMuted;
  const navHover = C.accent;

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: headerBg,
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom,
        transition: `all ${timing.normal} ease`,
        padding: "0 clamp(24px, 3vw, 48px)",
      }}>
        <div style={{
          maxWidth: 1480, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 72,
        }}>
          {/* Logo + tagline */}
          <Link to="/" aria-label="oblige home" style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <Wordmark size={36} />
            <span className="hide-mobile" style={{
              fontFamily: F.label, fontSize: 9, fontWeight: 500,
              letterSpacing: 2, color: C.textMuted,
              textTransform: "uppercase", lineHeight: 1.4,
              borderLeft: `1px solid ${C.border}`,
              paddingLeft: 16,
            }}>
              WE DESIGN<br/>THE NIGHT.
            </span>
          </Link>

          {/* Desktop Nav — stacked EN + JA */}
          <nav className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {navLinks.map(l => (
              <Link
                key={l.path}
                to={l.path}
                onClick={(e) => handleNavClick(e, l.path)}
                style={{
                  display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 2,
                  textDecoration: "none",
                  transition: `color ${timing.fast}`,
                }}
                onMouseEnter={e => {
                  const en = e.currentTarget.querySelector(".nav-en");
                  if (en) en.style.color = navHover;
                }}
                onMouseLeave={e => {
                  const en = e.currentTarget.querySelector(".nav-en");
                  if (en) en.style.color = C.text;
                }}
              >
                <span className="nav-en" style={{
                  fontFamily: F.label, fontSize: 11, fontWeight: 600,
                  letterSpacing: 3, color: C.text,
                  textTransform: "uppercase",
                  transition: `color ${timing.fast}`,
                }}>{l.label}</span>
                <span style={{
                  fontFamily: F.body, fontSize: 9, fontWeight: 400,
                  color: C.textMuted, lineHeight: 1,
                }}>{l.subJa}</span>
              </Link>
            ))}

            {/* Language Switcher */}
            <div style={{ display: "flex", alignItems: "center", marginLeft: 12 }}>
              {langOptions.map((opt, i) => (
                <span key={opt.code}>
                  {i > 0 && (
                    <span style={{
                      fontFamily: F.label, fontSize: 10, color: navColor,
                      margin: "0 4px", userSelect: "none",
                    }}>/</span>
                  )}
                  <button
                    onClick={() => setLang(opt.code)}
                    style={{
                      fontFamily: F.label, fontSize: 10, fontWeight: 600,
                      letterSpacing: 2,
                      color: lang === opt.code ? C.accent : C.textMuted,
                      cursor: "pointer", padding: 0,
                      transition: `color ${timing.fast}`,
                    }}
                  >
                    {opt.label}
                  </button>
                </span>
              ))}
            </div>
          </nav>

          {/* Mobile Burger */}
          <button
            className="hide-desktop"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ width: 32, height: 32, position: "relative" }}
            aria-label="Menu"
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                position: "absolute", left: 4, width: 24, height: 1.5,
                background: C.text,
                top: menuOpen ? 15 : 10 + i * 5,
                opacity: menuOpen && i === 1 ? 0 : 1,
                transform: menuOpen ? (i === 0 ? "rotate(45deg)" : i === 2 ? "rotate(-45deg)" : "none") : "none",
                transition: `all ${timing.fast} ease`,
              }} />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 99,
          background: "rgba(255,255,255,0.98)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          gap: 32,
        }}>
          {navLinks.map(l => (
            <Link
              key={l.path}
              to={l.path}
              onClick={(e) => { handleNavClick(e, l.path); setMenuOpen(false); }}
              style={{
                fontFamily: F.label, fontSize: 14, fontWeight: 500,
                letterSpacing: 4, color: C.text, textTransform: "uppercase",
              }}
            >
              {l.label}
            </Link>
          ))}

          {/* Mobile Language Switcher */}
          <div style={{ display: "flex", alignItems: "center", marginTop: 16 }}>
            {langOptions.map((opt, i) => (
              <span key={opt.code}>
                {i > 0 && (
                  <span style={{
                    fontFamily: F.label, fontSize: 10, color: C.textMuted,
                    margin: "0 6px", userSelect: "none",
                  }}>/</span>
                )}
                <button
                  onClick={() => setLang(opt.code)}
                  style={{
                    fontFamily: F.label, fontSize: 10, fontWeight: 400,
                    letterSpacing: 2,
                    color: lang === opt.code ? C.accent : C.textMuted,
                    cursor: "pointer", padding: 0,
                    transition: `color ${timing.fast}`,
                  }}
                >
                  {opt.label}
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
