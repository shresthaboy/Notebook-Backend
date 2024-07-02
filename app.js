const express = require("express");
const app = express();
const notesRouter = require("./controllers/note");
const middleware = require("./utils/middleware")
const userRouter = require("./controllers/user")
const database = require('./service/db');

//using the imported middleware and it's requestmiddleware function
app.use(middleware.requestmiddleware);
app.use("/api/users", userRouter);
app.use("/api/notes", notesRouter);
app.use(middleware.unknownEndPoint);
app.use(middleware.errorhandlerMiddleware);


module.exports = app;
