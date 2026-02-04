import { capitalize } from "./fns";

test("Capitalize 'charlie'", () => {
    expect(capitalize("charlie")).toBe("Charlie");
})