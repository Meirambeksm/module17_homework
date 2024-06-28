import { getPercent } from "../utils/getPercent";

describe("test for getPercents function", () => {
  const percent = 20;
  const number = 100;

  it("should operate percent of number", () => {
    expect(getPercent(percent, number)).toBe(20);
  });

  it("should operate percent of number", () => {
    expect(getPercent(percent, number)).toBe(10);
  });
});
