const User = require("./userschema");
const userOperations = {
addUser(userObject,response){
    User.create(userObject,function(error){
           if(error){
            response.send("Can't Add New User Some Problem in DB Side...");
           } 
           else{
               response.send("User Added SuccessFully...."); 
           }
    });
},
findUser(userObject, response){
    User.find({userid:userObject.userid,password:userObject.password},function(error,docs){
            if(error){
                response.send("Can't Fetch User Some Problem in DB Side...");
                return ;
            }
            if(docs.length>0){
                response.send("Welcome "+docs[0].userid);
            }
            else{
                response.send("Invalid Userid or Password");
            }
    });
}
}
module.exports = userOperations;