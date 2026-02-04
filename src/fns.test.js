import { capitalize, myCalculator, reverseString } from "./fns";

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