const twoSum = require('../files/twoSum');

describe('When the function is given some values', () => {
	test('should return the indices of 2 numbers that add up to second argument', () => {
		expect(twoSum([-10,-1,-18,-19], -19)).toContain(1 && 2)
	})
	test('should return the indices of 2 numbers that add up to second argument', () => {
		expect(twoSum([2,7,11,15], 9)).toContain(1 && 0)
	})
	test('should return the indices of 2 numbers that add up to second argument', () => {
		expect(twoSum([3,2,4], 6)).toContain(1 && 2)
	})
	test('should return the indices of 2 numbers that add up to second argument', () => {
		expect(twoSum([3,3], 6)).toContain(1 && 0)
	})
})
