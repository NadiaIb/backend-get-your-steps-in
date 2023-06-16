const leaderBoard = require("../database/db-connection");

exports.fetchLeaderBoard = async () => {
  const sort = { score: -1 };
  const score = await leaderBoard
    .find({})
    .sort(sort)
    .toArray(function (err, result) {
      return result;
    });
  return score;
};

exports.postScore = async (body) => {
  const score = await leaderBoard.insertOne({ body })
  console.log(score)
}
