import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HetBoekPage } from "./pages/HetBoekPage";
import { InkijkenPage } from "./pages/InkijkenPage";
import { KoopPage } from "./pages/KoopPage";
import { AuteurPage } from "./pages/AuteurPage";

function App() {
  return (
    <Layout>
      <Routes>
        {/* Home redirect naar Het Boek */}
        <Route path="/" element={<Navigate to="/het-boek" replace />} />
        <Route path="/het-boek" element={<HetBoekPage />} />
        <Route path="/inkijken" element={<InkijkenPage />} />
        <Route path="/koop" element={<KoopPage />} />
        <Route path="/over-de-auteur" element={<AuteurPage />} />
        {/* Fallback onbekende URLs */}
        <Route path="*" element={<Navigate to="/het-boek" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
