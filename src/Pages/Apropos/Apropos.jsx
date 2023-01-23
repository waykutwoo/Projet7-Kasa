// Description: Page A Propos

import React from "react";
import "./Apropos.css";
import Banniere from "../../Components/banniere";
import banniereAPropos from "../../Assets/BanniereAPropos.png";
import Dropdown from "../../Components/dropdown";

// Fonction APropos
// Affichage de la page A Propos
// Export de la fonction APropos
// @return {JSX} Page A Propos

function APropos() {
  return (
    <div className="APropos">
      <Banniere image={banniereAPropos} titre="image banniere" />
      <div className="dropdown-block">
        <Dropdown
          titre="Fiabilité"
          description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
        <Dropdown
          titre="Respect"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Dropdown
          titre="Service"
          description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <Dropdown
          titre="Sécurité"
          description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  );
}

export default APropos;
