app.controller("contactctrl",function($scope,$routeParams){
	$scope.result = "Name is "+$routeParams.name
		+"Job "+$routeParams.job;
})