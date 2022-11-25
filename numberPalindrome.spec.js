const isPalindrome = require('./numberPalindrome')

describe('Testing with valid values', () => {
	describe('With actual palindromes', () => {
		it("should return true", ()=>{
			expect(isPalindrome(121)).toStrictEqual(true)
		})
		it("should return true", ()=>{
			expect(isPalindrome(31482200228413)).toStrictEqual(true)
		})
		it("should return true", ()=>{
			expect(isPalindrome(11)).toStrictEqual(true)
		})
		it("should return true", ()=>{
			expect(isPalindrome(3)).toStrictEqual(true)
		})
	})
	describe('With non palindromes', () => {
		it("should return false", ()=>{
			expect(isPalindrome(1981)).toStrictEqual(false)
		})
		it("should return false", ()=>{
			expect(isPalindrome(19)).toStrictEqual(false)
		})
		it("should return false", ()=>{
			expect(isPalindrome(12345676543210)).toStrictEqual(false)
		})
		it("should return false", ()=>{
			expect(isPalindrome(198198)).toStrictEqual(false)
		})
	})
})