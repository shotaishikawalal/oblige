import { Link } from "react-router-dom";
import { C, F, timing } from "../../styles/design-tokens";
import { divisions } from "../../data/divisions";
import { useLang } from "../../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer style={{
      background: C.dark, color: C.textLight,
      padding: "80px 0 40px",
    }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 48, marginBottom: 64,
        }}>
          {/* Logo */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <img
                src="/logo.svg"
                alt="oblige!"
                style={{ height: 24 }}
              />
            </div>
            <p style={{ fontFamily: F.body, fontSize: 11, lineHeight: 2, color: "rgba(255,255,255,0.4)", whiteSpace: "pre-line" }}>
              {t.footer.tagline}
            </p>
          </div>

          {/* Business Links */}
          <div>
            <div style={{
              fontFamily: F.label, fontSize: 10, letterSpacing: 3,
              color: C.accent, marginBottom: 20, textTransform: "uppercase", fontWeight: 500,
            }}>{t.footer.businessLabel}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {divisions.map(d => (
                <Link key={d.id} to={d.path} style={{
                  fontFamily: F.body, fontSize: 12, color: "rgba(255,255,255,0.5)",
                  transition: `color ${timing.fast}`,
                }}
                onMouseEnter={e => { e.currentTarget.style.color = C.accent; }}
                onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
                >
                  {t.divisions[d.id]?.nameJa || d.nameJa}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{
              fontFamily: F.label, fontSize: 10, letterSpacing: 3,
              color: C.accent, marginBottom: 20, textTransform: "uppercase", fontWeight: 500,
            }}>{t.footer.contactLabel}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, fontFamily: F.body, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
              <span>info@oblige.jp</span>
              <a href="https://www.instagram.com/oblige.co.ltd/" target="_blank" rel="noopener noreferrer" style={{
                color: "rgba(255,255,255,0.5)", transition: `color ${timing.fast}`,
                display: "flex", alignItems: "center", gap: 8,
              }}
              onMouseEnter={e => { e.currentTarget.style.color = C.accent; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
                Instagram
              </a>
              <span>{t.footer.addressShort}</span>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 16,
        }}>
          <span style={{ fontFamily: F.label, fontSize: 10, letterSpacing: 2, color: "rgba(255,255,255,0.3)" }}>
            {t.footer.copyright}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <Link to="/privacy" style={{
              fontFamily: F.body, fontSize: 10, color: "rgba(255,255,255,0.3)",
              transition: `color ${timing.fast}`,
            }}
            onMouseEnter={e => { e.currentTarget.style.color = C.accent; }}
            onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.3)"; }}
            >
              Privacy Policy
            </Link>
            <span style={{ fontFamily: F.body, fontSize: 10, color: "rgba(255,255,255,0.3)" }}>
              {t.footer.address}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
