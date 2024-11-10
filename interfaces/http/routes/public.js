// src/interfaces/http/routes/public.js
const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/UserControllers');


// Route sans middleware authentification => inscription d'un utilisateur et connection
router.post('/register',  UserController.createUser);
router.post('/login', UserController.loginUser)

module.exports = router;
