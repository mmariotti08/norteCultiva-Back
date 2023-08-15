require("dotenv").config();
const { Sequelize } = require('sequelize');
const productModel = require('./models/Product');
const usersModel = require('./models/Users');
const orderModel = require('./models/Order');
const stockModel = require("./models/Stock");
const { DB_USER, DB_PASSWORD, DB_HOST  } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/nortecultiva`, {
  logging: false,
  native: false
});


productModel(sequelize)
usersModel(sequelize)
orderModel(sequelize)
stockModel(sequelize)


const { Product, User, Order, Stock } = sequelize.models;

Product.hasMany(Stock, { foreignKey: 'productId' });
Stock.belongsTo(Product, { foreignKey: 'productId' });


module.exports = {
    ...sequelize.models, 
    conn: sequelize,     
  };