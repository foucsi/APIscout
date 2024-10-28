// src/interfaces/http/routes/protected.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../../../infrastructure/middlewares/authMiddleware');

// Middleware d'authentification pour protéger toutes les routes de ce fichier
router.use(authMiddleware);

// Exemple de route protégée : obtenir des informations sensibles de l'utilisateur
router.get('/profile', (req, res) => {
  // Ici, on suppose que l'utilisateur est authentifié et attaché à la requête par le middleware
  res.json({ message: 'This is a protected route', user: req.user });
});

// Autres routes protégées peuvent être ajoutées ici

module.exports = router;
