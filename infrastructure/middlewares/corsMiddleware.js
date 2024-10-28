// src/infrastructure/middlewares/corsMiddleware.js
const cors = require('cors');

const corsMiddleware = cors({
  origin: '*', // Tu peux spécifier des domaines autorisés ici
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});

module.exports = corsMiddleware;
