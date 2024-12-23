require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

mongoose
  .connect(
    `mongodb+srv://${email}:${password}@cluster0.vxdd8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("connected successful");
  })
  .catch(() => {
    console.log("error with connecting with database");
  });
const app = express();
app.use(express.json());
app.get("/hello", (req, res) => {
  res.send("hello");
});

app.get("/numbers", (req, res) => {
  let numbers = "";
  for (let i = 0; i <= 100; i++) {
    numbers += i + "-";
  }
  res.render("numbers.ejs", {
    name: "ahmedd",
    age: "16",
    numbers: numbers,
  });
});
app.get("/info", (req, res) => {
  res.send("info here");
});

app.get("/findSummation/:number1/:number2", (req, res) => {
  const num1 = req.params.number1;
  const num2 = req.params.number2;
  const total = Number(num1) + Number(num2);
  res.send(`the numbers are :${total}`);
});

app.get("/sayhello", (req, res) => {
  //   console.log(req.body);
  //   console.log(req.query);
  res.json({
    name: req.body.name,
    age: req.query.age,
    lang: "en",
    lang2: "ar",
  });
  //   res.send(`hello ${req.body.name} your age is${req.query.age}`);
});

app.listen(3001, () => {
  console.log("iam listing in port 3001");
});
