var longestCommonPrefix = function(strs, x=0) {
	if(strs.filter(elem=>elem[x] === strs[0][x]).length < strs.length){
			return strs[0].slice(0, x)
	}else{
			x++
			return longestCommonPrefix(strs, x)
	}
};

module.exports = longestCommonPrefix;