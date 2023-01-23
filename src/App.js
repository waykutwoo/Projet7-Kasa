// Importation des composants
// Importation des styles
// Importation des routes
// Importation des composants

import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layouts/Layout";
import Accueil from "./Pages/Accueil/Accueil";
import APropos from "./Pages/Apropos/Apropos";
import Erreur404 from "./Pages/Erreurs/Erreurs";
import Logement from "./Pages/Logements/Logements";

/*Dossier Routes*/

// Fonction principale
// Retourne le composant Layout
// Retourne les routes
// Retourne le composant Accueil
// Retourne le composant APropos
// Retourne le composant Logement
// Retourne le composant Erreur404
// Retourne le composant App

function App() {
  return (
    <div className="App">
      <main>
        <HashRouter>
          <Layout>
            <Routes>
              <Route index element={<Accueil />} />
              <Route path="/accueil" element={<Accueil />} />
              <Route path="/APropos" element={<APropos />} />
              <Route path="/logement/:id" element={<Logement />} />
              <Route path="*" element={<Erreur404 />} />
            </Routes>
          </Layout>
        </HashRouter>
      </main>
    </div>
  );
}

export default App;
