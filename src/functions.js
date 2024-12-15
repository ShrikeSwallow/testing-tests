export const capitalize = (string) => {
  return string[0].toUpperCase() + string.substring(1).toLowerCase();
};

export const reverseString = (string) => {
  return string.split("").reverse().join("");
};
