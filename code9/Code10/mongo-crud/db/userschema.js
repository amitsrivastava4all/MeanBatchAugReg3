const connection = require("./connection");
const Schema = connection.Schema;
var userSchema = new Schema({userid:String, password:String});
var UserModel = connection.model("usermasters",userSchema);
module.exports = UserModel;