window.addEventListener("load",bindEvents);
function bindEvents(){
	var numButtons = document.getElementsByClassName("num");
	for(let i = 0; i<numButtons.length; i++){
		numButtons[i].addEventListener("click",concat);
	}
	var oprButtons = document.getElementsByClassName("opr");
	for(let i = 0 ; i<oprButtons.length; i++){
		oprButtons[i].addEventListener("click",operation);
	}
	document.getElementById("compute").addEventListener("click",computeResult);
}
function computeResult(){
	var txt = document.getElementById("output");
	var secondNumber = txt.value;
	var result = calcOperations.add(firstNumber,secondNumber);
	txt.value = result;
}
var currentOperation ='';
var firstNumber;
var txtBlank = false;
function operation(event){
	 currentOperation = event.srcElement.innerHTML;
	txtBlank = true;
	
	
}

function concat(event){
	var txt = document.getElementById("output");
	if(txtBlank){
		firstNumber = txt.value;
		txt.value = '';
		txtBlank = false;
	}
	var currentNumber = event.srcElement.innerHTML;
	
	if(!parseInt(txt.value)){
		txt.value = currentNumber;
	}
	else{
		txt.value = txt.value + currentNumber;
	}
	//console.log("Concat Call....");
}