const userRoutes = require("express").Router();


const { getUserController } = require("../controllers/userController/getUserController");
const { getUserControllerID } = require("../controllers/userController/getUserControllerID");

const { createUserController } = require("../controllers/userController/createUserController");
const { loginUserCompare } = require("../controllers/userController/loginUserCompare");

const { updateUserController } = require("../controllers/userController/updateUserController");
const { updAdministratorController } = require("../controllers/userController/updAdministratorController");
const { updateAdmController } = require("../controllers/userController/updateAdmController");

const { deleteUserController } = require("../controllers/userController/deleteUserController");




userRoutes.get("/", getUserController)
userRoutes.get("/:id", getUserControllerID)

userRoutes.post("/", createUserController)
userRoutes.post("/login", loginUserCompare)


userRoutes.put("/adm/:id", updAdministratorController)


userRoutes.put("/:id", updateUserController)
userRoutes.put("/act/:id", updateAdmController)

userRoutes.delete("/:id", deleteUserController)


module.exports = userRoutes;