const http = require("http");
const express = require("express");
const app = express();

app.use(express.static("public"));

http.createServer(app).listen(8080, () => {
  console.log("Server is Online");
});
