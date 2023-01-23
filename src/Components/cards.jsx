// Importation des modules
// Importation des données
// Importation des images

import React from "react";
import "./cards.css";

// Création de la fonction Accueil
// Affichage de la bannière
// Affichage des logements
// Export de la fonction Accueil

function Cards({ id, image, titre }) {
  return (
    <div className="cards" id={id}>
      <div className="gradients"></div>

      <img className="card-image" src={image} alt="card logement" />

      <span className="card-titre">{titre}</span>
    </div>
  );
}

export default Cards;
