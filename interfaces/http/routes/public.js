// src/interfaces/http/routes/public.js
const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/UserControllers');


// Exemple de route publique : inscription d'un utilisateur
router.post('/register',  UserController.createUser);
router.post('/login', UserController.loginUser)


// Autre exemple de route publique : page d'accueil
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the public API routes!' });
});

module.exports = router;
