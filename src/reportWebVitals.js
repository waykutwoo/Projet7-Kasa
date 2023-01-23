// Ce fichier est utilisé pour rapporter les performances de l'application à Google Analytics.
// Il n'est pas utilisé dans ce projet, mais il est inclus dans le projet create-react-app par défaut.
// Il est inclus ici pour référence.

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
