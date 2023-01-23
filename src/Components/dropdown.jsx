// Importation des composants
// Importation des images
// Importation des données
// Importation des modules

import React, { useState } from "react";
import "../Components/dropdown.css";
import fleche from "../Assets/fleche-bas.svg";

// Création de la fonction Accueil
// Affichage de la bannière
// Affichage des logements
// Export de la fonction Accueil
// @return {JSX} Page Accueil
// @return {JSX} Tags

function Dropdown({ titre, description }) {
  // Déclaration des constantes
  // Déclaration des fonctions
  // Déclaration des variables
  // Déclaration des classes

  const [ouvert, setOuvert] = useState(false);

  return (
    <div className="dropdown" id={`about-${titre}`}>
      <div className="header-dropdown">
        <div className="titre-dropdown">{titre}</div>
        <span
          className={`fleche-dropdown ${ouvert}`}
          onClick={() => setOuvert(!ouvert)}
        >
          <img src={fleche} alt="Ouvrir cette liste" />
        </span>
      </div>
      {
        // Si ouvert est vrai, alors on affiche la description

        ouvert && <div className="description-dropdown">{description}</div>
      }
    </div>
  );
}

export default Dropdown;
