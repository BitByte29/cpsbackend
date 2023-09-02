const express = require("express");
const cors = require("cors");
const control = require("./appController");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server working");
});

app.get("/play", control.getData);

app.get("/deleteall", control.deleteAll);

app.post("/play", control.postData);

app.delete("/play", control.deleteData);

module.exports = app;
