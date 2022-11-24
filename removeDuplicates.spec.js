const solution = require('./removeDuplicates')

describe('Does the function remove duplicates from non-empty array?', () => {
	test('should remove duplicates', () => {
		expect(solution([0,0,1,1,1,2,2,3,3,4])).toStrictEqual([0,1,2,3,4])
	})
	test('should remove duplicates', () => {
		expect(solution([1,1,2])).toStrictEqual([1,2])
	})
	test('should return empty when given empty', () => {
		expect(solution([])).toEqual([])
	})
	test('should return the input if input is not array', () => {
		expect(solution('one')).toStrictEqual('one')
	})
	test('should return the input if input is not array', () => {
		expect(solution(2)).toStrictEqual(2)
	})
})
