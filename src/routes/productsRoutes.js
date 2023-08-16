const productsRoutes = require('express').Router();
const {getProductsController} = require('../controllers/products/getProductsController.js')
const {getIdController} = require('../controllers/products/getIdController.js')
const {createProductController}=require('../controllers/products/createProductController.js')
const {updatePrductController}=require('../controllers/products/updatePrductController.js')
const {getDraftController}=require('../controllers/products/getDraftController.js')
productsRoutes.get('/', getProductsController);
productsRoutes.get('/:id', getIdController)
productsRoutes.post('/', createProductController)
productsRoutes.put('/:id', updatePrductController)
productsRoutes.get('/draft', getDraftController)

module.exports = productsRoutes;