/* 
Compare and update the inventory stored in a 2D array 
against a second 2D array of a fresh delivery. 
Update the current existing inventory item 
quantities (in arr1). If an item cannot be found, 
add the new item and quantity into the inventory array. 
The returned inventory array should be in alphabetical 
order by item.
*/

// function updateInventory(arr1, arr2) {
//     let ind;

// 	const getArr1Index = function(val) {
// 		for(let i = 0; i < this.length; i++){
// 			if(this[i][1] === val){
// 				return i;
// 			}
// 		}
// 		return undefined;
// 	}

// 	for (let i=0; i<arr2.length; i++){
// 		ind = getArr1Index.call(arr1, arr2[i][1])

// 		if(ind === undefined){
// 			arr1.push(arr2[i])
// 		}else{
// 			arr1[ind][0] += arr2[i][0]
// 		}
// 	}

// 	// sorting the resultant
// 	arr1 =  arr1.sort((a,b)=>{
// 		if(a[1] > b[1]) return 1
// 		else if(a[1] < b[1]) return -1
// 		else return 0
// 	})
	
// 	return arr1
// }

// console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]))

function updateInventory(arr1, arr2){

	const inventory = Array.prototype.concat.apply([], arr1)

	for(let i = 0; i < arr2.length; i++){
		const item = arr2[i][1]
		const quantity = arr2[i][0]

		const position = inventory.indexOf(item)

		if(position !== -1){
			const row = Math.floor(position / 2);
			arr1[row][0] += quantity
			continue
		}

		arr1.push([quantity, item])
	}

	arr1.sort((previous, next) => (previous[1] > [next[1]] ? 1 : -1))

	return arr1;
}

module.exports = updateInventory;