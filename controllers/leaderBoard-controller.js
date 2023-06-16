const {fetchLeaderBoard, postScore} = require("../models/leaderBoard-model")

exports.getLeaderBoard = (req, res, next) => {
    fetchLeaderBoard().then((scores) => {
        res.send({scores})
    }).catch(err=>next(err))
 
}

exports.sendScore = (req, res, next) => {
    postScore(req.body).then((scores) => {
        res.send({scores})
    }).catch(err=>next(err))
}
