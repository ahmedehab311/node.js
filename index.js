require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");

// const email = process.env.EMAIL;
// const password = process.env.PASSWORD;

// const Article = require("./models/Article");
// const Counter = require("./models/Counter");

// const initializeCounter = async () => {
//   try {
//     const existingCounter = await Counter.findOne({ name: "articles" });
//     if (!existingCounter) {
//       const counter = new Counter({ name: "articles", value: 0 });
//       await counter.save();
//       console.log("Counter initialized.");
//     }
//   } catch (error) {
//     console.error("Error initializing counter:", error);
//   }
// };

// initializeCounter();

// mongoose
//   .connect(
//     `mongodb+srv://${email}:${password}@cluster0.vxdd8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
//   )
//   .then(() => {
//     console.log("connected successful");
//   })
//   .catch(() => {
//     console.log("error with connecting with database");
//   });
// const app = express();
// app.use(express.json());

// app.get("/hello", (req, res) => {
//   res.send("hello");
// });

// app.get("/numbers", (req, res) => {
//   let numbers = "";
//   for (let i = 0; i <= 100; i++) {
//     numbers += i + "-";
//   }
//   res.render("numbers.ejs", {
//     name: "ahmedd",
//     age: "16",
//     numbers: numbers,
//   });
// });
// app.get("/info", (req, res) => {
//   res.send("info here");
// });

// app.get("/findSummation/:number1/:number2", (req, res) => {
//   const num1 = req.params.number1;
//   const num2 = req.params.number2;
//   const total = Number(num1) + Number(num2);
//   res.send(`the numbers are :${total}`);
// });

// app.get("/sayhello", (req, res) => {
//   //   console.log(req.body);
//   //   console.log(req.query);
//   res.json({
//     name: req.body.name,
//     age: req.query.age,
//     lang: "en",
//     lang2: "ar",
//   });
//   //   res.send(`hello ${req.body.name} your age is${req.query.age}`);
// });
// //  articles endpoints

// app.post("/articles", async (req, res) => {
//   try {
//     const newArticle = new Article();

//     const articleTitle = req.body.articleTitle;
//     const artBody = req.body.articlebody;

//     newArticle.title = articleTitle;
//     newArticle.body = artBody;
//     newArticle.numberOfLikes = 0;

//     const counter = await Counter.findOneAndUpdate(
//       { name: "articles" }, // اسم العداد
//       { $inc: { value: 1 } }, // زيادة القيمة بـ 1
//       { new: true, upsert: true } // إنشاء العداد إذا لم يكن موجوداً
//     );
//     newArticle.id = counter.value;

//     await newArticle.save();

//     res.json({
//       message: "Article created successfully!",
//       article: newArticle,
//     });
//   } catch (error) {
//     console.error("Error creating article:", error);
//     res.status(500).json({ error: "Error creating article" });
//   }
// });
// app.get("/articles", (req, res) => {
//   Article.find()
//     .then((articles) => res.json(articles))
//     .catch((err) => res.json(err));
// });
// app.delete("/articles/:articleId", async (req, res) => {
//   const id = req.params.articleId;
//   const article = await Article.findById(id);

//   res.json(article);
// });
// app.listen(3001, () => {
//   console.log("iam listing in port 3001");
// });
// const express = require("express");
// const path = require("path");
// const app = express();

// app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./index.html"));
// });
// app.listen(5000, () => {
//   console.log("Server is running on port 5000");
// });

const express = require("express");
const path = require("path");
const app = express();

//  custom middleware logger

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.path}`);
//   next();
// });
// app.use(express.urlencoded({ extended: false }));

// app.use(express.json());
// app.get("^/$|/index(.html)?", (req, res) => {
//   // res.sendFile("./views/index.html", { root: __dirname });
//   res.sendFile(path.join(__dirname, "views", "index.html"));
// });
// app.get("/new-page(.html)?", (req, res) => {
//   res.sendFile("./views/index.html", { root: __dirname });
//   // res.redirect(301, "/new-page.html");
// });
// app.get("/old-page(.html)?", (req, res) => {
//   res.redirect(301, "/new-page.html");
// });
// app.get(
//   "/hello(.html)?",
//   (req, res, next) => {
//     console.log("hello load ");
//     next();
//   },
//   (req, res) => {
//     res.send("hello wrld");
//   }
// );

// const one = (req, res, next) => {
//   console.log("one");
//   next();
// };
// const two = (req, res, next) => {
//   console.log("two");
//   next();
// };
// const three = (req, res, next) => {
//   console.log("three");
//   res.send("finshed");
// };
// app.get("/chain(.html)?", [one, two, three]);

// app.get("*/", (req, res) => {
//   res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
// });

const mongoose = require("mongoose");

const USER_NAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;

mongoose
  .connect(
    `mongodb://${USER_NAME}:${PASSWORD}@cluster0-shard-00-00.vxdd8.mongodb.net:27017,cluster0-shard-00-01.vxdd8.mongodb.net:27017,cluster0-shard-00-02.vxdd8.mongodb.net:27017/?replicaSet=atlas-alo0rp-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("connected successful");
  })
  .catch(() => {
    console.log("error with connecting with database");
  });

const UserModal = require("./models/User");

const cors = require("cors");
app.use(cors());
app.get("/users", async (req, res) => {
  const users = await UserModal.find();
  res.json(users);
});
app.listen(5000, () => {
  console.log("server is running in 5000");
});
