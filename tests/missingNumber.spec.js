const solution = require('../files/missingNumber');

describe('When given values should return appropriate values', () => {
	test('should return the missing number', () => {
		expect(solution([3,0,1])).toEqual(2)
	})
	test('should return the missing number', () => {
		expect(solution([0,1])).toEqual(2)
	})
	test('should return the missing number', () => {
		expect(solution([9,6,4,2,3,5,7,0,1])).toEqual(8)
	})
	
})
