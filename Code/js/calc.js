// + - * /
// This is Model (Logic)

function calcOperation(firstNo, secondNo, operator){
	var expression = firstNo + operator + secondNo;
	//console.log("Expression is ",expression);
	return eval(expression);
}

// this is Object Oriented Style
/*class Calculator
{
add(firstNo, secondNo){
return parseInt(firstNo) + parseInt(secondNo);
}
subtract(firstNo , secondNo){
return firstNo - secondNo;
}
multiply(firstNo , secondNo){
return firstNo * secondNo;
}
divide(firstNo , secondNo){
return firstNo / secondNo;
}
}*/

// this is functional style code
/*
function add(firstNo, secondNo){
return parseInt(firstNo) + parseInt(secondNo);
}

function subtract(firstNo , secondNo){
return firstNo - secondNo;
}

function multiply(firstNo , secondNo){
return firstNo * secondNo;
}

function divide(firstNo , secondNo){
return firstNo / secondNo;
}*/
