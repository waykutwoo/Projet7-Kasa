// Importation des dépendances
// Importation des composants
// Importation des images
// Importation des données
// Importation des modules

import React, { useState } from "react";
import "./carroussel.css";
import fleche from "../Assets/fleche-bas.svg";

// Création de la fonction Accueil
// Affichage de la bannière
// Affichage des logements
// Export de la fonction Accueil
// @return {JSX} Page Accueil
// @return {JSX} Carrousel

function Carrousel({ images }) {
  console.log(images);
  let [affichageImage, changementImage] = useState(0);
  // Affichage de l'image 0 par défaut
  let tableauImages = images.length;
  // Nombre d'images
  let [currentClass, setCurrentClass] = useState("");
  let [currentPosition, setCurrentPosition] = useState(
    // Création d'un tableau avec la même longueur que le nombre d'images
    Array(images.length).fill(0)
  );

  // Fonction pour afficher l'image précédente
  // Fonction pour afficher l'image suivante

  const imgPrecedente = () => {
    let newPositions = [...currentPosition];
    newPositions[affichageImage] = 100;
    if (affichageImage === 0) {
      changementImage(tableauImages - 1);
    } else {
      changementImage(affichageImage - 1);
    }
    newPositions[affichageImage] = 0;
    setCurrentPosition(newPositions);
  };

  const imgSuivante = () => {
    let newPositions = [...currentPosition];
    newPositions[affichageImage] = -100;
    if (affichageImage === tableauImages - 1) {
      changementImage(0);
    } else {
      changementImage(affichageImage + 1);
    }
    newPositions[affichageImage] = 0;
    setCurrentPosition(newPositions);
  };

  // Affichage du carrousel
  // Affichage des images
  // Affichage des flèches
  // Affichage de la page

  return (
    <div className="block-carrousel">
      <div className="carrousel-image">
        {tableauImages > 1 && (
          <img
            className="fleche fleche-gauche"
            src={fleche}
            alt="Contenu précedént"
            onClick={() => {
              setCurrentClass("slide-left");
              imgPrecedente();
            }}
          />
        )}

        {images.map((image, index) => {
          return (
            <img
              key={index}
              className={`carrousel-photo ${
                index === affichageImage ? "actif " + currentClass : ""
              }`}
              src={image}
              alt="Logement"
              style={{ transform: `translateX(${currentPosition[index]}%)` }}
            />
          );
        })}

        {tableauImages > 1 && (
          <img
            className="fleche fleche-droite"
            src={fleche}
            alt="Contenu suivant"
            onClick={() => {
              setCurrentClass("slide-right");
              imgSuivante();
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Carrousel;
