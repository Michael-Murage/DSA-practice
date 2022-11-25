const intToRoman = require('../files/intToRoman');

describe('How algorithm behaves with random integers', () => {
	test('should return roman 3', () => {
		expect(intToRoman(3)).toStrictEqual("III")
	})
	test('should return roman 8', () => {
		expect(intToRoman(8)).toStrictEqual("VIII")
	})
	test('should return roman 58', () => {
		expect(intToRoman(58)).toStrictEqual("LVIII")
	})
	test('should return roman 359', () => {
		expect(intToRoman(359)).toStrictEqual("CCCLIX")
	})
	test('should return roman 1994', () => {
		expect(intToRoman(1994)).toStrictEqual("MCMXCIV")
	})
})
