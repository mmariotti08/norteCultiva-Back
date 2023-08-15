const userRoutes = require("express").Router();

const { getUserController } = require("../constrollers/userController/getUserController");
const { getUserControllerID } = require("../constrollers/userController/getUserControllerID");


userRoutes.get("/", getUserController)
userRoutes.get("/:id", getUserControllerID)

module.exports = userRoutes;