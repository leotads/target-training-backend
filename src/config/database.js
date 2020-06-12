'use strict';

require('dotenv/config')

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.NODE_ENV == 'test' ? 'grupovila_test' : 'grupovila_production',
  dialect: 'postgres',
  logging: false,
  define: {
    timestamps: true,
  }
}