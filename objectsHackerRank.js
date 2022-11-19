function processData(input) {
    let data = input.split('\n')
    let num = parseInt(data.shift())
    let obj = {}
    for (let i = 0; i<num; i++){
        obj[data[i].split(' ')[0]] = data[i].split(' ')[1]
    }
	console.log(obj);
    for(let j = num; j < data.length; j++){
        if(obj[data[j]]){
            console.log(`${data[j]}=${obj[data[j]]}`)
        }
        else{
            console.log("Not found")
        }
    }
}

processData('3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry');