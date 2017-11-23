const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/register",(request, response)=>{
var userid = request.body.userid;
var password = request.body.password;
var User = require("./model/User");
var userObject = new User(userid, password);
const userOperations = require("./db/usercrud");
userOperations.addUser(userObject,response);
});

app.post("/login",(request, response)=>{
    var userid = request.body.userid;
    var password = request.body.password;
    var User = require("./model/User");
    var userObject = new User(userid, password);
    const userOperations = require("./db/usercrud");
    userOperations.findUser(userObject,response);
    });

app.get("/products",(request,response)=>{

});

app.listen(1234,()=>{
    console.log("Server Start....");
})