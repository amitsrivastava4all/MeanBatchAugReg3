app.factory("productFactory",($http,$q)=>{
    var object = {};
    object.doSearch=(price)=>{
            var defer = $q.defer();
            $http.get(configObject.url+"?price="+price).then(function(data){
                  defer.resolve(data);  
            },function(err){
                  defer.reject(err);  
            });
            return defer.promise;
    }
    return object;
})