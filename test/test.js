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

	  	it("если x строка результат NaN", function() {
	  		assert(isNaN(pow("string", 2)), "pow('string', 2)) не NaN" )
	  	});
	 });

	describe("любое число, кроме нуля, в степени 0 равно 1", function() {

	    function makeTest(x) {
	      it("при возведении " + x + " в степень 0 результат: 1", function() {
	        assert.equal(pow(x, 0), 1);
	      });
	    }

	    for (var x = -5; x <= 5; x += 2) {
	      makeTest(x);
	    }

	 });

	it("ноль в нулевой степени даёт NaN", function() {
	    assert(isNaN(pow(0, 0)), "0 в степени 0 не NaN");
	});

	describe("ноль в любой степени , кроме нуля, равно 0", function() {

	    function makeZeroTest(x) {
	      it("при возведении 0 в стерень " + x + " результат: 0", function() {
	        assert.equal(pow(0, x), 0);
	      });
	    }

	    for (var i = 1; i < 5; i++) {
	      makeZeroTest(i);
	    }

	 });
});