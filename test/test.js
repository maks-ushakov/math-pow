describe("pow", function() {

  it("При возведении 2 в 3ю степень результат 8", function() {
    assert.equal(pow(2, 3), 8);
  });
  it("При возведении 3 в 4ю степень результат 81", function() {
    assert.equal(pow(3, 4), 81);
  });

});