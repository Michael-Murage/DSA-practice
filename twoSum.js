var twoSum = function(nums, target) {
	let num = [...nums]
	num.sort((a,b)=>a-b)
	console.log(num)
	let left = 0
	let right = num.length-1
	while(left < right){
			if (num[left] + num[right] === target){
				console.log(left, right, 'equality');
					return [nums.indexOf(num[left]), nums.indexOf(num[right])]
			}else if(num[left] + num[right] < target){
				console.log(left, right, 'less than');
					left++
			}else if(num[left] + num[right] > target){
				console.log(left, right, 'greater');
					right --
			}
	}
	return 'none'
}

console.log(twoSum([-10,-1,-18,-19], -19))