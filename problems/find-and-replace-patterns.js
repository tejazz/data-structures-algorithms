// https://leetcode.com/problems/find-and-replace-pattern

var findAndReplacePattern = function(words, pattern) {
    let results = [];
    let patternMap = getPatternMap(pattern);
    
    words.map((word) => {
        if (getPatternMap(word) === patternMap) {
            results.push(word);
        } 
    });
    
    return results;
};

function getPatternMap(word) {
    let charMap = {};
    let charCount = 1;
    let pattern = '';
    
    for (let i = 0; i < word.length; i++) {
        if (!charMap[word[i]]) {
            charMap[word[i]] = charCount;
            charCount++;
        }
        
        pattern += charMap[word[i]];
    }
    
    return pattern;
}
