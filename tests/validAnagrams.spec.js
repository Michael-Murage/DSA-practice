const anagram = require('../files/validAnagrams');

describe('When given a set of values', () => {
    const predictions = [
        {label: "should return true", input: ["danger", "garden"], output: true},
        {label: "should return false", input: ["chicken", "kitchen"], output: false},
        {label: "should return true", input: ["arm", "ram"], output: true},
        {label: "should return true", input: ["able", "bale"], output: true},
        {label: "should return true", input: ["upset", "setup"], output: true},
        {label: "should return false", input: ["city", "tiny"], output: false},
        {label: "should return false", input: ["magnetismatic", "pragmatismats"], output: false},
    ]

    predictions.forEach(prediction =>{
        test(prediction.label, () => {
            expect(anagram(prediction.input[0], prediction.input[1])).toBe(prediction.output);
        })
    })
})
