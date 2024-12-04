import { extractMultiplicationPairs, calculateTotal } from "./day3utils";

describe("Advent of Code 2024 Day 3", () => {
  test("pull out a pattern that match mul(5,4)", () => {
    const input = "mul(5,4)";
    const result = [[5, 4]];
    expect(extractMultiplicationPairs(input)).toEqual(result);
  });

  test("pull out a pattern that match a complex line", () => {
    const input =
      "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
    const result = [
      [2, 4],
      [5, 5],
      [11, 8],
      [8, 5],
    ];
    expect(extractMultiplicationPairs(input)).toEqual(result);
  });

  test("sum the multiples of a tuple", () => {
    const tuples: Array<[number, number]> = [
      [5, 4],
      [3, 2],
    ]; 
    const result = 26;
    expect(calculateTotal(tuples)).toEqual(result);
  });
});
