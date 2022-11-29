const addDigits = require('../files/addDigits')

describe('When given values', () => {
	test('should return sum of all digits appropriately', () => {
		expect(addDigits(38)).toEqual(2)
	})
	test('should return sum of all digits appropriately', () => {
		expect(addDigits(0)).toEqual(0)
	})
	
})
