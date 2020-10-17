// https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/561/week-3-october-15th-october-21st/3498/

var findRepeatedDnaSequences = function(s) {
    let result = [];
    let existingDNA = {};

    // running till length - 9 since we might have a result with 11 letters
    for (i = 0; i < s.length - 9; i++) {
        let dna = s.slice(i, i + 10);
        console.log(dna);

        if (existingDNA[dna] && !result.includes(dna)) {
            result.push(dna);
            continue;
        }

        existingDNA[dna] = true;
        console.log(existingDNA);
    }

    return result;
};

console.log(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'));  //  ["AAAAACCCCC","CCCCCAAAAA"]
console.log(findRepeatedDnaSequences('AAAAAAAAAAAAA'));  //  ["AAAAAAAAAA"]
console.log(findRepeatedDnaSequences('AAAAAAAAAAA')); // ["AAAAAAAAAA"]