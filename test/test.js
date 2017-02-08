describe("pow", function() {
	describe("Возводит х в степень n", function() {
		function makeTest(x) {
			var expected = x * x * x;
			it("При возведении " + x + 
				" в 3ю степень результат равен " + expected, function() {
				assert.equal(pow(x, 3), expected);
			});
		}

		for (var i=1; i <= 5; i++) {
			makeTest(i);
		}
	});

	describe("Возвращает NaN при неверных исходных данных", function() {
		it("при возведении в отрицательную степень результат NaN", function() {
	    	assert(isNaN(pow(2, -1)), "pow(2, -1) не NaN");
	 	 });

	  	it("при возведении в дробную степень результат NaN", function() {
	    	assert(isNaN(pow(2, 1.5)), "pow(2, 1.5) не NaN");
	  	});
	 });
});