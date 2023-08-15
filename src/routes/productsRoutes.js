const productsRoutes = require('express').Router();
const {getProductsController} = require('../controllers/products/getProductsController.js')
const {getIdController} = require('../controllers/products/getIdController.js')
const {createProductController}=require('../controllers/products/createProductController.js')
const {updatePrductController}=require('../controllers/products/updatePrductController.js')

productsRoutes.get('/', getProductsController);
productsRoutes.get('/:id', getIdController)
productsRoutes.post('/', createProductController)
productsRoutes.put('/:id', updatePrductController)

module.exports = productsRoutes;