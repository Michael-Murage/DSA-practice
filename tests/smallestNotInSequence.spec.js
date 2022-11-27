const solution = require('../files/smallestNotInSequence');

describe('When handling values', () => {
	test('should return correct result', () => {
		expect(solution([1,2,3])).toEqual(4)
	})
	test('should return correct result', () => {
		expect(solution([0])).toEqual(1)
	})
	test('should return correct result', () => {
		expect(solution([-1,2,3])).toEqual(1)
	})
	test('should return correct result', () => {
		expect(solution([-1,-2,-3])).toEqual(1)
	})
	test('should return correct result', () => {
		expect(solution([4,5,3])).toEqual(1)
	})
	test('should return correct result', () => {
		expect(solution([2,1,4,3,5])).toEqual(6)
	})
	test('should return correct result', () => {
		expect(solution([1])).toEqual(2)
	})
	
})
