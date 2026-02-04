import { capitalize, reverseString } from "./fns";

test("Capitalize 'charlie'", () => {
    expect(capitalize("charlie")).toBe("Charlie");
})

test("Reverse 'nilbog'", () => {
    expect(reverseString("nilbog")).toBe("goblin")
})