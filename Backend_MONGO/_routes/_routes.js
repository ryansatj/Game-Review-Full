const express = require("express");
const userRouter = require("./userRoute.js");
const gameRouter = require("./gameRoute.js");

const router = express.Router();

router.use("/user", userRouter);
router.use("/game", gameRouter);
module.exports = router;
