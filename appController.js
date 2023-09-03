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
    if (req.query.pass === process.env.DELETEPASS) {
      const data = await User.find().sort({ score: -1 });
      var x = 15;
      if (data.length >= x) {
        const limit = data[x - 1].score;
        await User.deleteMany({ score: { $lt: limit } });
      }
      res.status(200).json({
        message: "List cleared successfully",
      });
    } else {
      res.status(400).json({
        message: "Password Mismatch",
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
    if (req.body.pass === process.env.SINGLEDELETE) {
      var data = await User.findByIdAndDelete(req.body._id);
      res.status(200).json({
        message: "Deleted",
        deletedData: data,
      });
    } else {
      res.status(400).json({
        message: "Invalid Password",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "Failed",
      err,
    });
  }
};

exports.deleteAll = async (req, res) => {
  try {
    if (req.query.pass === process.env.DELETEPASS) {
      await User.deleteMany();
      res.status(200).json({ message: "Deleted Everything" });
      res.status(401).json({ error: "Unauthorized: Invalid Password." });
    }
  } catch (error) {
    console.error("Error deleting records:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
