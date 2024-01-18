import { test, expect, describe } from "vitest";

import { transformToNumber } from "./numbers";

describe("transformToNumber() Test suite", () => {

  test("it should yield NaN if the param provided is invalid", () => {
    const number = "number";

    const result = transformToNumber(number);

    expect(result).toBeNaN();
  });

  test("should transform any numeric string value into a numeric", () => {
    const number = "1";

    const result = transformToNumber(number);

    expect(result).toBeTypeOf("number");
  });
});
