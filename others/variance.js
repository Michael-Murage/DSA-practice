const mean = require('./mean')

let variance = (arr) =>{
    let numerator = 0
    let currentMean = mean(arr)
    for(let i = 0; i<arr.length; i++){
        numerator += (arr[i] - currentMean) ** 2
    }
    return numerator / arr.length
}

module.exports = variance
