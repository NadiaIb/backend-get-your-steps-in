const { getLeaderBoard, sendScore } = require("../controllers/leaderBoard-controller")

const leaderBoardRouter = require("express").Router();

leaderBoardRouter.get("/leaderboard", getLeaderBoard);
leaderBoardRouter.post("/leaderboard", sendScore);

module.exports = leaderBoardRouter;