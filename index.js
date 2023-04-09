const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const user = require("./Routes/userRoutes");
const post = require("./Routes/postRoutes");
const errorMiddleware = require("./middleware/error");
const comment = require("./Routes/commentRoutes");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

//setting don env congigration
dotenv.config({ path: "./config/config.env" });

//connecting database
connectDatabase();

// using global middlewares
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// mounting routes
app.use("/api/v1", user);
app.use("/api/v1", post);
app.use("/api/v1", comment);
//Middleware to handle error
app.use(errorMiddleware);
//listning server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port : ${process.env.PORT}`);
});
