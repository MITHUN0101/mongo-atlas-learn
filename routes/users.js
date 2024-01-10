const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://mithuny1998:KZQvegMrP8EthbVD@cluster0.4vj8e0f.mongodb.net/?retryWrites=true&w=majority");
//mongoose.connect("mongodb://127.0.0.1:27017/formDataSavePractice");

const userSchema = mongoose.Schema({
  username:String,
  email:String,
  password:String,
  message:String
});

module.exports = mongoose.model("userData",userSchema);