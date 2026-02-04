import { capitalize } from "./fns";

test("Capitalize 'charlie'", () => {
    expect(capitalize("charlie")).toBe("Charlie");
})

test("Reverse 'Nilbog'", () => {
    expect(reverseString("nilbog")).toBe("goblin")
})