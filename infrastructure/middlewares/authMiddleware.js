/*
Ce middleware vérifie si l'utilisateur est authentifié avant de lui 
permettre d'accéder à certaines routes protégées (par exemple, importer une API, tester un endpoint). 
Il utilise des tokens JWT ou d’autres mécanismes de session pour vérifier l'identité de l'utilisateur.
*/


// src/infrastructure/middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attache l'utilisateur décodé à la requête
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

module.exports = authMiddleware;
