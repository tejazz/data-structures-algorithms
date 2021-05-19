// https://leetcode.com/problems/sort-characters-by-frequency

var frequencySort = function(s) {
    let frequencyHash = {};
    let final = '';
    
    for (let i = 0; i < s.length; i++) {
        if (frequencyHash[s[i]] >= 1) {
            frequencyHash[s[i]] += 1;
        } else {
            frequencyHash[s[i]] = 1;
        }
    }
    
    let frequencyArray = [];
    
    Object.keys(frequencyHash).map((key) => frequencyArray.push({ [key]: frequencyHash[key] }));

    frequencyArray.sort((a, b) => b[Object.keys(b)[0]] - a[Object.keys(a)[0]]);
    
    frequencyArray.map(el => {
        let key = Object.keys(el)[0];
        
        for (let i = 0; i < el[key]; i++) {
            final += key;
        }
    });
    
    return final;
};
