/*
Ce middleware vérifie si l'utilisateur est authentifié avant de lui 
permettre d'accéder à certaines routes protégées (par exemple, importer une API, tester un endpoint). 
Il utilise des tokens JWT.
*/


// src/infrastructure/middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Accès refusé. Aucun jeton fourni.' });
  }

  try {
    const decoded = await jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Jeton non valide.' });
  }
};

module.exports = authMiddleware;
