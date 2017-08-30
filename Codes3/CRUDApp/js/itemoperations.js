// CRUD 
const itemOperations = {
itemList:[],	
addItem(id,name,descr, itemdate, branch , color){
	var itemObject = new Item(id,name,descr, itemdate, branch , color);
	this.itemList.push(itemObject);
},
deleteItem(){
	
},
searchItem(){
	
}	
}