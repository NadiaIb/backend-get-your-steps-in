const {fetchLeaderBoard, postScore} = require("../models/leaderBoard-model")

exports.getLeaderBoard = (req, res, next) => {
    fetchLeaderBoard().then((scores) => {
        res.send({scores})
    }).catch(err=>next(err))
 
}

exports.sendScore = (req, res, next) => {
    console.log(req)
    postScore(req.body).then((acknowledgement) => {
        res.status(201).send({acknowledgement})
    }).catch(err=>next(err))
}
