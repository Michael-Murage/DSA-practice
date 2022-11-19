function alternatingCharacters(s) {
	let left = 0
	let right = 1
	let rem = 0
	while (right < s.length) {
		if(s[left] === s[right]){
			rem++
		}
		left++
		right++
	}
	return rem
}

console.log(alternatingCharacters("AAAA"))
console.log(alternatingCharacters("BBBBB"))
console.log(alternatingCharacters("ABABABAB"))
console.log(alternatingCharacters("BABABA"))
console.log(alternatingCharacters("AAABBB"))