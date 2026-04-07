import { F, fontSize, C } from "../../styles/design-tokens";
import { MaskReveal } from "./Reveal";

export default function SectionLabel({ en, ja, light = false }) {
  const color = light ? C.white : C.text;

  return (
    <div style={{ marginBottom: 48 }}>
      <MaskReveal>
        <p style={{
          fontFamily: F.label, fontSize: fontSize.label,
          letterSpacing: 4, color: C.accent,
          textTransform: "uppercase", fontWeight: 500, marginBottom: 8,
        }}>
          {en}
        </p>
      </MaskReveal>
      <MaskReveal delay={0.08}>
        <h2 style={{
          fontFamily: F.heading, fontSize: fontSize.section,
          fontWeight: 600, color, lineHeight: 1.4,
        }}>
          {ja}
        </h2>
      </MaskReveal>
    </div>
  );
}
