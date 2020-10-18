import { theme } from "./theme";

describe("Theme spacings", () => {
  test("it should return `0px`", () => {
    expect(theme.spacings(0)).toBe("0px");
  });

  test("it should return `10px`", () => {
    expect(theme.spacings(1)).toBe("10px");
  });

  test("it should return `20px`", () => {
    expect(theme.spacings(2)).toBe("20px");
  });

  test("it should return `0px 10px`", () => {
    expect(theme.spacings(0, 1)).toBe("0px 10px");
  });

  test("it should return `10px 10px`", () => {
    expect(theme.spacings(1, 1)).toBe("10px 10px");
  });

  test("it should return `10px 0px`", () => {
    expect(theme.spacings(1, 0)).toBe("10px 0px");
  });

  test("it should return `10px 0px 10px`", () => {
    expect(theme.spacings(1, 0, 1)).toBe("10px 0px 10px");
  });

  test("it should return `10px 10px 0px`", () => {
    expect(theme.spacings(1, 1, 0)).toBe("10px 10px 0px");
  });

  test("it should return `0px 10px 10px`", () => {
    expect(theme.spacings(0, 1, 1)).toBe("0px 10px 10px");
  });

  test("it should return `0px 10px 0px`", () => {
    expect(theme.spacings(0, 1, 0)).toBe("0px 10px 0px");
  });

  test("it should return `0px 0px 0px 10px`", () => {
    expect(theme.spacings(0, 0, 0, 1)).toBe("0px 0px 0px 10px");
  });

  test("it should return `10px 0px 10px 0px`", () => {
    expect(theme.spacings(1, 0, 1, 0)).toBe("10px 0px 10px 0px");
  });

  test("it should return `10px 10px 10px 0px`", () => {
    expect(theme.spacings(1, 1, 1, 0)).toBe("10px 10px 10px 0px");
  });
});
