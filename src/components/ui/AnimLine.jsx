import { useReveal } from "../../hooks/useReveal";
import { C } from "../../styles/design-tokens";

export default function AnimLine({ width = "80px", delay = 0, color = C.accent }) {
  const [ref, vis] = useReveal();
  return (
    <div ref={ref} style={{
      width: vis ? width : "0px", height: 1, background: color,
      transition: `width 1.2s cubic-bezier(.22,1,.36,1) ${delay}s`,
    }} />
  );
}
