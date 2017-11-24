app.controller("productctrl",($scope,productFactory)=>{
    $scope.searchByPrice=()=>{
           var promise = productFactory.doSearch($scope.searchPrice); 
           promise.then(function(data){
                $scope.result = data;
           },function(err){
                $scope.error = err;
            });
    }
})