// https://leetcode.com/problems/queue-reconstruction-by-height/

var reconstructQueue = function(people) {
    people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);
    let final = [];

    for (let i = 0; i < people.length; i++) {
        final.splice(people[i][1], 0, people[i]);
    }

    return final;
};

console.log(reconstructQueue([[9,0],[7,0],[1,9],[3,0],[2,7],[5,3],[6,0],[3,4],[6,2],[5,2]])); // [[3,0],[6,0],[7,0],[5,2],[3,4],[5,3],[6,2],[2,7],[9,0],[1,9]]