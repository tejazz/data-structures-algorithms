// https://leetcode.com/problems/find-the-town-judge/

var findJudge = function(n, trust) {
    if (trust.length === 0 && n > 1) return -1;
    if (n === 1) return 1;
    
    let trustHash = {};
    let trustee = {};
    let judge = -1;
    
    for (let i = 0; i < trust.length; i++) {
        if (!trustee[trust[i][0]]) {
            trustee[trust[i][0]] = 1;
        }

        if (trustHash[trust[i][1]]) {
            trustHash[trust[i][1]] += 1;
        } else {
            trustHash[trust[i][1]] = 1;
        }
    }

    Object.keys(trustHash).map(key => {
        if (trustHash[key] === n - 1 && !trustee[key]) judge = key;
    })

    return judge;
};

console.log(findJudge(2, [[1,3],[2,3],[3,1]]));                 // -1
console.log(findJudge(3, [[1,3],[2,3]]));                       // 3
console.log(findJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]]));     // 3
