import {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
} from "./functions";

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

test("A caesarCipher function that takes a string and a shift factor and returns it with each character 'shifted'.", () => {
  expect(caesarCipher("yza", 3)).toBe("bcd");
  expect(caesarCipher("yzA", 3)).toBe("bcD");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
