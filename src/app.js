const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

require("./db/conn");
const studentRouter = require("./routers/student");

app.use(express.json());
app.use(studentRouter);
app.use(cors());

app.listen(port, () => {
  console.log(`successfully listening to the post ${port}`);
});
