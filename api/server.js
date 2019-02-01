const express = require("express");

const dbHelper = require("../dbModel/dbModel.js");
const server = express();

server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).send("hi there");
});

server.post("/", async (req, res) => {
  let id = await dbHelper.insert(req.body);
  res.status(201).json(id);
});

server.delete("/", async (req, res) => {
  let count = await dbHelper.remove(req.body);
  res.status(200).json(count);
});

module.exports = server;
