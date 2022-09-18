const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/students-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("successfully connection has been established with database");
  })
  .catch((err) => {
    console.log(`cannot connect with data due to error : ${err}`);
  });
