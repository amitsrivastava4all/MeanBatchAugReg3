app.controller("mobilectrl",function($scope,mobilefactory){
var promise  = mobilefactory.callServer();
		
		promise.then(function(data){
			
			$scope.mobiles = data;
			//$scope.tempdata=["Hello","Hi","How are You"];
		},function(err){
			console.log("Controller Rec the Promise Error");
			$scope.error = err;
		})
});