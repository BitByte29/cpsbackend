const mongoose = require("mongoose");
const app = require("./app");

//DB URL
// const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.OTHER_PASS);
const DB =
  "mongodb+srv://Hritik:mongodbpass@cluster0.iny9g1z.mongodb.net/?retryWrites=true&w=majority";
// console.log(DB);
// DB connection
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
