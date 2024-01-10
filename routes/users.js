const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://mithundesigner01:test@cluster0.efwryap.mongodb.net/?retryWrites=true&w=majority");
//mongoose.connect("mongodb://127.0.0.1:27017/formDataSavePractice");

const userSchema = mongoose.Schema({
  username:String,
  email:String,
  password:String,
  message:String
});

module.exports = mongoose.model("userData",userSchema);