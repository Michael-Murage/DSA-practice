/**
 * Two stringss are effectively anagrams if they're made of
 * the same characters with the same frequencies
 * 
 * e.g danger and garden
 * Write an algorithm to test whether 2 strings s1 and s2 are
 * anagrams
 */

const anagram = (s1, s2)=> {
    if (s1.length !== s2.length) return false
    const newSet1 = new Set(s1.split(''))
    const newSet2 = new Set(s2.split(''))
    for(let i =0; i < s1.length; i++){
        if(newSet2.has(s1[i].toLowerCase()) || newSet2.has(s1[i].toUpperCase())){
            continue
        }
        return false
    }
    
    for(let i = 0; i < s2.length; i++){
        if(newSet1.has(s2[i].toLowerCase()) || newSet1.has(s2[i].toUpperCase())){
            continue
        }
        return false
    }
    return true
}

module.exports = anagram;
