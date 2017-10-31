// const calcAdd = require("./calc");
// console.log(calcAdd);
// var result = calcAdd(100,200);
// console.log(`Sum is ${result}`);
// console.log(calcAdd.sub(100,200));
// console.log(calcAdd.mul(100,200));

/*const CalcClass = require("./calc");
var obj = new CalcClass();
console.log(obj.add(100,200));
console.log(obj.subtract(10,20));*/


const calcObject = require("./calc");
console.log("Addition ",calcObject.operation('+'));
console.log("Subtraction ",calcObject.operation('-'));
console.log("Multiply ",calcObject.operation('*'));