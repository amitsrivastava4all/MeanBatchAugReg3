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
	 return this.itemList = this.itemList.filter(function(itemObject){
		return itemObject.markForDelete ==false;
});
	
},
doServerCall(){
	var url = "http://api.giphy.com/v1/gifs/search?q=“Tom and Jerry”&api_key=dc6zaTOxFJmzC";
	var serverRequest = new XMLHttpRequest();
	serverRequest.open("GET",url);
	serverRequest.onreadystatechange=function(){
		
		if(serverRequest.readyState == 4 
		   && serverRequest.status==200){
			var json = serverRequest.responseText;
		}
	}
	serverRequest.send(null);
	
}	
sortByName(){
	this.itemList.sort(function(first,second){
	return first.name.localeCompare(second.name);
});
},
sortById(){
	this.itemList.sort(function(first,second){
	return first.id- second.id;
});
},	
searchById(id){
	var index = this.itemList.findIndex(function(itemObject){
		return itemObject.id ==id;
	});
	return index;
},
countMark(){
	return this.itemList.filter(function(itemObject){
		return itemObject.markForDelete ;
	}).length;
},	
markRecordDelete(id){
	var index = this.searchById(id);
	var itemObject = this.itemList[index];
	itemObject.toggleDelete();
}
	
}