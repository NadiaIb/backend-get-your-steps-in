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
    return err;
  }
};

exports.postScore = async (name, score, createdAt) => {
  const result = await leaderBoard.insertOne({ name, score, createdAt });
  if (result.acknowledged) {
    const insertedData = {
      _id: result.insertedId,
      name: name,
      score: score,
      createdAt: createdAt,
    };
    return {
      acknowledgedment: true,
      data: insertedData,
    };
  } else {
    return {
      acknowledgedment: false,
      data: null,
    };
  }
  return result.acknowledged;
};
