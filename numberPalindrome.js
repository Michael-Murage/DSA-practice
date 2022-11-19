var isPalindrome = function(x) {
	let y = x.toString().split('')
	let z = y.reverse()
	
	return y === z
};

console.log(isPalindrome(121));