// Import : React, useParams, Navigate
// Import : Logements.json
// Import : Etoile-Rouge.png, Etoile-Grise.png
// Import : dropdown, carroussel, tags
// Création de la fonction Logement

import React from "react";
import { useParams, Navigate } from "react-router-dom";
import "./Logements.css";
import ListeLogements from "../../Assets/Logements.json";
import EtoileRouge from "../../Assets/Etoile-Rouge.png";
import EtoileGrise from "../../Assets/Etoile-Grise.png";
import Dropdown from "../../Components/dropdown";
import Carrousel from "../../Components/carroussel";
import Tag from "../../Components/tags";

// Fonction Logement
// Récupération de l'id du logement
// Récupération des informations du logement
// Récupération des tags du logement
// Récupération des étoiles du logement
// Récupération des équipements du logement
// Affichage des informations du logement
// Affichage des tags du logement
// Affichage des étoiles du logement
// Affichage des équipements du logement
// Affichage de la page 404 si l'id n'existe pas
// Export de la fonction Logement

function Logement() {
  const id = useParams();
  const pageLogement = ListeLogements.find((logement) => logement.id === id.id);
  const tagNameLogement = pageLogement?.tags.map((tags, index) => {
    return <Tag key={index} nom={tags} />;
  });
  let infosLogement = [];
  let etoileValide = true;
  for (let index = 0; index < 5; index++) {
    if (index === parseInt(pageLogement?.rating)) {
      etoileValide = false;
    }
    if (etoileValide === true) {
      infosLogement.push(
        <img
          key={index}
          className="etoile"
          src={EtoileRouge}
          alt={`${pageLogement?.rating}/5`}
        />
      );
    } else {
      infosLogement.push(
        <img
          key={index}
          className="etoile"
          src={EtoileGrise}
          alt={`${pageLogement?.rating}/5`}
        />
      );
    }
  }
  const equipementLogement = pageLogement?.equipments.map(
    (equipment, index) => {
      return <li key={index}>{equipment}</li>;
    }
  );

  return (
    <>
      {pageLogement ? (
        <div className="block-logement">
          <Carrousel images={pageLogement?.pictures} />
          <div className="titre-logement">
            <div className="information-logements">
              <span className="nom-logement">{pageLogement?.title}</span>
              <span className="lieux">{pageLogement?.location}</span>
              <div className="tags">{tagNameLogement}</div>
            </div>
            <div className="information-propietaire">
              <div className="avatar-propietaire">
                <span className="nom-proprietaire">
                  {pageLogement?.host.name}
                </span>
                <img
                  className="photo-propietaire"
                  src={pageLogement?.host.picture}
                  alt="Portrait Porpiétaire"
                />
              </div>
              <div className="note">{infosLogement}</div>
            </div>
          </div>
          <div className="description-equipement-logement">
            <div className="description-logement">
              <Dropdown
                titre="Description"
                description={pageLogement?.description}
              />
            </div>
            <div className="equipement-logement">
              <Dropdown titre="Équipements" description={equipementLogement} />
            </div>
          </div>
        </div>
      ) : (
        <Navigate replace to="/404" />
      )}
    </>
  );
}

export default Logement;
