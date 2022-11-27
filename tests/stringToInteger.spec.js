const atoi = require('../files/stringToInteger');

describe('When given values', () => {
	test('should return appropriate number', () => {
		expect(atoi('908')).toEqual(908)
	})
	test('should return appropriate number', () => {
		expect(typeof atoi()).toEqual('number')
	})
	test('should return appropriate number', () => {
		expect(atoi('-908')).toEqual(-908)
	})
	test('should return appropriate number', () => {
		expect(atoi('+908')).toEqual(908)
	})
	test('should return appropriate number', () => {
		expect(atoi('   908')).toEqual(908)
	})
	test('should return appropriate number', () => {
		expect(atoi('908 with words')).toEqual(908)
	})
	test('should return appropriate number', () => {
		expect(atoi('908+')).toEqual(908)
	})
	test('should return appropriate number', () => {
		expect(atoi('908-')).toEqual(908)
	})
	test('should return appropriate number', () => {
		expect(atoi('9087483648')).toEqual(2**31 - 1)
	})
	test('should return appropriate number', () => {
		expect(atoi('-9087483648')).toEqual(-(2**31))
	})
	test('should return appropriate number', () => {
		expect(atoi('-2147483648')).toEqual(-(2**31))
	})
	test('should return appropriate number', () => {
		expect(atoi('2147483648')).toEqual((2**31 - 1))
	})
	
})
