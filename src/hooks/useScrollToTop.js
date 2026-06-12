import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Cross-page anchor (e.g. /about → /#business): the target page may not
      // have committed yet, so poll briefly for the section before scrolling.
      const id = hash.slice(1);
      let tries = 0;
      const timers = [];
      const jump = () => {
        document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
      };
      const attempt = () => {
        const el = document.getElementById(id);
        if (el) {
          jump();
          // Late-loading images shift the layout; correct once more after settle.
          timers.push(setTimeout(jump, 600));
          return;
        }
        if (tries++ < 20) timers.push(setTimeout(attempt, 50));
      };
      attempt();
      return () => timers.forEach(clearTimeout);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
}
