// Importation des composants
// Importation des images
// Importation des données

import React from "react";
import "./Accueil.css";
import Banniere from "../../Components/banniere";
import banniereAccueil from "../../Assets/BanniereAcceuil.png";
import ListeLogements from "../../Assets/Logements.json";
import { NavLink } from "react-router-dom";
import Cards from "../../Components/cards";

// Création de la fonction Accueil
// Affichage de la bannière
// Affichage des logements
// Export de la fonction Accueil
// @return {JSX} Page Accueil
// @return {JSX} Bannière
// @return {JSX} Cards
// @return {JSX} Logements
// @return {JSX} Page 404

function Accueil() {
  return (
    <div className="accueil">
      <div className="banniere-accueil">
        <Banniere
          image={banniereAccueil}
          texte="Chez vous, partout et ailleurs"
        />
      </div>
      <div className="block-logements">
        {ListeLogements.map((logement) => (
          <NavLink key={logement.id} to={"/logement/" + logement.id + "/#"}>
            <Cards
              key={logement.id}
              id={logement.id}
              image={logement.cover}
              titre={logement.title}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Accueil;
