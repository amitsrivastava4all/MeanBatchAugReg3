// function add(x,y){
//     return x  + y;
// }
// function subtract(x,y){
//     return x - y;
// }
// module.exports = add;
// module.exports.sub = subtract;

// class Calc{
//     add(x,y){
//         return x + y;
//     }
//     subtract(x,y){
//         return x - y;
//     }
// }
// module.exports = Calc;

// module.exports=function(x,y){
//     return x + y;
// }
// module.exports.sub=function(x,y){
//     return x- y;
// }
// module.exports.mul=function(x,y){
//     return x*y;
// }
const ArithmeticOperationsClass = require("./realoperations");
const calcOperations={
    operation(opr){
            var obj = new ArithmeticOperationsClass();
            if(opr=='+'){
                return obj.add(10,200);
            }
            else if(opr=='-'){
                return obj.subtract(10,20);
            }
            else{
                return obj.mul(10,20);
            }

    }
}
module.exports = calcOperations;