const stockRoutes = require('express').Router();
const {getStockController}=require('../controllers/stock/getStockController.js')
const {getIdController}=require('../controllers/stock/getIdController.js')
const {deleteStockController}=require('../controllers/stock/deleteStockController.js')
const {updateStockController}=require('../controllers/stock/updateStockController.js')


stockRoutes.get('/', getStockController)
stockRoutes.get('/:id', getIdController)
stockRoutes.delete('/:id', deleteStockController)
stockRoutes.put('/', updateStockController)

module.exports=stockRoutes