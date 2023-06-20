const { getLeaderBoard, sendScore, getSevenDay } = require("../controllers/leaderBoard-controller")

const leaderBoardRouter = require("express").Router();

leaderBoardRouter.get("/leaderboard", getLeaderBoard);
leaderBoardRouter.get("/leaderboard/sort", getSevenDay);
leaderBoardRouter.post("/leaderboard", sendScore);

module.exports = leaderBoardRouter;