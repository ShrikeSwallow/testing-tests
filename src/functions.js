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

const toArr = (string) => {
  return string.split("");
};

export const caesarCipher = (string, shiftFactor) => {
  const alphabetArr =
    "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z".split(
      ", "
    );
  const inputArr = toArr(string);
  const shiftedArr = [];
  inputArr.forEach((element) => {
    if (alphabetArr.includes(element)) {
      const index = alphabetArr.indexOf(element);
      shiftedArr.push(
        alphabetArr[Math.floor(index / 26) * 26 + ((index + shiftFactor) % 26)]
      );
    } else shiftedArr.push(element);
  });
  return shiftedArr.join("");
};
