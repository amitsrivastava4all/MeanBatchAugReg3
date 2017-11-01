const express = require("express");
const app = express();
const bodyParser = require("body-parser");
/*console.log("Express is  ", typeof express);
console.log("App is ",typeof app);
*/

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
const adminRoute = require("./routes/admin-routes");
app.use("/admin",adminRoute);
// app.post('/welcome',(request,response)=>{
//         console.log('GET ', request.query);
//         console.log('POST ',request.body);
//         if(request.body.userid==request.body.pwd){
//         //if(request.query.userid==request.query.pwd){
//                  counter++;
//                  response.send(`Welcome ${request.body.userid} ${counter}`);
//         }
//                 else{
//                     response.send('Invalid Userid or Password !');
//                 }
       
// });
// app.get('/logincheck',(request,response)=>{
//     response.send('Login Check Logic Call ');
// }) ;   
const PORT = 9999;
app.listen(PORT,()=>console.log("Server Start"));
