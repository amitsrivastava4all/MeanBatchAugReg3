const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
/*console.log("Express is  ", typeof express);
console.log("App is ",typeof app);
*/
app.set("views",__dirname+"/views");
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
const adminRoute = require("./routes/admin-routes");
app.use("/admin",adminRoute);

// Error Handling in Express JS
app.use(function (err, req, res, next) {
 // console.error(err.stack);
 res.render('error',{error:'OOPS Something went Wrong on Server Side'});
 // res.status(500).send('Something broke!')
});

app.use(function(req,res){
    res.render('error',{error:'OOPS U Type Something Wrong...'});
});

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
const PORT = process.env.port || 9999;
app.listen(PORT,()=>console.log("Server Start"));
