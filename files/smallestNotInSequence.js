// In an array a of n integers
// Find least +ve number that is not in the
// sequence
// solution([1,2,3,4]) => 5

// function solution(a){
// 	a = a.sort()
// 	if(!a || (a.length < 2 && a.indexOf(1) === -1)) return 1

// 	if(a[0] <= 0){
// 		a.shift()
// 		solution(a)
// 	}
// 	// console.log(a);
// 	let j = 1
// 	// console.log(a[a.length-1]);
// 	while(j){
// 		if(j > a[a.length-1]){
// 			// console.log('checkpoint 1');
// 			break
// 		}
// 		if(a.indexOf(j) >= 0){
// 			// console.log('checkpoint 2');
// 			j++
// 			continue
// 		}
// 		// console.log('checkpoint 3');
// 		break
// 	}
// 	return j
// }
// function solution(A, j = 1){
// 	if(A.indexOf(j) < 0) return j
// 	j++
// 	return solution(A, j)
// }


// function solution(A){
// 	if(!A || A.indexOf(1) === -1) return 1
// 	// console.log('checkpoint 1');
// 	let j = 2
// 	while(A.indexOf(j) > 0){
// 		// console.log('checkpoint 2');
// 		j++
// 	}
// 	// console.log('checkpoint 3');
// 	return j
// }


function solution(A) {
	// write your code in JavaScript (Node.js 14)
	lowestNumber = 1
	newArray = [...new Set( A.filter(a => a >= 1).sort((a,b)=> a - b))]
	if((A.filter(a => a >= 1).length === 0) || (newArray[0] > 2)) {
		return lowestNumber
	}else{
		for(let a = 0; a < newArray.length; a++){
			if(lowestNumber === newArray[a]){
				lowestNumber++
			}else{
				return lowestNumber
			}
		}
	}
	return lowestNumber

}


// let x = [...Array(100000).keys()]
// let y = [99999]

// console.log(solution(x));

module.exports = solution;