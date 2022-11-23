const longestCommonPrefix = require('./longestCommonPrefix')
// const longestCommonPrefix = longestCommonPrefixJs.default

describe('When given an array of strings', () => {
	test('should return a non-empty string', () => {
		expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl");
	})
	test('should verify that result is a string', () => {
		expect(typeof longestCommonPrefix(["flower","flow","flight"])).toBe("string");
	})
})
