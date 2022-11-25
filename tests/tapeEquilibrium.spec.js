const solution = require('../files/tapeEquilibrium');

describe('When given actual values', () => {
	it("should return the minimum absolute difference", () =>{
		expect(solution([3,1,2,4,3])).toStrictEqual(1)
	})
	it("should return the input if input is not an array", ()=>{
		expect(solution('3')).toBe('3')
	})
	it("should return the input if input is not an array", ()=>{
		expect(solution(51)).toBe(51)
	})
	it("should return 0 if input is empty array", ()=>{
		expect(solution([])).toStrictEqual(0)
	})
})

describe('When given negative values', () => {
	it("should return the minimum absolute difference", () =>{
		expect(solution([-3,-1,-2,-4,-3])).toStrictEqual(1)
	})
})