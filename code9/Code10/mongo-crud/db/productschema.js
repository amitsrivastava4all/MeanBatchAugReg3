const connection = require("./connection");
const Schema = connection.Schema;
var productSchema = new Schema({id:Number, name:String, price:Number,url:String});
var ProductModel = connection.model("products",productSchema);
module.exports = ProductModel;