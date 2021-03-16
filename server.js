const { response } = require("express");
const express = require("express");
const app = express();

app.get("/home", (request, response, next) => {
  response.end("Hi this is Home page!");
});

app.post("/rs", (request, response, next) => {
  response.status(201);
  response.send("inside send");
  response.end("response from ended..!");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  return console.log("we are using nodemon on 4000");
});
