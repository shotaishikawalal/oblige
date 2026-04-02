import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import TopPage from "./pages/TopPage";
import DivisionPage from "./pages/DivisionPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<TopPage />} />
          <Route path="/:id" element={<DivisionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
