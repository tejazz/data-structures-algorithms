// https://leetcode.com/problems/permutation-in-string

var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false;

    let s1Hash = new Array(26).fill(0);
    let windowHash = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        s1Hash[s1.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < s2.length; i++) {
        let extractedText = s2.substring(i, i + s1.length);

        windowHash = new Array(26).fill(0);

        for (let k = 0; k < extractedText.length; k++) {
            windowHash[extractedText.charCodeAt(k) - 97]++;
        }

        if (s1Hash.join('') === windowHash.join('')) return true;
    }

    return false;
};

checkInclusion('ab', 'eidbaoooo');  // true