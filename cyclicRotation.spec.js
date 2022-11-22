const solution = require('./cyclicRotation')

test('Similar length', () => {
	expect(solution([6, 3, 8, 9, 7], 3).length).toBe(5)
})
test('First', () => {
	expect(solution([3, 8, 9, 7, 6], 3)) === ([9, 7, 6, 3, 8])
})

test('Second', () => {
	expect(solution([1, 2, 3, 4], 4)) === ([1, 2, 3, 4])
})
test('Third', () => {
	expect(solution([0, 0, 0], 1)) === ([0, 0, 0])
})
test('Fourth', () => {
	expect(solution( [3, 8, 9, 7, 6], 1)) === ([6, 3, 8, 9, 7])
})
