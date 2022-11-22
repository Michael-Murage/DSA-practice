const solution = require('./oddOccurences')

test('first', () => {
	expect(solution([9,3,9,3,9,7,9])) === 7
})

test('second', () => {
	expect(solution([2,2,3,3,4,4,8,8,1,1,5,10,10,100,100,3,3,4,4])) === 5
})
test('third', ()=>{
	expect(solution([2,2,2,2,2,3,3,4,4,5,5,6,6,7,7,8,8])).toBe(2)
})