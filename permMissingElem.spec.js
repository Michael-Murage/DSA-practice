const solution = require('./permMissingElem')

test('First', () => {
	expect(solution([2,5,1,3])).toBe(4)
})

let x = [...Array(100000).keys()]
x.splice(50000, 1)
x.shift()
x.push(100000)

test('Second', () => {
	expect(solution(x)).toBe(50000)
})
