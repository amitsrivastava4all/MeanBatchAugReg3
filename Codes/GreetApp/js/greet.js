window.addEventListener("load",()=>{
						document.getElementById("greetBt").addEventListener("click",sayWelcome);
						document.getElementById("clearAll").addEventListener("click",clearData);
});
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