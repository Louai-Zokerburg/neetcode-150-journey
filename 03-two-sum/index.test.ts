import { describe, expect, it } from "bun:test";
import { twoSum } from "./index";

describe("twoSum", () => {
  it("returns indices of two numbers that add up to the target (basic case)", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("handles negative numbers", () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });

  it("handles duplicate numbers", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it("works with zero in the array", () => {
    expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
  });

  it("throws if no solution exists", () => {
    expect(() => twoSum([1, 2, 3], 7)).toThrow("No two sum solution");
  });
});
