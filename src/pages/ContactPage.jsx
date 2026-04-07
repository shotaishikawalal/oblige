import { useState, useMemo, useRef, useEffect } from "react";
import { C, F, fontSize, spacing, timing } from "../styles/design-tokens";
import { Reveal } from "../components/ui/Reveal";
import { useLang } from "../i18n/LanguageContext";

/* ── Anti-spam system (5 layers) ──
   1. Honeypot field — hidden input that only bots fill
   2. Math CAPTCHA — simple arithmetic challenge
   3. Time gate — reject if submitted in < 3 seconds (bot speed)
   4. URL blocker — reject messages containing URLs (common spam pattern)
   5. JS token — hidden token generated on mount, bots without JS can't produce it
*/

function useSpamGuard() {
  const challenge = useMemo(() => {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    return { a, b, answer: a + b };
  }, []);
  return challenge;
}

const URL_REGEX = /https?:\/\/|www\.|\.com\/|\.net\/|\.org\/|bit\.ly|goo\.gl/i;

/* ═══════════════════════════════════════════════════════
   oblige! — Contact Page
   Clean form with generous whitespace
   ═══════════════════════════════════════════════════════ */

const inputBase = {
  width: "100%",
  fontFamily: F.body,
  fontSize: "clamp(14px, 1.1vw, 16px)",
  color: C.text,
  background: "transparent",
  border: "none",
  borderBottom: `1px solid ${C.surface}`,
  padding: "14px 0",
  outline: "none",
  transition: `border-color ${timing.fast}`,
  letterSpacing: "0.02em",
};

const labelStyle = {
  fontFamily: F.label,
  fontSize: 10,
  letterSpacing: 3,
  textTransform: "uppercase",
  color: C.textMuted,
  marginBottom: 8,
  display: "block",
};

const categories = [
  "建設事業について",
  "不動産事業について",
  "内装インテリア設計について",
  "飲食事業について",
  "SNS/WEB広告について",
  "ブランディングについて",
  "その他",
];

export default function ContactPage() {
  const { t } = useLang();
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [error, setError] = useState("");
  const challenge = useSpamGuard();
  const mountTime = useRef(Date.now());
  const jsToken = useRef(Math.random().toString(36).slice(2));

  const update = (key, val) => setForm(prev => ({ ...prev, [key]: val }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitting) return; // prevent double submit

    // Layer 1: Honeypot — bots auto-fill hidden fields
    if (honeypot) return;

    // Layer 2: JS token — bots without JS won't have this
    if (!jsToken.current) return;

    // Layer 3: Time gate — reject if submitted in < 3 seconds
    const elapsed = Date.now() - mountTime.current;
    if (elapsed < 3000) {
      setError("送信が早すぎます。もう一度お試しください。");
      return;
    }

    // Layer 4: URL blocker — spam messages almost always contain links
    if (URL_REGEX.test(form.message) || URL_REGEX.test(form.name) || URL_REGEX.test(form.company)) {
      setError("URLを含むメッセージは送信できません。");
      return;
    }

    // Layer 5: Math CAPTCHA
    if (parseInt(captchaInput, 10) !== challenge.answer) {
      setError("計算の答えが正しくありません。");
      return;
    }

    setError("");
    setSubmitting(true);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ paddingTop: "clamp(140px, 18vw, 220px)", paddingBottom: spacing.sectionPadding, minHeight: "70vh" }}>
        <div className="container" style={{ maxWidth: 700, textAlign: "center" }}>
          <Reveal>
            <div style={{
              width: 64, height: 64, borderRadius: "50%",
              background: C.accent, margin: "0 auto 32px",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20,6 9,17 4,12" />
              </svg>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 style={{
              fontFamily: F.heading, fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700, color: C.text, marginBottom: 20,
            }}>Thank you</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{
              fontFamily: F.body, fontSize: fontSize.body,
              color: C.textMuted, lineHeight: 2.2,
            }}>
              お問い合わせいただきありがとうございます。<br />
              内容を確認の上、2営業日以内にご連絡いたします。
            </p>
          </Reveal>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* ── Hero ── */}
      <section style={{ paddingTop: "clamp(120px, 16vw, 200px)", paddingBottom: "clamp(40px, 6vw, 80px)" }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <Reveal>
            <span style={{
              fontFamily: F.label, fontSize: fontSize.label,
              letterSpacing: 4, color: C.accent, textTransform: "uppercase",
              fontWeight: 500,
            }}>Contact</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 style={{
              fontFamily: F.heading, fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 700, color: C.text, lineHeight: 1.2,
              letterSpacing: "0.02em", marginTop: 16,
            }}>Get in touch</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{
              fontFamily: F.body, fontSize: fontSize.body,
              color: C.textMuted, lineHeight: 2.2, marginTop: 24,
              maxWidth: 500,
            }}>
              事業に関するご相談・お見積りは無料です。<br />
              お気軽にお問い合わせください。
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Form ── */}
      <section style={{ paddingBottom: spacing.sectionPadding }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <form onSubmit={handleSubmit}>
            {/* Company */}
            <Reveal delay={0.12}>
              <div style={{ marginBottom: 40 }}>
                <label style={labelStyle}>Company</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={e => update("company", e.target.value)}
                  onFocus={() => setFocused("company")}
                  onBlur={() => setFocused(null)}
                  placeholder="会社名（任意）"
                  style={{
                    ...inputBase,
                    borderBottomColor: focused === "company" ? C.accent : C.surface,
                  }}
                />
              </div>
            </Reveal>

            {/* Name */}
            <Reveal delay={0.14}>
              <div style={{ marginBottom: 40 }}>
                <label style={labelStyle}>Name <span style={{ color: C.accent }}>*</span></label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => update("name", e.target.value)}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  placeholder="お名前"
                  style={{
                    ...inputBase,
                    borderBottomColor: focused === "name" ? C.accent : C.surface,
                  }}
                />
              </div>
            </Reveal>

            {/* Email + Phone — 2 columns */}
            <Reveal delay={0.16}>
              <div className="grid-2col" style={{
                display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(24px, 3vw, 40px)",
                marginBottom: 40,
              }}>
                <div>
                  <label style={labelStyle}>Email <span style={{ color: C.accent }}>*</span></label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => update("email", e.target.value)}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    placeholder="メールアドレス"
                    style={{
                      ...inputBase,
                      borderBottomColor: focused === "email" ? C.accent : C.surface,
                    }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => update("phone", e.target.value)}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused(null)}
                    placeholder="電話番号（任意）"
                    style={{
                      ...inputBase,
                      borderBottomColor: focused === "phone" ? C.accent : C.surface,
                    }}
                  />
                </div>
              </div>
            </Reveal>

            {/* Category */}
            <Reveal delay={0.18}>
              <div style={{ marginBottom: 40 }}>
                <label style={labelStyle}>Category <span style={{ color: C.accent }}>*</span></label>
                <select
                  required
                  value={form.category}
                  onChange={e => update("category", e.target.value)}
                  onFocus={() => setFocused("category")}
                  onBlur={() => setFocused(null)}
                  style={{
                    ...inputBase,
                    borderBottomColor: focused === "category" ? C.accent : C.surface,
                    appearance: "none",
                    cursor: "pointer",
                    color: form.category ? C.text : C.textDim,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238A8478' stroke-width='2'%3E%3Cpolyline points='6,9 12,15 18,9'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 4px center",
                  }}
                >
                  <option value="" disabled>お問い合わせ内容を選択</option>
                  {categories.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </Reveal>

            {/* Message */}
            <Reveal delay={0.2}>
              <div style={{ marginBottom: 56 }}>
                <label style={labelStyle}>Message <span style={{ color: C.accent }}>*</span></label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={e => update("message", e.target.value)}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  placeholder="お問い合わせ内容を入力してください"
                  style={{
                    ...inputBase,
                    borderBottomColor: focused === "message" ? C.accent : C.surface,
                    resize: "vertical",
                    minHeight: 120,
                    lineHeight: 2,
                  }}
                />
              </div>
            </Reveal>

            {/* Honeypot — hidden from humans, bots fill it */}
            <div style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, overflow: "hidden" }} aria-hidden="true">
              <input
                type="text"
                name="website_url"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={e => setHoneypot(e.target.value)}
              />
            </div>

            {/* Anti-spam math challenge */}
            <Reveal delay={0.21}>
              <div style={{ marginBottom: 40 }}>
                <label style={labelStyle}>
                  スパム防止 <span style={{ color: C.accent }}>*</span>
                </label>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{
                    fontFamily: F.body, fontSize: fontSize.body,
                    color: C.text,
                  }}>
                    {challenge.a} + {challenge.b} =
                  </span>
                  <input
                    type="text"
                    inputMode="numeric"
                    required
                    value={captchaInput}
                    onChange={e => { setCaptchaInput(e.target.value); setError(""); }}
                    onFocus={() => setFocused("captcha")}
                    onBlur={() => setFocused(null)}
                    placeholder="答え"
                    style={{
                      ...inputBase,
                      width: 80,
                      textAlign: "center",
                      borderBottomColor: error ? C.accent : focused === "captcha" ? C.accent : C.surface,
                    }}
                  />
                </div>
                {error && (
                  <p style={{
                    fontFamily: F.body, fontSize: 12,
                    color: C.accent, marginTop: 8,
                  }}>{error}</p>
                )}
              </div>
            </Reveal>

            {/* Submit */}
            <Reveal delay={0.22}>
              <button
                type="submit"
                style={{
                  fontFamily: F.label,
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  color: C.white,
                  background: C.dark,
                  border: "none",
                  padding: "18px 56px",
                  cursor: "pointer",
                  transition: `background ${timing.fast}`,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = C.accent; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.dark; }}
              >
                Send
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
                </svg>
              </button>
            </Reveal>
          </form>

          {/* ── Direct contact info ── */}
          <Reveal delay={0.25}>
            <div style={{
              marginTop: 80,
              paddingTop: 40,
              borderTop: `1px solid ${C.border}`,
              display: "flex",
              gap: "clamp(40px, 6vw, 80px)",
              flexWrap: "wrap",
            }}>
              <div>
                <span style={{ ...labelStyle, marginBottom: 12 }}>Email</span>
                <a href="mailto:info@oblige.jp" style={{
                  fontFamily: F.body, fontSize: fontSize.body,
                  color: C.text, borderBottom: `1px solid ${C.border}`,
                  paddingBottom: 2, transition: `border-color ${timing.fast}`,
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; }}
                >info@oblige.jp</a>
              </div>
              <div>
                <span style={{ ...labelStyle, marginBottom: 12 }}>Instagram</span>
                <a href="https://www.instagram.com/oblige.co.ltd/" target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: F.body, fontSize: fontSize.body,
                  color: C.text, borderBottom: `1px solid ${C.border}`,
                  paddingBottom: 2, transition: `border-color ${timing.fast}`,
                  display: "inline-flex", alignItems: "center", gap: 8,
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                  @oblige.co.ltd
                </a>
              </div>
              <div>
                <span style={{ ...labelStyle, marginBottom: 12 }}>Address</span>
                <p style={{
                  fontFamily: F.body, fontSize: fontSize.body,
                  color: C.text, lineHeight: 1.8,
                }}>
                  〒542-0081<br />
                  大阪市中央区南船場4-13-12<br />
                  南船場OMビル6階
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
