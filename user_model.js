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
    type: Date,
    // default: Date.now.toString.toDateString(), //Wil change later
  },
});

var User = mongoose.model("user", UserSchema);
module.exports = User;
