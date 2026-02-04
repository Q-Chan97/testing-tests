export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
    return string.split("").reverse().join(""); // Splits string into each character, reverses it, and joins it together again
}

export const myCalculator = {
    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply(a, b) {
        return a * b;
    },

    divide(a, b) {
        return a / b;
    }
};

export function caesarCipher(string, key) {
    const alphabet = [
        "a", "b", "c", "d", "e", "f", "g",
        "h", "i", "j", "k", "l", "m", "n",
        "o", "p", "q", "r", "s", "t", "u",
        "v", "w", "x", "y", "z"
    ]

    function encrypt(char) {
        const position = alphabet.indexOf(char); // Gets index of letter
        const newPosition = (position + key) % 26; // Transforms index based on key
        return alphabet[newPosition]; // Returns new letter based on new index position
    }

    return string.split("").map(encrypt).join(""); // Splits string, encrypts each character, and joins
}