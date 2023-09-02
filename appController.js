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
