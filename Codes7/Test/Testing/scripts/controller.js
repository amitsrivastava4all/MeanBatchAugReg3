app.controller("myctrl",function($scope,myfactory){
	
	$scope.add=function(){
		return myfactory.multiply($scope.firstNo, $scope.secondNo);
		//return  $scope.firstNo + $scope.secondNo;
}
})