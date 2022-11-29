const isHappy = require('../files/happyNumber');

describe('When given values', () => {
	test('should return true', () => {
		expect(isHappy(19)).toEqual(true)
	})
	test('should return false', () => {
		expect(isHappy(2)).toEqual(false)
	})
	test('should return false', () => {
		expect(isHappy(7)).toEqual(true)
	})
	test('should return false', () => {
		expect(isHappy(10)).toEqual(true)
	})
	test('should return false', () => {
		expect(isHappy(78)).toEqual(false)
	})
	
})
