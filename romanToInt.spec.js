const solution = require('./romanToInt');

describe('How does the function handle random roman values?', () => {
	test('should return 3', () => {
		expect(solution("III")).toStrictEqual(3)
	})
	test('should return 58', () => {
		expect(solution("LVIII")).toStrictEqual(58)
	})
	test('should return 1994', () => {
		expect(solution("MCMXCIV")).toStrictEqual(1994)
	})
})