/*
Ce middleware valide les données entrantes avant qu’elles n’atteignent les contrôleurs.
 Par exemple, il vérifie si les données envoyées dans le corps de la requête ou les paramètres d’URL respectent certaines règles
*/


// src/infrastructure/middlewares/validationMiddleware.js
const Joi = require('joi');

const validationMiddleware = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = validationMiddleware;
