import { useParams, Link } from "react-router-dom";
import { C, F, fontSize, spacing, timing } from "../styles/design-tokens";
import { Reveal } from "../components/ui/Reveal";
import { articles } from "../data/articles";

/* ═══════════════════════════════════════════════════════
   oblige! — Column Article Detail Page
   ═══════════════════════════════════════════════════════ */

/* ── Body block renderer ── */
function ArticleBody({ blocks }) {
  return blocks.map((block, i) => {
    switch (block.type) {
      case "lead":
        return (
          <Reveal key={i} delay={0.15}>
            <p style={{
              fontFamily: F.body, fontSize: "clamp(15px, 1.3vw, 18px)",
              lineHeight: 2.2, color: C.text,
              letterSpacing: "0.04em",
              marginBottom: 48,
              fontWeight: 400,
            }}>{block.text}</p>
          </Reveal>
        );

      case "heading":
        return (
          <Reveal key={i}>
            <h2 style={{
              fontFamily: F.body, fontSize: "clamp(18px, 1.8vw, 24px)",
              fontWeight: 700, color: C.text,
              lineHeight: 1.6, letterSpacing: "0.02em",
              marginTop: 56, marginBottom: 20,
              paddingLeft: 16,
              borderLeft: `3px solid ${C.accent}`,
            }}>{block.text}</h2>
          </Reveal>
        );

      case "paragraph":
        return (
          <Reveal key={i}>
            <p style={{
              fontFamily: F.body, fontSize: "clamp(14px, 1.1vw, 16px)",
              lineHeight: 2.2, color: C.text,
              letterSpacing: "0.04em",
              marginBottom: 24,
            }}>{block.text}</p>
          </Reveal>
        );

      case "quote":
        return (
          <Reveal key={i}>
            <blockquote style={{
              margin: "56px 0",
              padding: "32px 40px",
              background: C.bgAlt || "#EDEAE4",
              borderLeft: `3px solid ${C.accent}`,
              position: "relative",
            }}>
              <p style={{
                fontFamily: F.body, fontSize: "clamp(14px, 1.2vw, 17px)",
                lineHeight: 2, color: C.text,
                letterSpacing: "0.04em", fontStyle: "italic",
              }}>{block.text}</p>
              {block.author && (
                <cite style={{
                  display: "block", marginTop: 16,
                  fontFamily: F.label, fontSize: 11,
                  letterSpacing: 2, color: C.textMuted,
                  fontStyle: "normal",
                }}>— {block.author}</cite>
              )}
            </blockquote>
          </Reveal>
        );

      default:
        return null;
    }
  });
}

/* ═══════ ARTICLE PAGE ═══════ */
export default function ColumnArticlePage() {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div style={{ paddingTop: 200, textAlign: "center" }}>
        <div className="container">
          <h1 style={{
            fontFamily: F.heading, fontSize: 32,
            color: C.text, marginBottom: 24,
          }}>記事が見つかりません</h1>
          <Link to="/column" style={{
            fontFamily: F.label, fontSize: 12,
            letterSpacing: 3, color: C.accent,
            textTransform: "uppercase",
            borderBottom: `1px solid ${C.accent}`,
            paddingBottom: 4,
          }}>← コラム一覧に戻る</Link>
        </div>
      </div>
    );
  }

  /* Related articles (same category, exclude self, max 3) */
  const related = articles
    .filter(a => a.id !== article.id)
    .slice(0, 3);

  return (
    <div>
      {/* ── Hero Image ── */}
      <section style={{
        paddingTop: "clamp(100px, 14vw, 160px)",
      }}>
        <div className="container">
          <Reveal>
            <Link to="/column" style={{
              fontFamily: F.label, fontSize: fontSize.label,
              letterSpacing: 3, color: C.accent, textTransform: "uppercase",
              fontWeight: 500,
              display: "inline-flex", alignItems: "center", gap: 8,
              marginBottom: 32,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12,19 5,12 12,5" />
              </svg>
              Column
            </Link>
          </Reveal>

          {/* Meta */}
          <Reveal delay={0.05}>
            <div style={{
              display: "flex", alignItems: "center", gap: 12,
              marginBottom: 20,
            }}>
              <time style={{
                fontFamily: F.label, fontSize: 11, letterSpacing: 2,
                color: C.textDim,
              }}>{article.date}</time>
              <span style={{
                fontFamily: F.body, fontSize: 10,
                color: C.accent, letterSpacing: "0.04em",
                background: C.accentSoft,
                padding: "3px 10px", borderRadius: 12,
              }}>{article.category}</span>
              {article.readTime && (
                <span style={{
                  fontFamily: F.label, fontSize: 10,
                  letterSpacing: 1, color: C.textDim,
                }}>読了 {article.readTime}</span>
              )}
            </div>
          </Reveal>

          {/* Title */}
          <Reveal delay={0.1}>
            <h1 style={{
              fontFamily: F.body, fontSize: "clamp(24px, 3.5vw, 40px)",
              fontWeight: 700, color: C.text, lineHeight: 1.6,
              letterSpacing: "0.02em",
              maxWidth: 860,
            }}>{article.title}</h1>
          </Reveal>

          {/* Author */}
          {article.author && (
            <Reveal delay={0.15}>
              <p style={{
                fontFamily: F.label, fontSize: 11,
                letterSpacing: 2, color: C.textMuted,
                marginTop: 20,
              }}>{article.author}</p>
            </Reveal>
          )}

          {/* Divider */}
          <Reveal delay={0.18}>
            <div style={{
              width: 40, height: 2, background: C.accent,
              marginTop: 32, marginBottom: 48,
            }} />
          </Reveal>
        </div>
      </section>

      {/* ── Hero Image ── */}
      <section>
        <div className="container">
          <Reveal delay={0.2}>
            <div style={{
              overflow: "hidden",
              aspectRatio: "21 / 9",
              marginBottom: 64,
            }}>
              <img
                src={article.image}
                alt=""
                style={{
                  width: "100%", height: "100%", objectFit: "cover",
                }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Article Body ── */}
      <section style={{ paddingBottom: spacing.sectionPadding }}>
        <div className="container-narrow">
          <ArticleBody blocks={article.body} />
        </div>
      </section>

      {/* ── Share / Back ── */}
      <section style={{ paddingBottom: 80 }}>
        <div className="container-narrow" style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          borderTop: `1px solid ${C.border}`,
          paddingTop: 32,
        }}>
          <Link to="/column" style={{
            fontFamily: F.label, fontSize: 11,
            letterSpacing: 3, color: C.textMuted,
            textTransform: "uppercase",
            display: "inline-flex", alignItems: "center", gap: 8,
            transition: `color ${timing.fast}`,
          }}
          onMouseEnter={e => { e.currentTarget.style.color = C.accent; }}
          onMouseLeave={e => { e.currentTarget.style.color = C.textMuted; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12,19 5,12 12,5" />
            </svg>
            Back to Column
          </Link>
        </div>
      </section>

      {/* ── Related Articles ── */}
      {related.length > 0 && (
        <section style={{
          padding: `${spacing.sectionPadding} 0`,
          background: C.bgAlt || "#EDEAE4",
        }}>
          <div className="container">
            <Reveal>
              <h2 style={{
                fontFamily: F.heading, fontSize: "clamp(20px, 2.5vw, 32px)",
                fontWeight: 700, color: C.text,
                letterSpacing: "0.04em", textTransform: "uppercase",
                marginBottom: 48,
              }}>Related Articles</h2>
            </Reveal>

            <div className="article-grid" style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "clamp(24px, 3vw, 40px)",
            }}>
              {related.map((a, i) => (
                <Reveal key={a.id} delay={0.05 + i * 0.05}>
                  <Link to={`/column/${a.id}`} style={{ display: "block", textDecoration: "none" }}>
                    <div style={{
                      overflow: "hidden",
                      aspectRatio: "16 / 10",
                      marginBottom: 16,
                    }}>
                      <img src={a.image} alt="" style={{
                        width: "100%", height: "100%", objectFit: "cover",
                        transition: `transform 0.6s ${timing.easeOut}`,
                      }}
                      onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
                      />
                    </div>
                    <div style={{
                      display: "flex", alignItems: "center", gap: 12,
                      marginBottom: 10,
                    }}>
                      <time style={{
                        fontFamily: F.label, fontSize: 10, letterSpacing: 2,
                        color: C.textDim,
                      }}>{a.date}</time>
                      <span style={{
                        fontFamily: F.body, fontSize: 10,
                        color: C.accent, letterSpacing: "0.04em",
                        background: C.accentSoft,
                        padding: "3px 10px", borderRadius: 12,
                      }}>{a.category}</span>
                    </div>
                    <h3 style={{
                      fontFamily: F.body, fontSize: "clamp(13px, 1.1vw, 15px)",
                      fontWeight: 500, color: C.text, lineHeight: 1.8,
                      letterSpacing: "0.02em",
                    }}>{a.title}</h3>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
