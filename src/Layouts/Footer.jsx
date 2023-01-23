// Ceci est le composant Footer
// Ce composant est utilisé pour afficher le pied de page
// Ce composant est utilisé dans le composant Layout

import React from "react";
import "./Footer.css";
import logoFooter from "../Assets/LogoFooter.png";

// Création de la fonction Footer
// Affichage du footer
// Export de la fonction Footer
// @return {JSX} Footer

function Footer() {
  return (
    <footer>
      <div id="footer-container">
        <img src={logoFooter} alt="Logo" />
        <p>&copy; 2022 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
