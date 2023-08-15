const productsRoutes = require('express').Router();
const {getProductsController} = require('../controllers/products/getProductsController.js')

productsRoutes.get('/', getProductsController);

module.exports = productsRoutes;