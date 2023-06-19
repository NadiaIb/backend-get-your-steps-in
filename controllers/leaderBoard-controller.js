const {fetchLeaderBoard, postScore} = require("../models/leaderBoard-model")

exports.getLeaderBoard = (req, res, next) => {
    fetchLeaderBoard().then((scores) => {
        res.send({scores})
    }).catch(err=>next(err))
 
}

exports.sendScore = (req, res, next) => {
    const name = req.body.name
    const score = req.body.score
    const createdAt = new Date(Date.now()).toString()
    if (name && score && typeof score === "number" && typeof name === "string") {
        postScore(name, score, createdAt).then((acknowledgement) => {
            res.status(201).send({acknowledgement})
        }).catch(err=>next(err))
    } else (next({status: 400, msg: "Bad request"}))
}
