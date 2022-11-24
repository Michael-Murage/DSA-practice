/*
Roman numerals are represented by seven different symbols: 
I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's 
added together. 12 is written as XII, which is simply X + II. 
The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left 
to right. However, the numeral for four is not IIII. Instead, 
the number four is written as IV. Because the one is before the 
five we subtract it making four. The same principle applies to 
the number nine, which is written as IX. There are six instances 
where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.

 

Example 1:

Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.
Example 2:

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 3:

Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= num <= 3999
*/

var intToRoman = function(num) {
	const defaults = {
		1: 'I',
		5: 'V',
		10: 'X',
		50: 'L',
		100: 'C',
		500: 'D',
		1000: 'M'
	};
    const s = num.toString();
	let result = []

	const conditionalTree = (i, nine, four, five, one) =>{
		if(s[i] === '4'){
			result.unshift(four)
		}else if(s[i] === '9'){
			result.unshift(nine)
		}
		else if (s[i] === '5') {
			result.unshift(five)
		}else{
			for(let j=0; j<parseInt(s[i])%5; j++){
				result.unshift(one)
			}
			if(parseInt(s[i]) > 5) result.unshift(five)
		}
	}

	for(let i=s.length -1; i >= 0; i--){
		if(s[i] !== '0' && i === s.length -1){
			conditionalTree(i, 'IX', 'IV', 'V', 'I')
		}

		if(s[i] !== '0' && i === s.length -2){
			conditionalTree(i, 'XC', 'XL', 'L', 'X')
		}

		if(s[i] !== '0' && i === s.length -3){
			conditionalTree(i, 'CM', 'CD', 'D', 'C')
		}

		if(s[i] !== '0' && i === s.length -4){
			for(let j=0; j<parseInt(s[i])%5; j++){
				result.unshift('M')
			}
		}
	}
	return result.join('')
};

module.exports = intToRoman;
