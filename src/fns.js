export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
    return string.split("").reverse().join(""); // Splits string into each character, reverses it, and joins it together again
}