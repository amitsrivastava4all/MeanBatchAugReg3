window.addEventListener("load",bindEvents);

function bindEvents(){
	document.getElementById('add').addEventListener("click",addItem);
}

function addItem(){
	var itemNo = document.getElementById("itemno").value;
	var itemName = document.getElementById("itemname").value;
	var itemDesc = document.getElementById("descr").value;
	var itemDate = document.getElementById("itemdate").value;
	var itemColor = document.getElementById("itemcolor").value;
	var itemBranch = document.getElementById("itembranch").value;
	itemOperations.addItem(itemNo,itemName,itemDesc, itemDate, itemBranch , itemColor);
	var lastObject = itemOperations.itemList[itemOperations.itemList.length-1];
	printRecord(lastObject);
	
}

function printRecord(itemObject){
	var tbody = document.getElementById("itemtable");
	var tr = tbody.insertRow();
	var index = 0;
	for(let key in itemObject){
		tr.insertCell(index).innerHTML = itemObject[key];
		index++;
	}
	//tr.insertCell(0).innerHTML = itemObject.id;
	//tr.insertCell(1).innerHTML = itemObject.name;
}
