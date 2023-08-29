const orderRoutes = require('express').Router();

const {createOrderController}=require('../controllers/order/createOrderController.js');
const {getOrderController}=require('../controllers/order/getOrderController.js');
const {getIdController}=require('../controllers/order/getIdController.js')

orderRoutes.post('/', createOrderController);
orderRoutes.get('/', getOrderController);
orderRoutes.get('/:id', getIdController)

module.exports=orderRoutes