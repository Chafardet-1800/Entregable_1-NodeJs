const express = require("express");
const toDoRouter = require('./to_do_list/toDo.routers').router

const app = express();

app.use(express.json());

app.use('/ToDoList/v1', toDoRouter)

app.listen(8000, () => {
    console.log("Server started at port 8000");
  });