// https://leetcode.com/problems/excel-sheet-column-title/

var convertToTitle = function(n) {
    let result = '';

    // check if number is within 26
    if (n <= 26) return n%26 === 0 ? 'Z' : String.fromCharCode(65 + n%26 - 1);
    
    // for all other cases
    // note: if rem = 0, then the quotient has to be reduced by 1
    while (n > 26) {
        let rem = n % 26;
        n = rem === 0 ? Math.floor(n/26) - 1 : Math.floor(n/26);
        result = rem === 0 ? 'Z' : String.fromCharCode(65 + rem - 1) + result;
        
        if (n <= 26) {
            let firstChar = n % 26 === 0 ? 'Z' : String.fromCharCode(65 + n % 26 - 1);
            result = firstChar + result;
        }
    }

    return result;
};

console.log(convertToTitle(5));    // E
console.log(convertToTitle(26));    // Z
console.log(convertToTitle(701));   // ZY
console.log(convertToTitle(702));   // ZZ
console.log(convertToTitle(52));   // AZ
console.log(convertToTitle(705));   // AAC
