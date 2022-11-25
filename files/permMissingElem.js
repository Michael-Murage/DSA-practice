/*
An array A consisting of N different integers is given. 
The array contains integers in the range [1..(N + 1)], which 
means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
*/

// function solution(A){
// 	let newSet = [...new Set(A.sort((a,b)=>a-b))]
// 	if(!A || !A.length){
// 		return 1
// 	}

// 	for(let i = 0; i < newSet.length; i++){
// 		if(newSet[i] + 1 !== newSet[i + 1]){
// 			return newSet[i] + 1
// 		}
// 	}
// 	return 1
// };

function solution(A){
	if(!A.length || !A) return 1
	let n = A.length + 1
	return (n * (n + 1) / 2) - A.reduce((a,b) => a + b)
}

module.exports = solution;
