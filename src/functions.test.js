import { capitalize, reverseString, Calculator } from "./functions";

test("capitalizes string passed as an argument", () => {
  expect(capitalize("test")).toBe("Test");
});

test("Reverses string passed as an argument", () => {
  expect(reverseString("monkaS")).toBe("Saknom");
});

test("Calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.", () => {
  expect(Calculator.add(8, 8)).toBe(16);
  expect(Calculator.subtract(2, 2)).toBe(0);
  expect(Calculator.multiply(2, 2)).toBe(4);
  expect(Calculator.divide(2, 2)).toBe(1);
});
