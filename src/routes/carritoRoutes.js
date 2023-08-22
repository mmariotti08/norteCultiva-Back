const carritoRoutes = require("express").Router();


const { getCardController } = require("../controllers/carritoController/getCardController")
const { createCardController } = require("../controllers/carritoController/createCardController")
const { deleteCardController } = require("../controllers/carritoController/deleteCardController")


carritoRoutes.get("/", getCardController)
carritoRoutes.post("/", createCardController)
carritoRoutes.delete("/:id", deleteCardController)


module.exports = carritoRoutes