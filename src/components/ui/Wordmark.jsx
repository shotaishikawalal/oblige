import { C, F } from "../../styles/design-tokens";

export function Wordmark({
  size = 36,
  color = C.text,
  dotColor = C.accent,
  style,
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        color,
        fontFamily: F.wordmark,
        fontSize: size,
        fontWeight: 600,
        letterSpacing: 0,
        lineHeight: 0.86,
        ...style,
      }}
    >
      <span>oblige</span>
      <span style={{ color: dotColor }}>.</span>
    </span>
  );
}
