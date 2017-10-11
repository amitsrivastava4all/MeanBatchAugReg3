describe("controller test suite",function(){
	beforeEach(module('myapp'));
	var $controller;
	beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));
	var factory = {};
	beforeEach(inject(function(_myfactory_){
      factory = _myfactory_;
      
  }));
	it("Should Add two numbers",function(){
		var myscope={};
		
		$controller('myctrl',{ $scope: myscope , factory:factory });
		myscope.firstNo = 100;
		myscope.secondNo = 2;
		var result = myscope.add();
		expect(result).toBe(200);
	});
	
//	it("Should Add two string numbers",function(){
//		var myscope;
//		$controller('myctrl',{ $scope: myscope});
//		myscope.firstNo = "100";
//		myscope.secondNo = "200";
//		var result = myscope.add();
//		expect(result).toBe(300);
//	});
});