const { MongoClient } = require("mongodb");

const ENV = process.env.NODE_ENV || "production";
require("dotenv").config({
    path: `${__dirname}/../.env.${ENV}`,
});

const uri = `mongodb+srv://ctrlaltelite33:${process.env.DB_PASSWORD}@cluster0.kbbxkxx.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);
const cluster = client.db("get-your-steps-in");
const dbName = process.env.DB_NAME
const leaderBoard = cluster.collection(dbName);


module.exports = leaderBoard
