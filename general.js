// Pig Latin Strings With Punctuations

// Input: "Hello, How Are You Today?"
// Output: "elloHay, owHay reAay ouYay odayTay?"

function punctuatedPigLatin(str) {
    // SC: O(n)
    str = str.split(" ").map((word) => {
        if (word.charAt(word.length - 1).match(/^[.,;?!]/)) {
            let temp = word.slice(0, word.length - 1);
            temp = convertToPigLatin(temp);
            word = temp + word.charAt(word.length - 1);
            return word;
        }

        word = convertToPigLatin(word);
        return word;
    });

    return str.join(" ");
}

function convertToPigLatin(word) {
    return word.slice(1) + word.charAt(0) + 'ay';
}

console.log(punctuatedPigLatin("Hello, How Are You Today?"))
