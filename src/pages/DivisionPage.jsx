import { useState } from "react";
import { useParams } from "react-router-dom";
import { C, F, fontSize } from "../styles/design-tokens";
import { divisions } from "../data/divisions";

export default function DivisionPage() {
  const { id } = useParams();
  const div = divisions.find(d => d.path === `/${id}`);

  if (!div) return <div style={{ padding: "200px 24px", textAlign: "center" }}>ページが見つかりません</div>;

  return (
    <div>
      {/* Hero */}
      <section style={{
        height: "70vh", minHeight: 400,
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
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />
        <span style={{ fontFamily: F.en, fontSize: 80, fontWeight: 300, color: "rgba(255,255,255,0.06)", position: "absolute", zIndex: 1 }}>
          {div.number}
        </span>
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: F.label, fontSize: fontSize.label, letterSpacing: 5, color: C.accent, textTransform: "uppercase", marginBottom: 16 }}>
            {div.nameEn}
          </p>
          <h1 style={{ fontFamily: F.heading, fontSize: fontSize.sectionTitle, fontWeight: 400, marginBottom: 16 }}>
            {div.nameJa}
          </h1>
          <p style={{ fontFamily: F.body, fontSize: fontSize.body, color: C.muted }}>
            {div.tagline}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section style={{ padding: "100px 0" }}>
        <div className="container-narrow">
          <p style={{ fontFamily: F.label, fontSize: fontSize.label, letterSpacing: 5, color: C.accent, textTransform: "uppercase" }}>Overview</p>
          <h2 style={{ fontFamily: F.heading, fontSize: fontSize.subTitle, marginTop: 12, marginBottom: 32, color: C.text }}>事業概要</h2>
          <p style={{ fontFamily: F.body, fontSize: fontSize.body, lineHeight: 2.2, color: C.sub }}>
            {div.description}
          </p>
        </div>
      </section>

      {/* Strengths */}
      <section style={{ padding: "100px 0", background: C.surface }}>
        <div className="container">
          <p style={{ fontFamily: F.label, fontSize: fontSize.label, letterSpacing: 5, color: C.accent, textTransform: "uppercase" }}>Strengths</p>
          <h2 style={{ fontFamily: F.heading, fontSize: fontSize.subTitle, marginTop: 12, marginBottom: 48, color: C.text }}>私たちの強み</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32 }}>
            {div.strengths.map((s, i) => (
              <div key={i} style={{ padding: 32, background: C.white, border: `1px solid ${C.border}` }}>
                <div style={{ fontFamily: F.label, fontSize: 10, letterSpacing: 3, color: C.accent, marginBottom: 12 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{ fontFamily: F.body, fontSize: 15, fontWeight: 500, color: C.text, marginBottom: 12 }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: F.body, fontSize: 13, lineHeight: 2, color: C.sub }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: "100px 0" }}>
        <div className="container-narrow">
          <p style={{ fontFamily: F.label, fontSize: fontSize.label, letterSpacing: 5, color: C.accent, textTransform: "uppercase" }}>Process</p>
          <h2 style={{ fontFamily: F.heading, fontSize: fontSize.subTitle, marginTop: 12, marginBottom: 48, color: C.text }}>ご依頼の流れ</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {div.process.map((p, i) => (
              <div key={i} style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                <div style={{
                  fontFamily: F.en, fontSize: 32, fontWeight: 300, color: C.accent,
                  minWidth: 56, lineHeight: 1,
                }}>
                  {p.step}
                </div>
                <div>
                  <h3 style={{ fontFamily: F.body, fontSize: 16, fontWeight: 500, color: C.text, marginBottom: 8 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontFamily: F.body, fontSize: 13, lineHeight: 2, color: C.sub }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "100px 0", background: C.surface }}>
        <div className="container-narrow">
          <p style={{ fontFamily: F.label, fontSize: fontSize.label, letterSpacing: 5, color: C.accent, textTransform: "uppercase" }}>FAQ</p>
          <h2 style={{ fontFamily: F.heading, fontSize: fontSize.subTitle, marginTop: 12, marginBottom: 48, color: C.text }}>よくあるご質問</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {div.faq.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 0", background: C.dark, textAlign: "center" }}>
        <div className="container-narrow">
          <p style={{ fontFamily: F.heading, fontSize: fontSize.subTitle, color: C.white, marginBottom: 24 }}>
            {div.nameJa}についてのご相談はこちら
          </p>
          <a href="/#contact" style={{
            display: "inline-block", padding: "14px 48px",
            border: `1px solid ${C.accent}`, color: C.accent,
            fontFamily: F.label, fontSize: 11, letterSpacing: 3,
            textTransform: "uppercase", transition: "all 0.3s",
          }}>
            Contact
          </a>
        </div>
      </section>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${C.border}` }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", padding: "24px 0", display: "flex",
          justifyContent: "space-between", alignItems: "center", textAlign: "left",
        }}
      >
        <span style={{ fontFamily: F.body, fontSize: 14, fontWeight: 400, color: C.text }}>{q}</span>
        <span style={{
          fontFamily: F.en, fontSize: 20, color: C.accent,
          transform: open ? "rotate(45deg)" : "none",
          transition: "transform 0.3s",
        }}>+</span>
      </button>
      <div style={{
        maxHeight: open ? 200 : 0, overflow: "hidden",
        transition: "max-height 0.4s ease",
      }}>
        <p style={{ fontFamily: F.body, fontSize: 13, lineHeight: 2, color: C.sub, paddingBottom: 24 }}>
          {a}
        </p>
      </div>
    </div>
  );
}
