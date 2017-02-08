describe("pow", function() {
	describe("Возводит х в степень 3", function() {
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

});