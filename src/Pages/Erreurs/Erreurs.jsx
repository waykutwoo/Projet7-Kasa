// Description: Page d'erreur 404

import React from "react";
import "./Erreurs.css";
import { NavLink } from "react-router-dom";

// Fonction Erreur404
// Affichage de la page 404
// Export de la fonction Erreur404

function Erreur404() {
  return (
    <div className="page404">
      <h1 className="titre404">404</h1>
      <span className="description404">
        Oups! La page que vous demandez n'existe pas.
      </span>
      <NavLink to="/" className="lien-accueil">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
}

export default Erreur404;
