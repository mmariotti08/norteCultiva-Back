const productsRoutes = require('express').Router();

productsRoutes.get('/', getProductsController);

module.exports = {productsRoutes};