const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleScema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  numberOfLikes: { type: Number, default: 0 },
});

const Article = mongoose.model("Article", articleScema);

module.exports = Article;
