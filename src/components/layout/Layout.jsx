import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { useLang } from "../../i18n/LanguageContext";

/* Tab-away easter egg: when the visitor switches tabs, the title quietly
   nags them about losing sight of the night. Restored on return. */
function useAwayTitle() {
  const { t } = useLang();
  useEffect(() => {
    const away = t?.hero?.awayTitle;
    if (!away) return;
    const original = document.title;
    const onVis = () => {
      document.title = document.hidden ? away : original;
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      document.title = original;
    };
  }, [t]);
}

export default function Layout() {
  useScrollToTop();
  useAwayTitle();

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
