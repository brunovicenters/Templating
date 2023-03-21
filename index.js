const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/rand", (req, res) => {
  const numRand = Math.floor(Math.random() * 10) + 1;
  res.render("random.ejs", { numRand });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render("subreddit", { ...data });
  } else {
    res.render("notfound", { subreddit });
  }
});

app.get("/cats", (req, res) => {
  const cats = ["Kiki", "Winston", "Mike", "Rocket"];
  res.render("cats", { cats });
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
