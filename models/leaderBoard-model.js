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
  const name = body.name
  const score = body.score
  const result = await leaderBoard.insertOne({name, score})
  return result.acknowledged
}
