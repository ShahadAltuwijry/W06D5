//first import the packages you need
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./db/db");
const toDoRouter = require("./Routers/routes/todo");
const userRouter = require("./Routers/routes/user");

//instantiate express
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/todos", toDoRouter);
app.use("/user", userRouter);

//load enviroment variables
dotenv.config();

//defining port from env
const PORT = process.env.PORT;

//at the end adding app listener
app.listen(PORT, () => {
  console.log(`the server is on and running on ${PORT}`);
});
