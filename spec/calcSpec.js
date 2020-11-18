describe ("fizzBuzz function", function(){
      beforeEach(function() {
        fizzbuzz = new fizzBuzz();
    });
    describe("returns fizzBuzz, fizz, Buzz or number", function(){
        it("should exist", function() {
            expect(fizzBuzz).toBeDefined();
        })
    it ("should return fizzBuzz when called as fizzBuzz(15)", function() {
        var result=fizzBuzz(15);
        expect(result).toBe("fizzBuzz");
    })
})
    })
    