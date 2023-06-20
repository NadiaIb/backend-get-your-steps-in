const express = require('express')
const cors = require("cors")

const leaderBoardRouter = require("./routes/leaderboard-router");
const app = express()
app.use(express.json())
app.use(cors())

// endpoints
app.get("/api", (req, res) => {
    res.send({msg: "api is working"})
})

app.use("/api", leaderBoardRouter)


// error handlers  
app.use((err, req, res, next) => {
    //   console.log(err)
      if (err.status && err.msg) {
          res.status(err.status).send({ msg: err.msg });
      } else {
          next(err)
      }
  });
  
  
  app.use((err, req, res, next) => {
      res.status(500).send({msg: 'Server error!'})
  })
  

module.exports = app
