/*
Write a function to find the longest common prefix string amongst 
an array of strings.

If there is no common prefix, return an empty string "".
*/
var longestCommonPrefix = function(strs, x=0) {
	if(strs.filter(elem=>elem[x] === strs[0][x]).length < strs.length){
			return strs[0].slice(0, x)
	}else{
			x++
			return longestCommonPrefix(strs, x)
	}
};

// export default longestCommonPrefix;
module.exports = longestCommonPrefix;