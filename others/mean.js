const mean = (arr) => {
    return (arr.reduce((prev, cur)=> prev + cur)) / arr.length
}

module.exports = mean;
