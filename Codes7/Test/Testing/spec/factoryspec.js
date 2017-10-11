describe("factory test suite",function(){
	beforeEach(module('myapp'));
	var factory;

  beforeEach(inject(function(_myfactory_){
      factory = _myfactory_;
      
  }));
	it("Should Multiply two numbers",function(){
		
	    var firstNo = 100;
		var secondNo = 2;
		var result = factory.multiply(firstNo, secondNo);
		expect(result).toBe(200);
	});
});