import { isDifferenceSafe } from "./day2utils";
import { isSafeLineOfData } from "./day2utils";
import { parseDay2Data } from "./day2utils";
import { isAlwaysIncreasingOrDecreasing } from "./day2utils";
import { countSafeLines } from "./day2utils";
import { IsSafeReport, IsSafeReportWithModifiedReport } from "./day2types";
import { isAlwaysIncreasingOrDecreasingByRemovingOneElement } from "./day2utils";
import { areDifferencesSafeByRemovingOneElement } from "./day2utils";

describe("Advent of Code 2024 Day 2", () => {
  test("that the difference between 2 numbers is at least 1 or no more than 3", () => {
    expect(isDifferenceSafe(1, 2)).toEqual(true);
    expect(isDifferenceSafe(1, 3)).toEqual(true);
    expect(isDifferenceSafe(3, 2)).toEqual(true);
    expect(isDifferenceSafe(1, 4)).toEqual(true);
    expect(isDifferenceSafe(1, 5)).toEqual(false);
    expect(isDifferenceSafe(5, 1)).toEqual(false);
    expect(isDifferenceSafe(5, 5)).toEqual(false);
    expect(isDifferenceSafe(6, 3)).toEqual(true);
  });

  test("is safe line of data", () => {
    const inValidData = [1, 2, 7, 8, 9];
    const inValidData2 = [9, 7, 6, 2, 1];
    const safeData = [1, 3, 6, 7, 9];
    expect(isSafeLineOfData(inValidData)).toEqual(false);
    expect(isSafeLineOfData(inValidData2)).toEqual(false);
    expect(isSafeLineOfData(safeData)).toEqual(true);
  });

  test("if the values of an array are always increasing or always decreasing", () => {
    const increasingData = [1, 2, 7, 8, 9];
    const descreasingData = [9, 8, 7, 2, 1];
    const invalidData = [1, 2, 7, 8, 6];

    const increasingRetVal: IsSafeReport = {
      isValid: true,
      firstFailingIndex: -1,
      secondFailingIndex: -1,
    };
    const decreasingRetVal: IsSafeReport = {
      isValid: true,
      firstFailingIndex: -1,
      secondFailingIndex: -1,
    };
    const invalidRetVal: IsSafeReport = {
      isValid: false,
      firstFailingIndex: 3,
      secondFailingIndex: 4,
    };

    expect(isAlwaysIncreasingOrDecreasing(increasingData)).toEqual(
      increasingRetVal
    );
    expect(isAlwaysIncreasingOrDecreasing(descreasingData)).toEqual(
      decreasingRetVal
    );
    expect(isAlwaysIncreasingOrDecreasing(invalidData)).toEqual(invalidRetVal);
  });

  test("parse data for Day 2", () => {
    const data = "7 6 4 2 1\n1 2 7 8 9";
    const matrix = [
      [7, 6, 4, 2, 1],
      [1, 2, 7, 8, 9],
    ];
    expect(parseDay2Data(data)).toEqual(matrix);
  });

  test("count number of safe lines of data from matrix", () => {
    const matrix = [
      [7, 6, 4, 2, 1],
      [1, 2, 7, 8, 9],
      [1, 3, 6, 7, 9],
    ];

    expect(countSafeLines(matrix)).toEqual(2);
  });

  test("is always increasing or decreasing by removing one element and returns a true after removing second element", () => {
    const data = [1, 2, 7, 8, 6];
    const indexToRemove = 4;
    const modifiedReport: IsSafeReportWithModifiedReport = {
      isValid: true,
      modifiedReport: [1, 2, 7, 8],
    };

    expect(
      isAlwaysIncreasingOrDecreasingByRemovingOneElement(data, indexToRemove)
    ).toEqual(modifiedReport);
  });

  test("is always increasing or decreasing by removing one element and returns a false and removed no elements", () => {
    const data = [1, 2, 7, 5, 4];
    const indexToRemove = 4;

    const modifiedReport: IsSafeReportWithModifiedReport = {
      isValid: false,
      modifiedReport: [1, 2, 7, 5, 4],
    };

    expect(
      isAlwaysIncreasingOrDecreasingByRemovingOneElement(data, indexToRemove)
    ).toEqual(modifiedReport);
  });

  test("is difference safe line by removing one element - fails on 1st index but succeeds ", () => {
    const data = [8, 6, 4, 4, 1];

    const indexToRemove =  3;

    const modifiedReport: IsSafeReportWithModifiedReport = {
      isValid: true,
      modifiedReport: [8, 6, 4, 1]
    };

    expect(
      areDifferencesSafeByRemovingOneElement(
        data,
        indexToRemove
      )
    ).toEqual(modifiedReport);
  });

  test("is difference safe line by removing one element - fails on 2nd index but succeeds", () => {
    const data = [69, 72, 73, 74, 76, 80];

    const indexToRemove = 5;

    const modifiedReport: IsSafeReportWithModifiedReport = {
      isValid: true,
      modifiedReport: [69, 72, 73, 74, 76]
    };

    expect(
      areDifferencesSafeByRemovingOneElement(
        data,
        indexToRemove
      )
    ).toEqual(modifiedReport);
  });
});
