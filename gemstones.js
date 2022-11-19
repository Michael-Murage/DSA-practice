function gemstones(arr) {
	let gems = []
	for(let i of arr[0]){
			for(let j=0; j<arr.length; j++){
					if(arr.filter(elem=>elem.split('').indexOf(i) >= 0).length >= arr.length){
						if(gems.indexOf(i) >= 0){
							continue
						}else{
							gems.push(i)
						}
					}
			}
	}
	return gems.length
}

console.log(gemstones(['abcdde', 'baccd', 'eeabg']));