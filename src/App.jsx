import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import Layout from "./components/layout/Layout";
import TopPage from "./pages/TopPage";
import AboutPage from "./pages/AboutPage";
import ColumnPage from "./pages/ColumnPage";
import ColumnArticlePage from "./pages/ColumnArticlePage";
import ContactPage from "./pages/ContactPage";
import DivisionPage from "./pages/DivisionPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<TopPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/column" element={<ColumnPage />} />
            <Route path="/column/:id" element={<ColumnArticlePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/:id" element={<DivisionPage />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}
