const express = require("express");

const dbHelper = require("../dbModel/dbModel.js");
const server = express();

server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).send("hi there");
});

module.exports = server;
