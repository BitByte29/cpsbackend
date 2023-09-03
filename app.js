const express = require("express");
const cors = require("cors");
const control = require("./appController");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  var data = [
    process.env.DELETEPASS,
    process.env.SINGLEDELETE,
    process.env.PORT,
  ];
  data = data.toString();
  console.log(data);
  res.send("Server working " + data);
});

app.get("/play", control.getData);
app.get("/deleteall", control.deleteAll);
app.get("/clear", control.clearList);
app.post("/play", control.postData);
app.delete("/play", control.deleteData);

module.exports = app;
