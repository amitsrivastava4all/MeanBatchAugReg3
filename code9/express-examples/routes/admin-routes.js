const express = require("express");
const router = express.Router();
var counter =0;
router.post('/welcome',(request,response)=>{
        console.log('GET ', request.query);
        console.log('POST ',request.body);
        if(request.body.userid==request.body.pwd){
        //if(request.query.userid==request.query.pwd){
                 counter++;
                 response.send(`Welcome ${request.body.userid} ${counter}`);
        }
                else{
                    response.send('Invalid Userid or Password !');
                }
       
});
router.get('/logincheck',(request,response)=>{
    response.send('Login Check Logic Call ');
}) ; 

module.exports = router;