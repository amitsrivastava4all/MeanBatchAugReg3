app.factory("myfactory",($http,$q)=>{
	var object = {
		callServer(word){
			//var result = "Result Yet to come..";
			var url = `http://api.wordnik.com:80/v4/word.json/${word}/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`;
			console.log("Now URL is "+url);
			console.log("Going to Call a Server... ");
			var defererdObject = $q.defer();
			$http.get(url).then(function(data){
				console.log("Response is Success...");
				//result = "Result is Come SUCCESS";
				defererdObject.resolve(data);
				
			},function(error){
				console.log("Error is Come...");
				//result = "Result is come ERROR";
				defererdObject.reject(error);
			});
			console.log("Server Called....");
			return defererdObject.promise;
		}
//		,callServer2(){
//			
//		}
	};
	return object;
})