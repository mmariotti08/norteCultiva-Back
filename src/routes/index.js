const { Router } = require("express");
const userRoutes = require("./userRoutes")
const productsRoutes = require("./productsRoutes")

const router = Router();

router.use("/user", userRoutes);
router.use("/products", productsRoutes);

module.exports = router