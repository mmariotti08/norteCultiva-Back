const { Router } = require("express");

const userRoutes = require("./userRoutes")
const productsRoutes = require("./productsRoutes")
const stockRoutes = require('./stockRoutes')
const orderRoutes = require('./orderRoutes')
const carritoRoutes = require("./carritoRoutes");

const router = Router();

router.use("/user", userRoutes);
router.use("/products", productsRoutes);
router.use("/stock", stockRoutes)
router.use("/orider", orderRoutes)
router.use("/carrito", carritoRoutes);


module.exports = router;