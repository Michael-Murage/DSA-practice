// var removeDuplicates = function(nums) {
// 	if(!Array.isArray(nums)) return nums
// 	return [...new Set(nums)]
// }

// var removeDuplicates = function(nums) {
// 	if(!Array.isArray(nums)) return nums
// 	let result = []
// 	for(let i =0; i<nums.length; i++){
// 		if(result.indexOf(nums[i]) >= 0){
// 			continue
// 		}
// 		result.push(nums[i])
// 	}
// 	return result;
// }

var removeDuplicates = function(nums) {
	for(let i=0; i<nums.length; i++){
		if(nums.indexOf(nums[i]) < i && nums[i] !== '_'){
			nums.splice(i, 1, '_')
		}
	}
	return nums.filter(num=>isNaN(num) === false).concat(nums.filter(num=> isNaN(num) === true))
}

const x = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(x))
// module.exports = removeDuplicates