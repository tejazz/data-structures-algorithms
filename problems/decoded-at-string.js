// https://leetcode.com/problems/decoded-string-at-index/

var decodeAtIndex = function (S, K) {
    let strLen = 0;

    // calculate total length of decoded string
    for (let i = 0; i < S.length; i++) {
        if ((/[0-9]/g).test(S[i])) {
            strLen = parseInt(S[i]) * strLen;
        } else {
            strLen++;
        }
    }

    for (let i = S.length - 1; i >= 0; i--) {
        K = K % strLen;

        if (K === 0 && !(/[0-9]/g).test(S[i])) {
            return S[i];
        }

        if ((/[0-9]/g).test(S[i])) {
            strLen = Math.round(strLen / parseInt(S[i]));
        } else {
            strLen--;
        }
    }

    return '';
};

console.log(decodeAtIndex('leet2code3', 10)); // o
console.log(decodeAtIndex('ha22', 5)); // h
console.log(decodeAtIndex("jb8dis8msunncn92o7o45iq7jrkkmx8q24vesm6i4jdtweq6gxccrb7p2fhxsqke7njwcul4y9cd3rpmrhq3ve6prifmt7aa89tt", 731963130)); // b
