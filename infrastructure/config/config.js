require('dotenv').config();

const config = {
  app: {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development',
    apiPrefix: '/api/v1'
  },
  db: {
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/apiscout',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-secret-key',
    expiresIn: process.env.JWT_EXPIRES_IN || '1d'
  },
  logging: {
    level: process.env.LOG_LEVEL || 'info'
  },
  cache: {
    ttl: process.env.CACHE_TTL || 3600 // 1 hour in seconds
  }
};

module.exports = config;
