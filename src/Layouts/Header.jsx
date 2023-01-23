// Importation des modules
// Importation des composants
// Importation des images
// Importation des données
// Importation des styles
// Importation des fonctions

import React from "react";
import "./Header.css";
import logoHeader from "../Assets/Logo.png";
import { NavLink } from "react-router-dom";

// Déclaration des constantes
// Déclaration des fonctions
// Déclaration des variables
// Déclaration des classes
// Déclaration des composants

function Header() {
  return (
    <header>
      <img src={logoHeader} alt="Logo" />
      <nav>
        <NavLink
          to="/"
          className="lien-menu"
          style={({ isActive }) =>
            isActive
              ? { textDecoration: "underline" }
              : { textDecoration: "unset" }
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/APropos"
          className="lien-menu"
          style={({ isActive }) =>
            isActive
              ? { textDecoration: "underline" }
              : { textDecoration: "unset" }
          }
        >
          À Propos
        </NavLink>
      </nav>
    </header>
  );
}
// Exportation des composants
// Exportation des fonctions
// Exportation des variables
// Exportation des classes
// Exportation des constantes
// Exportation des modules

export default Header;
