const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        next();
    });

   
app.set('view engine','ejs');
app.set('views',__dirname+"/views");
app.use(function (req, res, next) {
    res.sendFile(__dirname+"/public/error.html");
    //res.status(404).send("Sorry can't find that!");
   
  });
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

app.post("/addproduct",(request,response)=>{
    var id = request.body.id;
    var name = request.body.name;
    var price = request.body.price;
    var url = request.body.url;
    const Product = require("./model/Product");
    var productObject = new Product(id,name,price,url);
    var productOperations = require("./db/productcrud");
    productOperations.addProduct(productObject,response);
});

app.get("/showproductsjson",(request,response)=>{
    app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
    var productOperations = require("./db/productcrud");
    const Product = require("./model/Product");
    var price = request.query.price;
    if(!price){
        price = 0;
    }
    var productObject = new Product(0,"",price,"");
    productOperations.findProductJSON(productObject,response);
});

app.get("/showproducts",(request,response)=>{
    var productOperations = require("./db/productcrud");
    const Product = require("./model/Product");
    
    var productObject = new Product(0,"",0,"");
    productOperations.findProduct(productObject,response);
});

app.listen(1234,()=>{
    console.log("Server Start....");
})