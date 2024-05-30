const gameController = require("../_controllers/gameController");
const express = require("express");
const gameRouter = express.Router();

gameRouter.get("/allGames", gameController.getAllReview);
gameRouter.post("/createReview", gameController.makeReview);
gameRouter.delete("/delete", gameController.deleteReview);
gameRouter.put("/update/:id", gameController.updateReview);

module.exports = gameRouter;