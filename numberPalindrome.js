var isPalindrome = function(x) {
	let y = x.toString().split('').reverse().join('')
	let z = x.toString()
	
	return y === z
};

// console.log(isPalindrome(121));
module.exports = isPalindrome;