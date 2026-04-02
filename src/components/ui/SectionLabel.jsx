import { F, fontSize, C } from "../../styles/design-tokens";
import { MaskReveal } from "./Reveal";

export default function SectionLabel({ en, ja, light = false }) {
  const color = light ? C.white : C.text;
  const accentColor = C.accent;

  return (
    <div style={{ marginBottom: 48 }}>
      <MaskReveal>
        <p style={{
          fontFamily: F.label, fontSize: fontSize.label,
          letterSpacing: 5, color: accentColor,
          textTransform: "uppercase", marginBottom: 12,
        }}>
          {en}
        </p>
      </MaskReveal>
      <MaskReveal delay={0.08}>
        <h2 style={{
          fontFamily: F.heading, fontSize: fontSize.sectionTitle,
          fontWeight: 400, color,
        }}>
          {ja}
        </h2>
      </MaskReveal>
    </div>
  );
}
