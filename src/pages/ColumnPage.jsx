import { useState } from "react";
import { Link } from "react-router-dom";
import { C, F, fontSize, spacing, timing } from "../styles/design-tokens";
import { Reveal } from "../components/ui/Reveal";
import { useLang } from "../i18n/LanguageContext";
import { articles } from "../data/articles";

/* ═══════════════════════════════════════════════════════
   oblige! — Column Page
   hive-inspired: clean editorial grid, category filter
   ═══════════════════════════════════════════════════════ */

/* ── Article Card ── */
function ArticleCard({ article, delay = 0 }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={delay}>
      <Link
        to={`/column/${article.id}`}
        style={{ display: "block", textDecoration: "none" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Thumbnail */}
        <div style={{
          overflow: "hidden",
          aspectRatio: "16 / 10",
          marginBottom: 16,
          background: C.surface,
        }}>
          <img
            src={article.image}
            alt=""
            style={{
              width: "100%", height: "100%", objectFit: "cover",
              transform: hovered ? "scale(1.05)" : "scale(1)",
              transition: `transform 0.6s ${timing.easeOut}`,
            }}
          />
        </div>

        {/* Meta */}
        <div style={{
          display: "flex", alignItems: "center", gap: 12,
          marginBottom: 10,
        }}>
          <time style={{
            fontFamily: F.label, fontSize: 10, letterSpacing: 2,
            color: C.textDim,
          }}>{article.date}</time>
          <span style={{
            fontFamily: F.body, fontSize: 10,
            color: C.accent, letterSpacing: "0.04em",
            background: C.accentSoft,
            padding: "3px 10px", borderRadius: 12,
          }}>{article.category}</span>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: F.body, fontSize: "clamp(14px, 1.2vw, 16px)",
          fontWeight: 500, color: C.text, lineHeight: 1.8,
          letterSpacing: "0.02em",
          borderBottom: hovered ? `1px solid ${C.text}` : "1px solid transparent",
          transition: `border-color 0.3s ease`,
          display: "inline",
        }}>{article.title}</h3>
      </Link>
    </Reveal>
  );
}

/* ═══════ COLUMN PAGE ═══════ */
export default function ColumnPage() {
  const { t } = useLang();
  const allLabel = t.column.allCategory;
  const categories = [allLabel, ...new Set(articles.map(a => a.category))];
  const [activeCategory, setActiveCategory] = useState(allLabel);

  const filtered = activeCategory === allLabel
    ? articles
    : articles.filter(a => a.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section style={{
        paddingTop: "clamp(140px, 18vw, 220px)",
        paddingBottom: "clamp(40px, 5vw, 64px)",
      }}>
        <div className="container">
          <Reveal>
            <p style={{
              fontFamily: F.label, fontSize: fontSize.label,
              letterSpacing: 4, color: C.accent, textTransform: "uppercase",
              fontWeight: 500, marginBottom: 16,
            }}>Column</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 style={{
              fontFamily: F.heading, fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 700, color: C.text, lineHeight: 1.3,
              letterSpacing: "0.02em",
            }}>
              {t.column.title}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{
              width: 40, height: 2, background: C.accent, marginTop: 32,
            }} />
          </Reveal>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ paddingBottom: 48 }}>
        <div className="container">
          <Reveal delay={0.25}>
            <div style={{
              display: "flex", gap: 8, flexWrap: "wrap",
            }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    fontFamily: F.body, fontSize: 12,
                    letterSpacing: "0.04em",
                    padding: "8px 20px", borderRadius: 24,
                    background: activeCategory === cat ? C.text : "transparent",
                    color: activeCategory === cat ? C.white : C.textMuted,
                    border: `1px solid ${activeCategory === cat ? C.text : C.border}`,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Article Grid */}
      <section style={{ paddingBottom: spacing.sectionPadding }}>
        <div className="container">
          <div className="article-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(32px, 4vw, 56px) clamp(24px, 3vw, 40px)",
          }}>
            {filtered.map((article, i) => (
              <ArticleCard
                key={article.id}
                article={article}
                delay={0.05 + i * 0.05}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <Reveal>
              <p style={{
                fontFamily: F.body, fontSize: 14,
                color: C.textMuted, textAlign: "center",
                padding: "80px 0",
              }}>{t.column.emptyMessage}</p>
            </Reveal>
          )}
        </div>
      </section>
    </div>
  );
}
