const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("<h1>Hi</h1>");
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
