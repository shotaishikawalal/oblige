/* ═══════ DESIGN TOKENS — oblige! Brand System ═══════ */
/* Philosophy: 的を射る (hitting the mark) + ! (surprise & strong will) */
/* White-first: クリーンでラグジュアリーな白基調 */

export const C = {
  // Base — warm cream (catalog spec: #F2ECE4)
  bg:           "#F2ECE4",
  bgAlt:        "#EAE3D8",
  surface:      "#E0D8CB",
  surfaceHover: "#D6CCBC",

  // Dark sections — near-black (catalog spec: #111111)
  dark:         "#111111",
  darkAlt:      "#0A0A0A",
  darkSurface:  "#1C1C1C",

  // Text — true near-black + warm greys
  text:         "#111111",
  textMuted:    "#7A746A",
  textDim:      "#9A958B",
  textLight:    "#F2ECE4",

  // Brand orange — catalog spec: #FF5A00 (vivid orange)
  accent:       "#FF5A00",
  accentLight:  "#FF7B33",
  accentDark:   "#E14F00",
  accentGlow:   "rgba(255,90,0,0.12)",
  accentSoft:   "rgba(255,90,0,0.06)",

  // Utility
  white:        "#FFFFFF",
  black:        "#000000",
  border:       "rgba(17,17,17,0.08)",
  borderActive: "rgba(255,90,0,0.25)",
  borderDark:   "rgba(255,255,255,0.08)",
};

export const F = {
  display:  "'Montserrat', 'Noto Sans JP', sans-serif",     // Hero / impact (numbers, titles)
  heading:  "'Montserrat', 'Noto Sans JP', sans-serif",     // Sections — Noto Sans JP Bold for kana/kanji
  body:     "'Noto Sans JP', sans-serif",                   // Body copy
  mono:     "'Barlow', monospace",                          // HUD / data
  label:    "'Montserrat', sans-serif",                     // Uppercase labels
};

export const fontSize = {
  hero:     "clamp(48px, 8vw, 120px)",
  display:  "clamp(32px, 5vw, 72px)",
  section:  "clamp(20px, 3vw, 36px)",
  subhead:  "clamp(16px, 2vw, 24px)",
  body:     "clamp(14px, 1.1vw, 16px)",
  small:    "clamp(12px, 1vw, 14px)",
  label:    "clamp(9px, 0.8vw, 11px)",
  data:     "clamp(8px, 0.7vw, 10px)",
};

export const spacing = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 40,
  xl: 64,
  xxl: 100,
  sectionPadding: "clamp(80px, 12vw, 160px)",
  containerMax: 1480,
  containerNarrow: 900,
};

export const timing = {
  instant:    "0.1s",
  fast:       "0.25s",
  normal:     "0.4s",
  slow:       "0.8s",
  reveal:     "1.2s",
  easeOut:    "cubic-bezier(0.22, 1, 0.36, 1)",
  easeSnap:   "cubic-bezier(0.85, 0, 0.15, 1)",
  easeBounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
};

export const breakpoints = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
};
