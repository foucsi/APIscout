// src/interfaces/http/routes/public.js
const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/UserControllers');
const userSchema = require('../../../infrastructure/database/models/UserModel');
const validationMiddleware = require('../../../infrastructure/middlewares/validationMiddleware');

// Exemple de route publique : inscription d'un utilisateur
router.post('/register', validationMiddleware(userSchema), UserController.createUser);

// Autre exemple de route publique : page d'accueil
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the public API routes!' });
});

module.exports = router;
