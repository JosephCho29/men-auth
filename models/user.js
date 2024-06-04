const mongoose = require("mongoose");

//Make a schema:a blue print//
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
//Model = a name + a schema //
const User = mongoose.model("User", userSchema);

module.exports = User;
