// function sym(args) {
// 	let clonedArgs = [...arguments]
  
// 	function comp(ar1, ar2){
// 	  let arr = []
// 	  for(let i = 0; i<ar1.length; i++){
// 		if(ar2.indexOf(ar1[i]) < 0 && arr.indexOf(ar1[i]) < 0){
// 		  arr.push(ar1[i])
// 		}
// 	  }
// 	  for(let i = 0; i<ar2.length; i++){
// 		if(ar1.indexOf(ar2[i]) < 0 && arr.indexOf(ar2[i]) < 0){
// 		  arr.push(ar2[i])
// 		}
// 	  }
	  
// 	  return arr
// 	}
  
// 	return clonedArgs.reduce(comp)
//   }
  

// const array = [[1, 2, 5], [2, 3, 5], [3, 4, 5]]
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
// console.log(array)

// function sym(){
// 	let args = Array.prototype.slice.call(arguments)

// 	function getSymDiff(arr1, arr2){
		
// 		function filterFunction(arr1, arr2){
// 			return arr1.filter(item=> arr2.indexOf(item) === -1)
// 		}

// 		return filterFunction(arr1, arr2).concat(filterFunction(arr2, arr1))
// 	}

// 	const summary = args.reduce(getSymDiff, [])
// 	const unique = summary.filter((elem, index, self)=>{
// 		return index === self.indexOf(elem)
// 	})

// 	return unique;
// }

// function sym(){
// 	const symDiff = (arr1, arr2) => [
// 		...arr1.filter(e => !arr2.includes(e)),
// 		...arr2.filter(e => !arr1.includes(e))
// 	]

// 	const summary = (...args) => [...new Set(args.reduce(symDiff))]

// 	return summary(...arguments)
// }

// const newSet = new Set(...array)
// console.log(newSet.add(6))
// console.log(newSet.delete(2))
// console.log(newSet);
// console.log(newSet.has(1))
// console.log(newSet.has(2))


/* For a more efficient solution... */

function sym(){

	function reducer(result, arr){
		const compare = new Set(arr)
		for(let i of compare){
			if(result.has(i)){
				result.delete(i)
			}else{
				result.add(i)
			}
		}
		return result
	}
	function symDiff(...args){
		return [...args.reduce(reducer, new Set())]
	}

	return symDiff(...arguments)
}