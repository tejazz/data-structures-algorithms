// https://leetcode.com/problems/rearrange-words-in-a-sentence/

var arrangeWords = function(text) {
    let words = text.toLowerCase().split(' ');
    words.sort((a, b) => a.length - b.length);
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);

    return words.join(' ');
};

console.log(arrangeWords('Leetcode is cool'));          // Is cool leetcode
console.log(arrangeWords('Keep calm and code on'));     // On and keep calm code
