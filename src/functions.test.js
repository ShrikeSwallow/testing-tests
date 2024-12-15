import { capitalize } from "./functions";

test("capitalizes string passed as an argument", () => {
  expect(capitalize("test")).toBe("Test");
});
