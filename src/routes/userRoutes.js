const userRoutes = require("express").Router();

const { getUserController } = require("../controllers/userController/getUserController");
const { getUserControllerID } = require("../controllers/userController/getUserControllerID");
const { createUserController } = require("../controllers/userController/createUserController");


userRoutes.get("/", getUserController)
userRoutes.get("/:id", getUserControllerID)
userRoutes.post("/", createUserController)


module.exports = userRoutes;