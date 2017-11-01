window.addEventListener("load",()=>{
						document.getElementById("greetBt").addEventListener("click",sayWelcome);
						document.getElementById("clearAll").addEventListener("click",clearData);
						document.getElementById("firstname").addEventListener("keyup",validate);
	document.getElementById("lastname").addEventListener("change",validate);
});

function validate(event){
	var txt = document.getElementById(event.srcElement.id);
	console.log(txt.value);
	//console.log("SRC ",event.srcElement.getAttribute("data-len"));
	var len = parseInt(event.srcElement.getAttribute("data-len"));
	if(txt.value.length<len){
		txt.nextSibling.nextSibling.innerHTML=`Name Shouldbe  greater than ${len}`;
	}
	else{
		txt.nextSibling.nextSibling.innerHTML="";
	}
}
/*window.addEventListener("load",init);
function init(){
document.getElementById("greetBt").addEventListener("click",sayWelcome);
}*/

function clearData(){
	document.getElementById("firstname").value="";
	document.getElementById("lastname").value="";
	document.getElementById("result").innerHTML="";
	document.getElementById("firstname").focus();
}

function sayWelcome(){
	var firstName = document.getElementById("firstname").value;
	var lastName = document.getElementById("lastname").value;
	//document.getElementById("result").innerHTML
	//	="Welcome "+initCap(firstName)+" "+initCap(lastName);
	document.getElementById("result").innerHTML
		= `Welcome ${initCap(firstName)}  and ${initCap(lastName)}`;
	//alert("Say Welcome Call");
}

function initCap(name){
return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
}