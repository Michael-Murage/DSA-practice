/*
A binary gap within a positive integer N is any maximal sequence 
of consecutive zeros that is surrounded by ones at both ends in 
the binary representation of N.

For example, number 9 has binary representation 1001 and contains 
a binary gap of length 2. The number 529 has binary representation 
1000010001 and contains two binary gaps: one of length 4 and one 
of length 3. The number 20 has binary representation 10100 and 
contains one binary gap of length 1. The number 15 has binary 
representation 1111 and has no binary gaps. The number 32 has 
binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest 
binary gap. The function should return 0 if N doesn't contain a 
binary gap.

For example, given N = 1041 the function should return 5, because 
N has binary representation 10000010001 and so its longest binary 
gap is of length 5. Given N = 32 the function should return 0, 
because N has binary representation '100000' and thus no binary gaps.
*/

function solution(N){
	let binaryN = (N >>> 0).toString(2)
	binaryN = binaryN.split('')
	if(binaryN.filter(a => a === '1').length < 2 || N === 0){
		return 0
	}

	let left = 0
	let right = 0
	let arr = []

	for(let i = 0; i < binaryN.length; i++){
		if(binaryN[i] === '1'){
			right = i
			if(right - left > 1){
				arr.push(right - left - 1)
			}
			left = i
		}else if(binaryN[i] === '0'){
			right++
		}
	}

	return Math.max(...arr) === -Infinity ? 0 : Math.max(...arr)
};

console.log(solution(214748364))

module.exports = solution