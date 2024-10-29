// Charger les variables d'environnement
require('dotenv').config();

// Connexion à la base de données
require('./infrastructure/database/mongoConnection');

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');

// Middlewares
const corsMiddleware = require('./infrastructure/middlewares/corsMiddleware');
const errorMiddleware = require('./infrastructure/middlewares/errorMiddleware');
const requestLogger = require('./infrastructure/middlewares/requestLogger');

// Import des routes
const indexRouter = require('./interfaces/http/routes/index');
const usersRouter = require('./interfaces/http/routes/users');
const apisRouter = require('./interfaces/http/routes/api')
const protectedRoutes = require('./interfaces/http/routes/protected');
const publicRoutes = require('./interfaces/http/routes/public');
const authMiddleware = require('./infrastructure/middlewares/authMiddleware');

const app = express();

// Utilisation des middlewares globaux
app.use(morgan('combined')); // Logger des requêtes HTTP
app.use(express.json()); // Parseur JSON
app.use(express.urlencoded({ extended: false })); // Parseur d'URL-encoded
app.use(cookieParser()); // Parseur de cookies
app.use(express.static(path.join(__dirname, 'public'))); // Fichiers statiques

// Logger des requêtes (personnalisé)
app.use(requestLogger);

// Gestion du CORS
app.use(corsMiddleware);

// Routes publiques
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api', apisRouter)
app.use('/api/public', publicRoutes);

// Routes protégées par le middleware d'authentification
app.use('/api/protected', authMiddleware, protectedRoutes);


// Middleware de gestion des erreurs (doit être placé après toutes les routes)
app.use(errorMiddleware);

module.exports = app;
