import { analyzeArray, caesarCipher, capitalize, myCalculator, reverseString } from "./fns";

test("Capitalize 'charlie'", () => {
    expect(capitalize("charlie")).toBe("Charlie");
})



test("Reverse 'nilbog'", () => {
    expect(reverseString("nilbog")).toBe("goblin")
})



test("Add 2 + 2 to equal 4", () => {
    expect(myCalculator.add(2, 2)).toEqual(4);
})

test("Subtract 2 - 2 to equal 0", () => {
    expect(myCalculator.subtract(2, 2)).toEqual(0);
})

test("Multiply 2 * 3 to equal 6", () => {
    expect(myCalculator.multiply(2, 3)).toEqual(6);
})

test("Divide 6 / 2 to equal 3", () => {
    expect(myCalculator.divide(6, 2)).toEqual(3);
})


test("Caesar shift 'xyz' to 'abc'", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
})

test("Check capitalization- 'HeLLo' to 'KhOOr'", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
})

test("Check punctuation- 'Hello, World!' to 'Khoor, Zruog!'", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
})


test("Check Analyze array function- returns average, min, max, and length", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1})
})