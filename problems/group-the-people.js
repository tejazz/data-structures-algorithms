// https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/

var groupThePeople = function(groupSizes) {
    let subGroups = {};

    for (let i = 0; i < groupSizes.length; i++) {
        if (subGroups[groupSizes[i]]) {
            let size = groupSizes[i];
            let subGroupLength = subGroups[groupSizes[i]].length;
            if (subGroups[groupSizes[i]][subGroupLength - 1].length < groupSizes[i]) {
                subGroups[groupSizes[i]][subGroupLength - 1].push(i);
            } else {
                subGroups[groupSizes[i]].push([i]);
            }
            continue;
        }

        subGroups[groupSizes[i]] = [[i]];
    }

    let result = [];
    Object.keys(subGroups).map(el => result = [...result, ...subGroups[el]]);

    return result;
};

console.log(groupThePeople([3,3,3,3,3,1,3]));   // [[5],[0,1,2],[3,4,6]]
console.log(groupThePeople([2,1,3,3,3,2])); // [[1],[0,5],[2,3,4]]
