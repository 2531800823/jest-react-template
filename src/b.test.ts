import { a } from "./b";

describe("", () => {
  test("lodash-es", () => {
    expect(a).toEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
  });
});
