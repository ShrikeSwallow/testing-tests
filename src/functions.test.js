import { capitalize, reverseString } from "./functions";

test("capitalizes string passed as an argument", () => {
  expect(capitalize("test")).toBe("Test");
});

test("Reverses string passed as an argument", () => {
  expect(reverseString("monkaS")).toBe("Saknom");
});
