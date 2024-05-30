const userController = require("../_controllers/userController");
const express = require("express");
const userRouter = express.Router();

userRouter.post("/signup", userController.signUp);
userRouter.post("/login", userController.login);
userRouter.post("/getById", userController.getUserbyId);

module.exports = userRouter;