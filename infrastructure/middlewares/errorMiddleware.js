
// src/infrastructure/middlewares/errorMiddleware.js
const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
      message: err.message || 'An internal server error occurred',
    });
  };
  
  module.exports = errorMiddleware;
  