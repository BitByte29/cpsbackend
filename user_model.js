const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "John",
  },
  time: {
    type: Number,
  },
  score: Number,
  date: {
    type: String,
  },
});

var User = mongoose.model("user", UserSchema);
module.exports = User;
