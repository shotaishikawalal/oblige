import { C, F, spacing } from "../styles/design-tokens";
import { Reveal } from "../components/ui/Reveal";
import { useLang } from "../i18n/LanguageContext";

/* ═══════════════════════════════════════════════════════
   oblige! — Privacy Policy Page
   ═══════════════════════════════════════════════════════ */

export default function PrivacyPolicyPage() {
  const { t } = useLang();
  const policies = t.privacy.policies;

  return (
    <div>
      {/* Hero */}
      <section style={{
        background: C.dark,
        padding: "clamp(120px, 16vw, 200px) 0 clamp(60px, 8vw, 100px)",
        textAlign: "center",
      }}>
        <Reveal>
          <span style={{
            display: "inline-block",
            fontFamily: F.label, fontSize: 11, letterSpacing: 3,
            color: C.accent, textTransform: "uppercase", marginBottom: 16,
          }}>{t.privacy.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 style={{
            fontFamily: F.heading,
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 700, color: C.textLight,
            letterSpacing: "0.04em", textTransform: "uppercase",
          }}>{t.privacy.heading}</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p style={{
            fontFamily: F.body, fontSize: "clamp(12px, 1vw, 14px)",
            color: C.textMuted, marginTop: 12,
          }}>{t.privacy.subtitle}</p>
        </Reveal>
      </section>

      {/* Content */}
      <section style={{ padding: spacing.sectionPadding + " 0" }}>
        <div style={{ maxWidth: spacing.containerNarrow, margin: "0 auto", padding: "0 clamp(24px, 4vw, 64px)" }}>

          <Reveal>
            <p style={{
              fontFamily: F.body,
              fontSize: "clamp(13px, 1vw, 15px)",
              lineHeight: 2.2,
              color: C.text,
              marginBottom: 64,
            }}>
              {t.privacy.intro}
            </p>
          </Reveal>

          {policies.map((item, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <div style={{ marginBottom: 48 }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 12,
                  marginBottom: 16,
                }}>
                  <span style={{
                    fontFamily: F.mono, fontSize: 12, fontWeight: 600,
                    color: C.accent, letterSpacing: 1,
                  }}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 style={{
                    fontFamily: F.body, fontSize: "clamp(15px, 1.2vw, 18px)",
                    fontWeight: 600, color: C.text,
                  }}>{item.title}</h3>
                </div>
                <p style={{
                  fontFamily: F.body,
                  fontSize: "clamp(13px, 1vw, 15px)",
                  lineHeight: 2.2,
                  color: C.textMuted,
                  whiteSpace: "pre-line",
                  paddingLeft: 36,
                }}>{item.body}</p>
              </div>
            </Reveal>
          ))}

          {/* Contact */}
          <Reveal>
            <div style={{
              marginTop: 48, padding: "32px 36px",
              background: C.bgAlt,
              borderLeft: `3px solid ${C.accent}`,
            }}>
              <h3 style={{
                fontFamily: F.body, fontSize: "clamp(14px, 1.1vw, 16px)",
                fontWeight: 600, color: C.text, marginBottom: 12,
              }}>{t.privacy.contactTitle}</h3>
              <p style={{
                fontFamily: F.body,
                fontSize: "clamp(13px, 1vw, 15px)",
                lineHeight: 2,
                color: C.textMuted,
                whiteSpace: "pre-line",
              }}>
                {t.privacy.contactBody}
              </p>
            </div>
          </Reveal>

        </div>
      </section>
    </div>
  );
}
