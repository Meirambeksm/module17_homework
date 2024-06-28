import { tempConverter } from "../utils/tempConverter";

describe("test for tempConverter function", () => {
  const temp = 10;
  it("should return Fahrenheit from Celcius", () => {
    expect(tempConverter(temp)).toBe(
      `${temp} градусов по Цельсию равны 50 градусам по Фаренгейту`
    );
  });

  it("should return Fahrenheit from Celcius", () => {
    expect(tempConverter(temp)).toBe(
      "15 градусов по Цельсию равны 50 градусам по Фаренгейту"
    );
  });
});
