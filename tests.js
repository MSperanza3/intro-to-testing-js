// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Matteo!" when executed', function () {
        expect(sayHello()).toBe("Hello, Matteo!");
    });
    it('should return the string "Hello, Alex" when there is a argument', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex");
    });
    it('should return the string "Hello, Pat" when there is a argument', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat");
    });
    it('should return the string "Hello, World" when there is a argument', function() {
        expect(sayHello("World")).toBe("Hello, World");
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
    it('should return "Hello, World" if string is true', function() {
        expect(sayHello(true)).toBe("Hello, World");
    });
    it('should return "Hello, World" if string is false', function() {
        expect(sayHello(false)).toBe("Hello, World");
    });
});
describe(`isFive`, function () {
    it('should be a defined function', function () {
      expect(typeof isFive).toBe(`function`)
    });
    it('should always return as boolean', function () {
        expect(typeof isFive()).toBe('boolean')
    });
    it('should return true if input is 5', function () {
        expect(isFive(5)).toBe(true)
    });
    it(`should return true if input is '5'`, function () {
        expect(isFive('5')).toBe(true)
    });
});
describe(`isEven`, function () {
    it('should be defined as a function', function () {
        expect(typeof isEven).toBe(`function`)
    });
    it('should return a boolean no matter the input', function () {
        expect(typeof isEven()).toBe(`boolean`)
    });
    it('should return true if input is Even', function () {
        expect(isEven(2, -4, 8)).toBe(true)
    });
    it('should return false if input is Odd', function () {
        expect(isEven(3)).toBe(false)
    });
    it('should return false if given a "string"', function () {
        expect(isEven(`banana`)).toBe(false)
    });
    it('should return false if input is Infinity', function () {
        expect(isEven(Infinity)).toBe(false)
    });
    it('return false when called with a boolean input like ', function () {
        expect(isEven(true, false)).toBe(false)
    });
    it('returns false when called without an argument', function () {
        expect(isEven()).toBe(false)
    });
});
describe(`isVowel`, function () {
    it('should be defined as a function', function() {
        expect(typeof isVowel).toBe(`function`)
    });
    it('should return a boolean no matter the input', function () {
        expect(typeof isVowel()).toBe(`boolean`)
    });
    it('should return true if Vowel is inputted', function () {
        expect(typeof isVowel(`a`)).toBe(true)
    });
});