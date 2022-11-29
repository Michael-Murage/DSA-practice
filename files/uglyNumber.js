/*

An ugly number is a positive integer whose prime factors are 
limited to 2, 3, and 5.

Given an integer n, return true if n is an ugly number.

 

Example 1:

Input: n = 6
Output: true
Explanation: 6 = 2 × 3
Example 2:

Input: n = 1
Output: true
Explanation: 1 has no prime factors, therefore all of its prime
 factors are limited to 2, 3, and 5.
Example 3:

Input: n = 14
Output: false
Explanation: 14 is not ugly since it includes the prime factor 7.
 

Constraints:

-231 <= n <= 231 - 1
 */

// var isUgly = function(n) {
//     function getPrime(inp) {
// 		let primes = []
// 		let control = Array.from({length: inp+1}, ()=>true)
		
// 		for(let i = 2; i*i < inp; i++){
// 			if(control[i] === true){
// 				for(let j=i+i; j<=inp; j+=i){
// 					control[j] = false
// 				}
// 			}
// 		}
// 		primes = control.reduce((res, elem, ind) => {
// 			return elem ? (res.push(ind), res) : res
// 		}, [])

// 		return primes
// 	}

// 	let ugly = false
	
// 	let primeNos = getPrime(n)
// 	if(n%2 === 0 || n%3 === 0 || n%5 === 0 || n === 0 || n === 1){
// 		ugly = true
// 	}
// 	for(let i=5; i<primeNos.length; i++){
// 		if(n % primeNos[i] === 0){
// 			ugly = false
// 			return ugly
// 		}
// 	}
// 	return ugly;
// };

// var isUgly = function(n) {
//     function getPrime(max) {
// 		let range = []
// 		let current = 0
		
// 		for(let i = 2; i <= max; i++){
// 			range.push(i)
// 		}

// 		while(range[current] <= max_sqrt){
// 			range = range.filter(n => {
// 				return (n === range[current] || n % range[current] !== 0)
// 			})
// 			current++
// 		}

// 		return range
// 	}

// 	let ugly = false
	
// 	let primeNos = getPrime(n)
// 	if(n%2 === 0 || n%3 === 0 || n%5 === 0 || n === 0 || n === 1){
// 		ugly = true
// 	}
// 	for(let i=5; i<primeNos.length; i++){
// 		if(n % primeNos[i] === 0){
// 			ugly = false
// 			return ugly
// 		}
// 	}
// 	return ugly;
// };

var isUgly = function(n) {
    if(n === 0){
		return false
	}
	while(n!=1){
		if(n % 2 === 0){
			n /= 2
			continue
		}
		if(n % 3 === 0){
			n/=3
			continue
		}
		if(n%5 === 0){
			n /= 5
			continue
		}
		return false
	}
	return true
};

module.exports = isUgly;
