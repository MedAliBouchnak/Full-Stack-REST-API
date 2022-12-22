const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });

const app = express();
app.use(express.json());
//Connect to Mongoose atlas
mongoose
  .connect(process.env.atlas_Link, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("DataBase is connected"))
  .catch((err) => console.log(err));
app.use("/users", require("./Routes/useRoutes"));

const PORT = process.env.port;
app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log("server is running on port", PORT, "...");
});
