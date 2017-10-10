describe("Calc Test Suite",function(){
	it("Should Add two numbers",function(){
		var expectedResult = 300;
		var a = 100;
		var b = 200;
		var calcObject = new Calc();
		var result = calcObject.add(a,b);
		expect(result).toBe(expectedResult);
	});
	it("Should Add two String numbers",function(){
		var expectedResult = 300;
		var a = "100";
		var b = "200";
		var calcObject = new Calc();
		var result = calcObject.add(a,b);
		expect(result).toBe(expectedResult);
	})
})