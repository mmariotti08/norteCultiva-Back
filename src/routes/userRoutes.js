const userRoutes = require("express").Router();

const { getUserController } = require("../controllers/userController/getUserController");
const { getUserControllerID } = require("../controllers/userController/getUserControllerID");


userRoutes.get("/", getUserController)
userRoutes.get("/:id", getUserControllerID)

module.exports = userRoutes;