const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const app = express();
//setting don env congigration
dotenv.config({ path: "./config/config.env" });

//connecting database
connectDatabase();

//listning server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port : ${process.env.PORT}`);
});
