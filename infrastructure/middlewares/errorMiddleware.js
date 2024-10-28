/*
Ce middleware attrape les erreurs qui se produisent dans l'application, 
qu'elles soient levées par les contrôleurs ou les middlewares précédents. 
Il permet de centraliser la gestion des erreurs et d'envoyer une réponse cohérente à l’utilisateur.
*/


// src/infrastructure/middlewares/errorMiddleware.js
const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
      message: err.message || 'An internal server error occurred',
    });
  };
  
  module.exports = errorMiddleware;
  