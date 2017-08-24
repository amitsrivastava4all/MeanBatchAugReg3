// It is a Glue b/w view (Html) and Model
// DOM Code

window.addEventListener("load",init);

function init(){
	var buttons = document.getElementsByClassName("opr");
	for(let i = 0 ; i<buttons.length; i++){
		buttons[i].addEventListener("click",doOperation);
	}
	//document.getElementById("add").addEventListener("click",doOperation);
	//document.getElementById("sub").addEventListener("click",doOperation);
}

function doValidate(str,id,msg){
	var result = true;
	if(isBlank(str)){
		document.getElementById(id).innerHTML=msg;
		result =false;
	}
	else{
		document.getElementById(id).innerHTML="";	
	}
	return result;
}

function doOperation(event){
	var result = 0;
	var operation = event.srcElement.innerHTML;
	//var operation = event.srcElement.getAttribute("data-operation");
	var firstNo = document.getElementById("firstno").value;
	var secondNo = document.getElementById("secondno").value;
	var isFail = false;
	if(!doValidate(firstNo,"firsterror","First No Can't Be Blank")){
		isFail = true ;
	}
	if(!doValidate(secondNo,"seconderror","Second No Can't be Blank")){
		isFail = true;
	}
	if(isFail){
		return ;
	}
	result = calcOperation(firstNo,secondNo,operation);
	//var obj = new Calculator();
	//result = obj[operation](firstNo,secondNo);
	/*if(operation=="+"){
		result = obj.add(firstNo,secondNo);
	}
	else
	if(operation =="-"){
		result = obj.subtract(firstNo, secondNo);
	}
	else
	if(operation == "*"){
		result = obj.multiply(firstNo,secondNo);
	}
	else
	if(operation =="/"){
		result = obj.divide(firstNo,secondNo);
	}*/	
	document.getElementById("result").innerHTML = result;
	
}