const solution = require('./binaryGap')

test('first', () => {
	expect(solution(9)).toBe(2)
})
test('second', () => {
	expect(solution(529)).toBe(4)
})
test('third', () => {
	expect(solution(20)).toBe(1)
})
test('fourth', () => {
	expect(solution(15)).toBe(0)
})
test('zero', ()=>{
	expect(solution(0)).toBe(0)
})
