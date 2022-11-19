var removeDuplicates = function(nums) {
	return [...new Set(nums)]
}

// x = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicates([1,1,2]));
