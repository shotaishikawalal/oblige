import { useReveal } from "../../hooks/useReveal";

export function Reveal({ children, delay = 0, style = {} }) {
  const [ref, vis] = useReveal();
  return (
    <div ref={ref} style={{
      ...style,
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(36px)",
      transition: `all 1s cubic-bezier(.22,1,.36,1) ${delay}s`,
    }}>
      {children}
    </div>
  );
}

export function MaskReveal({ children, delay = 0 }) {
  const [ref, vis] = useReveal(0.15);
  return (
    <div ref={ref} style={{ overflow: "hidden" }}>
      <div style={{
        transform: vis ? "translateY(0)" : "translateY(100%)",
        opacity: vis ? 1 : 0,
        transition: `all .9s cubic-bezier(.22,1,.36,1) ${delay}s`,
      }}>
        {children}
      </div>
    </div>
  );
}
