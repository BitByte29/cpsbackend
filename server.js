const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });
//DB URL
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.PASS);

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB Connection Successful");
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listning at port ${PORT}`);
});
