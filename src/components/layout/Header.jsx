import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { C, F, fontSize } from "../../styles/design-tokens";

const navLinks = [
  { label: "Business", path: "/#business" },
  { label: "About", path: "/#about" },
  { label: "Company", path: "/#company" },
  { label: "Contact", path: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isTop = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const handleNavClick = (e, path) => {
    if (path.startsWith("/#") && isTop) {
      e.preventDefault();
      const id = path.replace("/#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const headerBg = scrolled ? "rgba(255,255,255,0.95)" : "transparent";
  const headerBorder = scrolled ? `1px solid ${C.border}` : "1px solid transparent";
  const textColor = scrolled ? C.text : C.white;
  const headerBlur = scrolled ? "blur(12px)" : "none";

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: headerBg, backdropFilter: headerBlur, WebkitBackdropFilter: headerBlur,
        borderBottom: headerBorder,
        transition: "all 0.4s ease",
        padding: "0 clamp(24px, 4vw, 64px)",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 72,
        }}>
          {/* Logo */}
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <svg width="28" height="28" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="18" fill="none" stroke={textColor} strokeWidth="1.5" style={{ transition: "stroke 0.4s" }} />
              <circle cx="20" cy="20" r="10" fill="none" stroke={textColor} strokeWidth="1.5" style={{ transition: "stroke 0.4s" }} />
              <circle cx="20" cy="20" r="4" fill={C.accent} />
            </svg>
            <span style={{
              fontFamily: F.label, fontWeight: 500, fontSize: 14,
              letterSpacing: 4, color: textColor, transition: "color 0.4s",
              textTransform: "uppercase",
            }}>
              Oblige
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 36 }}>
            {navLinks.map(l => (
              <Link
                key={l.path}
                to={l.path}
                onClick={(e) => handleNavClick(e, l.path)}
                style={{
                  fontFamily: F.label, fontSize: 11, fontWeight: 400,
                  letterSpacing: 3, color: textColor, transition: "color 0.4s",
                  textTransform: "uppercase",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Burger */}
          <button
            className="hide-desktop"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ width: 32, height: 32, position: "relative" }}
            aria-label="Menu"
          >
            <span style={{
              position: "absolute", left: 4, width: 24, height: 1.5, background: textColor,
              top: menuOpen ? 15 : 10,
              transform: menuOpen ? "rotate(45deg)" : "none",
              transition: "all 0.3s ease",
            }} />
            <span style={{
              position: "absolute", left: 4, width: 24, height: 1.5, background: textColor,
              top: 15, opacity: menuOpen ? 0 : 1,
              transition: "all 0.3s ease",
            }} />
            <span style={{
              position: "absolute", left: 4, width: 24, height: 1.5, background: textColor,
              top: menuOpen ? 15 : 20,
              transform: menuOpen ? "rotate(-45deg)" : "none",
              transition: "all 0.3s ease",
            }} />
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
                fontFamily: F.label, fontSize: 14, fontWeight: 400,
                letterSpacing: 4, color: C.text, textTransform: "uppercase",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
