const express = require("express");
//route import
const productRouter = require("./routes/productroute");
const errorMiddleware = require("./middleWare/error");

const app = express();

app.use(express.json());

app.use("/api/v1", productRouter);

//middleware for error

app.use(errorMiddleware);

module.exports = app;
