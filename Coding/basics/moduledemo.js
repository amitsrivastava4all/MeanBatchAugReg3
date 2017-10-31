const fs = require("fs");

// Non Blocking Code
// fs is a file system module in node js
/*function callBack(error, content){
    if(error){
        console.log("Error During Reading this file");
    }
    else{
        console.log("Content is "+content);
    }
}
fs.readFile("firstdemo.js",callBack);
*/

// Blocking Code
// var content = fs.readFileSync("firstdemo.js");
// console.log("Content is "+content);
// var content2 = fs.readFileSync("firstdemo.js");
// console.log("Content is "+content2);
function add(x,y){
    return x + y;
}
console.log("Sum is ",add(10,20));
for(let i = 1; i<=10; i++){
    console.log("I is ",i);
}

// to read big files
// { highWaterMark: 128 * 1024 }
const fstream = fs.createReadStream("firstdemo.js");
const fwstream = fs.createWriteStream("demo2.js");
fstream.pipe(fwstream);
// fstream.on("data",function(chunk){
//     fwstream.write(chunk);
//     console.log("Chunk is "+chunk);
// });
// fstream.on("end",function(){
//     console.log("Stream End");
// })
const path = require("path");
const newpath = path.join(__dirname,"/x/y/demo2.js");
console.log("New Path is ",newpath);
fs.readFile(newpath,function(err, content){
    console.log("New Content is "+content);
})
console.log(__dirname);
console.log(__filename);
//fs.readFile(__dirname)