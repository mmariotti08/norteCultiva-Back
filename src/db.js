require("dotenv").config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/nortecultiva`, {
  logging: false,
  native: false
});

const { } = sequelize.models;

module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    sequelize,     // para importart la conexión { conn } = require('./db.js');
  };