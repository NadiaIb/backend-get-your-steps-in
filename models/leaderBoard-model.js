const leaderBoard = require("../database/db-connection");

exports.fetchLeaderBoard = async () => {
  const sort = { score: -1 };
  try {
    const score = await leaderBoard
      .find({})
      .sort(sort)
      .toArray(function (err, result) {
        return result;
      });
    return score;
  } catch (err) {
    return err
  }
};

exports.postScore = async (name, score) => {
  const result = await leaderBoard.insertOne({name, score})
  return result.acknowledged
}
