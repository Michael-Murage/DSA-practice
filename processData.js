function processData(input) {
    let n = input.split('\n')
    
    for (let j = 0; j < n.length; j++){
        let odd = ''
        let even = ''
        for(let i = 0; i < n[j].length; i++){
            if(i % 2 === 0){
                even += n[j][i]
				continue
            }else{
                odd += n[j][i]
				continue
            }
        }
        console.log(`${odd} ${even}`)
    }
}

processData('2\nHacker\nRank')