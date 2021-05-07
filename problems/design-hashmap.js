// https://leetcode.com/explore/challenge/card/march-leetcoding-challenge-2021/588/week-1-march-1st-march-7th/3663/

/**
 * Initialize your data structure here.
*/
var MyHashMap = function () {
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
*/
MyHashMap.prototype.put = function (key, value) {
    this[key] = value;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
*/
MyHashMap.prototype.get = function (key) {
    if (this[key] === null || this[key] === undefined) return -1;
    return this[key];
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
*/
MyHashMap.prototype.remove = function (key) {
    delete this[key];
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
*/
