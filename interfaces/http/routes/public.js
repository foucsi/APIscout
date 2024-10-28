// src/interfaces/http/routes/public.js
const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/UserControllers');


// Exemple de route publique : inscription d'un utilisateur et connection
router.post('/register',  UserController.createUser);
router.post('/login', UserController.loginUser)

module.exports = router;
