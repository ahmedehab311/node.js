const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  nsme: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
});
const UserModal = mongoose.model("users", UserSchema);
module.exports = UserModal