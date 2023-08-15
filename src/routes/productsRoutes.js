const productsRoutes = require('express').Router();
const {getProductsController} = require('../controllers/products/getProductsController.js')
const {getIdController} = require('../controllers/products/getIdController.js')

productsRoutes.get('/', getProductsController);
productsRoutes.get('/:id', getIdController)

module.exports = {productsRoutes};