/**
 * Two stringss are effectively anagrams if they're made of
 * the same characters with the same frequencies
 * 
 * e.g danger and garden
 * Write an algorithm to test whether 2 strings s1 and s2 are
 * anagrams
 */

// const anagram = (s1, s2)=> {
//     if (s1.length !== s2.length) return false
//     const newSet1 = new Set(s1.split(''))
//     const newSet2 = new Set(s2.split(''))
//     for(let i =0; i < s1.length; i++){
//         if(newSet2.has(s1[i].toLowerCase()) || newSet2.has(s1[i].toUpperCase())){
//             continue
//         }
//         return false
//     }

//     for(let i = 0; i < s2.length; i++){
//         if(newSet1.has(s2[i].toLowerCase()) || newSet1.has(s2[i].toUpperCase())){
//             continue
//         }
//         return false
//     }
//     return true
// }

/* alternative method, translated from python */

// const anagram = (s1, s2) => {
//     if (s1.length !== s2.length) return false

//     let freq1 = {}
//     let freq2 = {}

//     for(let i=0; i<s1.length; i++){
//         if (s1[i] in freq1){
//             freq1[s1[i]] += 1
//         }
//         else{
//             freq1[s1[i]] = 1
//         }
//     }

//     for(let j=0; j<s2.length; j++){
//         if(s2[j] in freq2) freq2[s2[j]] += 1
//         else freq2[s2[j]] = 1
//     }

//     for (let key in freq1){
//         if(!freq2.hasOwnProperty(key) || freq1[key] !== freq2[key]) return false
//     }
//     return true
// }

// Or through sorting

const anagram = (s1, s2)=>{
    return s1.split('').sort().join('') === s2.split('').sort().join('')
}

/* Python shortcut */
/*

from collections import Counter

def are_anagrams(s1, s2):
    if len(s1) != len(s2):
        return False
    return Counter(s1) == Counter(s2)

O(n) time and space complexity

OR

def are_anagrams(s1, s2):
    if len(s1) != len(s2):
        return False
    return sorted(s1) == sorted(s2)

O(nlog(n)) time complexity
O(n) space complexity

*/

module.exports = anagram;
