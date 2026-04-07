/* ═══════ DESIGN TOKENS — oblige! Brand System ═══════ */
/* Philosophy: 的を射る (hitting the mark) + ! (surprise & strong will) */
/* White-first: クリーンでラグジュアリーな白基調 */

export const C = {
  // Base — warm cream (Claude-inspired)
  bg:           "#F5F3EE",
  bgAlt:        "#EDEAE4",
  surface:      "#E5E1DA",
  surfaceHover: "#DDD8D0",

  // Dark sections — brown-black (not pure black)
  dark:         "#1A1714",
  darkAlt:      "#13110E",
  darkSurface:  "#221F1B",

  // Text — soft black + warm greys
  text:         "#1A1A1A",
  textMuted:    "#8A8478",
  textDim:      "#9A9590",
  textLight:    "#F0EDED",

  // Brand orange — Claude-inspired muted terracotta
  accent:       "#DA7756",
  accentLight:  "#E58B6C",
  accentDark:   "#C4654A",
  accentGlow:   "rgba(218,119,86,0.10)",
  accentSoft:   "rgba(218,119,86,0.05)",

  // Utility
  white:        "#FFFFFF",
  black:        "#000000",
  border:       "rgba(0,0,0,0.05)",
  borderActive: "rgba(218,119,86,0.20)",
  borderDark:   "rgba(255,255,255,0.06)",
};

export const F = {
  display:  "'Barlow Semi Condensed', sans-serif",         // Hero / impact
  heading:  "'Barlow Semi Condensed', 'Noto Sans JP', sans-serif",  // Sections
  body:     "'Noto Sans JP', sans-serif",                  // Body copy
  mono:     "'Barlow', monospace",                         // HUD / data
  label:    "'Barlow Semi Condensed', sans-serif",         // Uppercase labels
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
  containerMax: 1200,
  containerNarrow: 860,
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
