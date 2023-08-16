const { Router } = require("express");
const userRoutes = require("./userRoutes")
const productsRoutes = require("./productsRoutes")
const stockRoutes = require('./stockRoutes')
const router = Router();

router.use("/user", userRoutes);
router.use("/products", productsRoutes);
router.use("/stock", stockRoutes)

module.exports = router;