const isUgly = require('../files/uglyNumber');

describe('When given some values', () => {
	test('should return true', () => {
		expect(isUgly(6)).toEqual(true)
	})
	test('should return true', () => {
		expect(isUgly(1)).toEqual(true)
	})
	test('should return false', () => {
		expect(isUgly(14)).toEqual(false)
	})
	test('should return true', ()=>{
		expect(isUgly(100)).toEqual(true)
	})
	test('should return false', ()=>{
		expect(isUgly(101)).toEqual(false)
	})
	test('should return false', ()=>{
		expect(isUgly(102)).toEqual(false)
	})
	test('should return false', ()=>{
		expect(isUgly(2147483647)).toEqual(false)
	})
	
})
