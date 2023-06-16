const express = require('express')
const { getLeaderBoard, sendScore } = require('./controllers/leaderBoard-controller')
const app = express()

// endpoints
app.get("/api", (req, res) => {
    res.send({msg: "api is working"})
})

app.get("/api/leaderboard", getLeaderBoard)
app.post("/api/leaderboard", sendScore)


// error handlers


module.exports = app
