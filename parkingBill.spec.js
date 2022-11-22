const solution = require('./parkingBill')

test('First', ()=>{
	expect(solution("10:00", "13:21")).toBe(17)
})

test('Second', () => {
	expect(solution("9:42", "11:22")).toBe(9)
})

test('Third', () => {
	expect(solution("9:42", "11:42")).toBe(9)
})
