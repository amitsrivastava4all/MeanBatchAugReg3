app.factory("myfactory",($http,$q)=>{
	var object = {
		callServer(hostName){
			//var result = "Result Yet to come..";
			var url = "https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json";
			//var url = "http://freegeoip.net/json/"+hostName;
			console.log("N "+url);
			console.log("Going to Call a Server... ");
			var defererdObject = $q.defer();
			$http.get(url).then(function(data){
				console.log("Response is Success...",data.data);
				//result = "Result is Come SUCCESS";
				defererdObject.resolve(data.data);
				//defererdObject.resolve(data.data);
				
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