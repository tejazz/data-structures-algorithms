// https://leetcode.com/explore/challenge/card/march-leetcoding-challenge-2021/588/week-1-march-1st-march-7th/3662/

/**
 * @param {string[]} words
 * @return {number}
*/
 var minimumLengthEncoding = function(words) {
    let refString = '';
    let indices = [];
    
    words.sort((a, b) => b.length - a.length);
    
    for (let word of words) {
        if (refString.indexOf(`${word}#`) === -1) {
            indices.push(refString.length);
            refString += `${word}#`;
        } else {
            indices.push(refString.indexOf(`${word}#`));
        }
    }
    
    return refString.length;
};
