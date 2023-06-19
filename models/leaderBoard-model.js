const leaderBoard = require("../database/db-connection");
const moment = require('moment')

exports.fetchLeaderBoard = async () => {
  const sort = { score: -1 };
  const sevenDays = moment().subtract(7, 'days').toDate() 
   try {
    const score = await leaderBoard
      .find({createdAt : { $gte: sevenDays } })
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
