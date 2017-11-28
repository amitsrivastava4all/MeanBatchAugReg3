const express = require("express");
const app = express();
app.use(express.static("public"));
app.get('/sendmails',(req,res)=>{
        var recEmail = req.query.recEmail;
        var message = req.query.message;
        console.log("Message is "+message +" Rec Email is "+recEmail);
        var mail = require("./mail");
        mail(recEmail,message,res);
})
app.listen(1234,()=>{
    console.log("Server Start...");
});