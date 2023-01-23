// Importation des modules
// Importation des composants
// Importation des images
// Importation des données

import React from "react";
import "./tags.css";

// Création de la fonction Accueil
// Affichage de la bannière
// Affichage des logements
// Export de la fonction Accueil
// @return {JSX} Page Accueil
// @return {JSX} Tags

function Tag({ nom }) {
  return <span className="tag">{nom}</span>;
}

export default Tag;
