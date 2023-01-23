// C'est le composant de mise en page qui sera utilisé pour envelopper tous les autres composants
// Ceci sera utilisé pour envelopper tous les autres composants

import React from "react";
import "../Layouts/Layout.css";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";

// Création de la fonction Layout
// Affichage du Header
// Affichage du main
// Affichage du Footer
// Export de la fonction Layout
// @return {JSX} Header
// @return {JSX} Main
// @return {JSX} Footer
// @return {JSX} Layout

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
