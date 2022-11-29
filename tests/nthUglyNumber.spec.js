const sol = require('../files/nthUglyNumber');

describe('When given values', () => {
	test('should return appropriate nth ugly number', () => {
		expect(sol(10)).toEqual(12)
	})
	test('should return appropriate nth ugly number', () => {
		expect(sol(1)).toEqual(1)
	})
	test('should return appropriate nth ugly number', () => {
		expect(sol(1407)).toEqual(500832)
	})
	
})