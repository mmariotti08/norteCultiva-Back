const { Router } = require("express");
const userRoutes = require("./userRoutes")
const productsRoutes = require("./productsRoutes")
const stockRoutes = require('./stockRoutes')
const orderRoutes = require('./orderRoutes')
const router = Router();

router.use("/user", userRoutes);
router.use("/products", productsRoutes);
router.use("/stock", stockRoutes)
router.use("/orider", orderRoutes)

module.exports = router;