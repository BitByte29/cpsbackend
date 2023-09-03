const express = require("express");
const cors = require("cors");
const control = require("./appController");

const app = express();
app.use(express.json());
app.use(cors());

//All environment variables need to be inserted in render website.
app.get("/", (req, res) => {
  // var data = [
  //   process.env.DELETEPASS || "one",
  //   process.env.SINGLEDELETE || "two",
  //   process.env.PORT,
  // ];
  // data = data.toString();
  // console.log(data);
  res.send("Server working");
});

app.get("/play", control.getData);
app.get("/deleteall", control.deleteAll);
app.get("/clear", control.clearList);
app.post("/play", control.postData);
app.delete("/play", control.deleteData);

module.exports = app;
