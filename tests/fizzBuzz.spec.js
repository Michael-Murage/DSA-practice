const fizzBuzz = require('../files/fizzBuzz');

describe('When given valid input', () => {
	test('should return an array with fizz and buzz appropriately', () => {
		expect(fizzBuzz(3)).toEqual(["1","2","Fizz"])
	})
	test('should return an array with fizz and buzz filled appropriately', () => {
		expect(fizzBuzz(5)).toEqual(["1","2","Fizz","4","Buzz"])
	})
	test('should return an array with fizz and buzz filled appropriately', () => {
		expect(fizzBuzz(15)).toEqual(["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"])
	})
})
