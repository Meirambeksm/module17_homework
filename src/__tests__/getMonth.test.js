import { getMonth } from "../utils/getMonth";

describe("test for getMonth function", () => {
  const month = 5;
  it("should return month name based on number", () => {
    expect(getMonth(month)).toBe("May");
  });

  it("should return month name based on number", () => {
    expect(getMonth(month)).toBe("August");
  });
});
