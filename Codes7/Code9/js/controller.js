app.controller("myctrl",($scope,myfactory)=>{
	$scope.callMe=function(){
		var promise  = myfactory.callServer($scope.word);
		//myfactory.callServer2();
		for(let i = 1; i<=10; i++){
			console.log("CPU Doing SOme Logic Calc ",i);
		}
		promise.then(function(data){
			console.log("Controller Rec the Promise Data");
			console.log("Data is ",data);
			$scope.tempdata = data;
			//$scope.tempdata=["Hello","Hi","How are You"];
		},function(err){
			console.log("Controller Rec the Promise Error");
			$scope.error = err;
		})
		
	}
})