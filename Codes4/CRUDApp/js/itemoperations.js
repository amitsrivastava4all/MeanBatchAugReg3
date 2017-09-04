// CRUD 
const itemOperations = {
itemList:[],
id:1,	
addItem(name,descr, itemdate, branch , color){
	var itemObject = new Item(this.id,name,descr, itemdate, branch , color);
	this.itemList.push(itemObject);
	this.id++;
},
deleteItem(){
	
},
searchItem(){
	
}	
}