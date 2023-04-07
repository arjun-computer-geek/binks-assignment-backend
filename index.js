const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const user = require("./Routes/userRoutes");
const errorMiddleware = require("./middleware/error");

const app = express();

//setting don env congigration
dotenv.config({ path: "./config/config.env" });

//connecting database
connectDatabase();

// using global middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// mounting routes
app.use("/api/v1", user);

//Middleware to handle error
app.use(errorMiddleware);
//listning server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port : ${process.env.PORT}`);
});
