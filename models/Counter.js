const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const counterSchema = new Schema({
  name: String, // اسم العداد (مثل "articles")
  value: Number, // القيمة الحالية للعداد
});

const Counter = mongoose.model("Counter", counterSchema);

module.exports = Counter;
