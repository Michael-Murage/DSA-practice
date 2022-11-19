function solution(arr){
	let nums = [...arr]
	let empty = []
	nums = nums.sort()
	for(let i = 0; i < nums.length; i++){
		if(empty.includes(nums[i])){
			continue
		}
		empty.push(nums[i])
	}

	console.log(empty);
	// let x = arr.split('')
}

console.log(solution("abcabcabcabc"));