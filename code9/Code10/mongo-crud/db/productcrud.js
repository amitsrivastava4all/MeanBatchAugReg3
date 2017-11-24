const Product = require("./productschema");
const productOperations = {
addProduct(productObject,response){
    Product.create(productObject,function(error){
           if(error){
            response.send("Can't Add New Product Some Problem in DB Side...");
           } 
           else{
               response.send("Product Added SuccessFully...."); 
           }
    });
},
findProductJSON(productObject, response){
    Product.find({price:{$gt:productObject.price}},function(error,docs){
            if(error){
                response.send("Can't Fetch Product Some Problem in DB Side...");
                return ;
            }
            if(docs.length>0){
              response.json(docs);
                //const productHelper = require("../helper/ProductHelper");
              //productHelper.printProducts(docs,response);  
                //response.send("Welcome "+docs[0].userid);
            }
            else{
                response.send("Invalid Userid or Password");
            }
    });
}
,
findProduct(productObject, response){
    Product.find({price:{$gt:productObject.price}},function(error,docs){
            if(error){
                response.send("Can't Fetch Product Some Problem in DB Side...");
                return ;
            }
            if(docs.length>0){
              const productHelper = require("../helper/ProductHelper");
              productHelper.printProducts(docs,response);  
                //response.send("Welcome "+docs[0].userid);
            }
            else{
                response.send("Invalid Userid or Password");
            }
    });
}
}
module.exports = productOperations;