/*
Write a function to find the longest common prefix string amongst 
an array of strings.

If there is no common prefix, return an empty string "".
*/
var longestCommonPrefix = function(strs) {
	if (!strs || !strs.length) return ''
	if (strs.length === 1) return strs[0]
	let result = ''
	for(let i = 0; i<strs[0].length; i++){
		if(strs.filter(str => str[i] === strs[0][i]).length === strs.length){
			result += strs[0][i]
			continue
		}
		break
	}
	return result;
};

// export default longestCommonPrefix;
module.exports = longestCommonPrefix;