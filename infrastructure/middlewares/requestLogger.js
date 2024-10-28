/*
Ce middleware enregistre chaque requête entrante (méthode, URL, statut, etc.) 
pour garder une trace de l’activité de l’application. 
Il est utile pour le débogage et la surveillance de l’application en production.
*/

const morgan = require('morgan');

const requestLogger = morgan('combined');

module.exports = requestLogger;