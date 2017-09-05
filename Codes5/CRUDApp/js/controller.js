window.addEventListener("load",bindEvents);

function bindEvents(){
	printTotalRecords();
	printId();
	document.getElementById('add').addEventListener("click",addItem);
	document.getElementById('delete').addEventListener("click",deleteItem);
}


function deleteItem(){
itemOperations.deleteItem();
	printTable();
}

const printId = ()=>document.getElementById("itemno").innerHTML = itemOperations.id;

function printTotalRecords(){
document.getElementById("total").innerHTML = itemOperations.itemList.length;
}

function addItem(){
	//var itemNo = document.getElementById("itemno").value;
	var itemName = document.getElementById("itemname").value;
	var itemDesc = document.getElementById("descr").value;
	var itemDate = document.getElementById("itemdate").value;
	var itemColor = document.getElementById("itemcolor").value;
	var itemBranch = document.getElementById("itembranch").value;
	itemOperations.addItem(itemName,itemDesc, itemDate, itemBranch , itemColor);
	var lastObject = itemOperations.itemList[itemOperations.itemList.length-1];
	printRecord(lastObject);
	
}


function printIcon(path,cls,fn,id){
	var image = document.createElement("img");
	image.src = path;
	image.className=cls;
	image.setAttribute("item-id",id);
	image.addEventListener("click",fn);
	return image;
	
	
}

function markForDelete(event){
	var tr = event.srcElement.parentNode.parentNode;
	tr.classList.toggle("redrow");
	var id = event.srcElement.getAttribute("item-id");
	itemOperations.markRecordDelete(id);
	//alert("Delete Call.... "+id);
}

function editRecord(){
	alert("Edit Record....");
}

function printTable(){
	document.getElementById("itemtable").innerHTML="";
	itemOperations.itemList.forEach((itemObject)=>printRecord(itemObject));
}

function printRecord(itemObject){
	printTotalRecords();
	printId();
	var tbody = document.getElementById("itemtable");
	var tr = tbody.insertRow();
	var index = 0;
	for(let key in itemObject){
		if(key=='markForDelete'){
			continue;
		}
		tr.insertCell(index).innerHTML = itemObject[key];
		index++;
	}
	var deleteIcon = printIcon('images/delete.png','imagestyle',markForDelete,itemObject.id);
	var td = tr.insertCell(index);
	td.appendChild(deleteIcon);
	var editIcon = printIcon('images/edit.png','imagestyle',editRecord,itemObject.id);
	td.appendChild(editIcon);
	//tr.insertCell(0).innerHTML = itemObject.id;
	//tr.insertCell(1).innerHTML = itemObject.name;
}
