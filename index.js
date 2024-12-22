const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send("hello");
});

app.get("/hi", (req, res) => {
  res.send("you vistied hi");
});
app.get("/info", (req, res) => {
  res.send("info here");
});
app.post("/addCommint", (req, res) => {
  res.send("post requst on add comment");
});
app.listen(3001, () => {
  console.log("iam listing in port 3001");
});
