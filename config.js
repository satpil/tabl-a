const dotenv = require('dotenv').config();
module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || '127.0.0.1',
  PORT: process.env.PORT || 3000,
  PASSWORD: process.env.PASSWORD,
  DATABASE: process.env.DATABASE,
  MONGODB_URI: process.env.MONGODB_URI
}