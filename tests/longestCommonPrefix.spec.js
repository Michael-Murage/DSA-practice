const longestCommonPrefix = require('../files/longestCommonPrefix')
// const longestCommonPrefix = longestCommonPrefixJs.default

describe('When given an array of strings', () => {
	test('should return a non-empty string', () => {
		expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl");
	})
	test('should verify that result is a string', () => {
		expect(typeof longestCommonPrefix(["flower","flow","flight"])).toBe("string");
	})
	test('should return correct result', () => {
		expect(longestCommonPrefix(["car","racecar","model, rack, mode"])).toBe("");
	})
	test('should return correct result', () => {
		expect(longestCommonPrefix()).toBe("");
	})
	test('should return correct result', () => {
		expect(longestCommonPrefix(['a'])).toBe("a");
	})
})
