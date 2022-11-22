import longestCommonPrefix from './longestCommonPrefix.js';

// const longestCommonPrefixJs = import('./longestCommonPrefix.js');

test('Returns the longest common prefix among an array of strings given as argument', () => {
	expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl");
})

test('Verify that result is a string', () => {
	expect(typeof longestCommonPrefix(["flower","flow","flight"])).toBe("string");
})