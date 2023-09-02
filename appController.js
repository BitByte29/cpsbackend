const User = require("./user_model");

exports.getData = async (req, res) => {
  try {
    var data = User.find();
    data = data.sort("-score");
    data = await data.limit(10);
    res.send(data);
  } catch (err) {
    res.status(400).json({
      message: "Failed",
      err,
    });
  }
};

exports.clearList = async (req, res) => {
  try {
    if (req.query.pass === "hunter29") {
      const data = await User.find().sort({ score: -1 });
      var x = 15;
      if (data.length >= x) {
        const limit = data[x - 1].score;
        await User.deleteMany({ score: { $lt: limit } });
      }
      res.status(200).json({
        message: "List cleared successfully",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "Failed",
      error: err.message,
    });
  }
};

exports.postData = async (req, res) => {
  try {
    var data = await User.create(req.body);
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (err) {
    res.status(400).json({
      message: "Failed",
      err,
    });
  }
};

exports.deleteData = async (req, res) => {
  try {
    var data = await User.findByIdAndDelete(req.body._id);
    res.status(401).json({
      message: "Deleted",
      deletedData: data,
    });
  } catch (err) {
    res.status(400).json({
      message: "Failed",
      err,
    });
  }
};

exports.deleteAll = async (req, res) => {
  const pass = req.query.pass;
  console.log(pass);
  if (pass === "hunter29") {
    await User.deleteMany();
    res.send("Deleted Everything");
  } else {
    res.send("Invalid Password.");
  }
};
