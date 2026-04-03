import { Link } from "react-router-dom";
import { C, F, fontSize } from "../../styles/design-tokens";
import { divisions } from "../../data/divisions";

export default function Footer() {
  return (
    <footer style={{ background: C.dark, color: C.darkText, padding: "80px 0 40px" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 48, marginBottom: 64,
        }}>
          {/* Logo & Description */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <svg width="24" height="24" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="18" fill="none" stroke={C.darkText} strokeWidth="1.5" />
                <circle cx="20" cy="20" r="10" fill="none" stroke={C.darkText} strokeWidth="1.5" />
                <circle cx="20" cy="20" r="4" fill={C.accent} />
              </svg>
              <span style={{ fontFamily: F.label, fontWeight: 500, fontSize: 13, letterSpacing: 4, textTransform: "uppercase" }}>
                Oblige
              </span>
            </div>
            <p style={{ fontFamily: F.body, fontSize: 11, lineHeight: 2, color: C.muted }}>
              ナイトタイムエコノミーの<br />トータルプロデュース
            </p>
          </div>

          {/* Business Links */}
          <div>
            <div style={{ fontFamily: F.label, fontSize: 10, letterSpacing: 3, color: C.accent, marginBottom: 20, textTransform: "uppercase" }}>
              Business
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {divisions.map(d => (
                <Link key={d.id} to={d.path} style={{ fontFamily: F.body, fontSize: 12, color: C.muted, transition: "color 0.3s" }}>
                  {d.nameJa}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: F.label, fontSize: 10, letterSpacing: 3, color: C.accent, marginBottom: 20, textTransform: "uppercase" }}>
              Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, fontFamily: F.body, fontSize: 12, color: C.muted }}>
              <span>info@oblige.jp</span>
              <a href="https://www.instagram.com/oblige.co.ltd/" target="_blank" rel="noopener noreferrer" style={{ color: C.muted, transition: "color 0.3s" }}>Instagram</a>
              <span>大阪市中央区南船場4-13-12</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: `1px solid rgba(255,255,255,0.08)`,
          paddingTop: 24,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 16,
        }}>
          <span style={{ fontFamily: F.label, fontSize: 10, letterSpacing: 2, color: C.muted }}>
            &copy; {new Date().getFullYear()} Oblige Co., Ltd.
          </span>
          <span style={{ fontFamily: F.body, fontSize: 10, color: "rgba(255,255,255,0.3)" }}>
            大阪市中央区南船場4-13-12
          </span>
        </div>
      </div>
    </footer>
  );
}
