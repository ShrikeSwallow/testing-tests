export const capitalize = (string) => {
  return string[0].toUpperCase() + string.substring(1).toLowerCase();
};

export const reverseString = (string) => {
  return string.split("").reverse().join("");
};

export const Calculator = {
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
  },
};
