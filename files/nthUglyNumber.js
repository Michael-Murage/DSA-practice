/**
 An ugly number is a positive integer whose prime factors are 
 limited to 2, 3, and 5.

Given an integer n, return the nth ugly number.

 

Example 1:

Input: n = 10
Output: 12
Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence 
of the first 10 ugly numbers.
Example 2:

Input: n = 1
Output: 1
Explanation: 1 has no prime factors, therefore all of its
 prime factors are limited to 2, 3, and 5.
 

Constraints:

1 <= n <= 1690
 */
// var nthUglyNumber = function(n) {
//     const maxDiv = (num, divider) => {
// 		while(num % divider === 0){
// 			num /= divider
// 		}
// 		return num
// 	}

// 	const isUgly = (num) => {
// 		num = maxDiv(num, 2)
// 		num = maxDiv(num, 3)
// 		num = maxDiv(num, 5)

// 		return num === 1 ? true : false
// 	}

// 	let i = 1
// 	let count = 1

// 	while(n > count){
// 		i++
// 		if(isUgly(i)) count++
// 	}

// 	return i;
// };

var nthUglyNumber = function(n) {
	let t2 = 0
	let t3 = 0
	let t5 = 0

	let ugly = [1]

	for(let i=1; i<=n; i++){
		ugly[i] = Math.min(ugly[t2]*2, Math.min(ugly[t3]*3, ugly[t5]*5))

		if(ugly[i] === ugly[t2] * 2){
			t2 = t2 + 1
		}
		if(ugly[i] === ugly[t3] * 3){
			t3 = t3 + 1
		}
		if(ugly[i] === ugly[t5] * 5){
			t5 = t5 + 1
		}
	}
	return ugly[n-1]
}

module.exports = nthUglyNumber
