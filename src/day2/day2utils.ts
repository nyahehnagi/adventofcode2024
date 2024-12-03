import { IsSafeReport, IsSafeReportWithModifiedReport } from "./day2types";

export function parseDay2Data(data: string): number[][] {
  return data
    .split("\n")
    .map((line) => line.split(/\s+/).map((num) => parseInt(num, 10)));
}

export function isDifferenceSafe(arg0: number, arg1: number): boolean {
  const difference = Math.abs(arg0 - arg1);
  return difference >= 1 && difference <= 3;
}

export function isAlwaysIncreasingOrDecreasing(data: number[]): IsSafeReport {
  let increasing = true;
  let decreasing = true;
  let firstFailingIndex = -1;
  let secondFailingIndex = -1;

  for (let i = 0; i < data.length - 1; i++) {
    if (data[i] < data[i + 1]) {
      decreasing = false;
    } else if (data[i] > data[i + 1]) {
      increasing = false;
    }

    if (!increasing && !decreasing) {
      firstFailingIndex = i;
      secondFailingIndex = i + 1;
      return { isValid: false, firstFailingIndex, secondFailingIndex };
    }
  }

  return { isValid: true, firstFailingIndex, secondFailingIndex };
}

export function isSafeLineOfData(data: number[]): boolean {
  if (!isAlwaysIncreasingOrDecreasing(data).isValid) {
    return false;
  }

  for (let i = 0; i < data.length - 1; i++) {
    if (!isDifferenceSafe(data[i], data[i + 1])) {
      return false;
    }
  }
  return true;
}

export function countSafeLines(matrix: number[][]): number {
  return matrix.filter((line) => isSafeLineOfData(line)).length;
}

export function isAlwaysIncreasingOrDecreasingByRemovingOneElement(
  data: number[],
  indexToRemove: number
): IsSafeReportWithModifiedReport {
  const reportWithOutFirstIndex = data.filter(
    (_, index) => index !== indexToRemove
  );
  if (isAlwaysIncreasingOrDecreasing(reportWithOutFirstIndex).isValid) {
    return { isValid: true, modifiedReport: reportWithOutFirstIndex };
  }

  return { isValid: false, modifiedReport: data };
}

export function areDifferencesSafeByRemovingOneElement(
  data: number[],
  indexToRemove: number
): IsSafeReportWithModifiedReport {
  const reportWithOutFirstIndex = data.filter(
    (_, index) => index !== indexToRemove
  );

  for (let i = 0; i < reportWithOutFirstIndex.length - 1; i++) {
    if (
      !isDifferenceSafe(
        reportWithOutFirstIndex[i],
        reportWithOutFirstIndex[i + 1]
      )
    ) {
      return { isValid: false, modifiedReport: data };
    }
  }
  return { isValid: true, modifiedReport: reportWithOutFirstIndex };
}

export function isReportAdjacentSafe(data: number[]): IsSafeReport {
  for (let i = 0; i < data.length - 1; i++) {
    if (!isDifferenceSafe(data[i], data[i + 1])) {
      return {
        isValid: false,
        firstFailingIndex: i,
        secondFailingIndex: i + 1,
      };
    }
  }
  return { isValid: true, firstFailingIndex: -1, secondFailingIndex: -1 };
}

export function isSafeLineOfDataPart2(data: number[]): boolean {
  const orderedSafeReport = isAlwaysIncreasingOrDecreasing(data);
  const adjacentSafeReport = isReportAdjacentSafe(data);

  if (orderedSafeReport.isValid && adjacentSafeReport.isValid) {
    return true;
  }

  // The report is already ordered but adjacents are a problem
  if (!adjacentSafeReport.isValid && orderedSafeReport.isValid) {
    const modifiedReportFirstElement = areDifferencesSafeByRemovingOneElement(
      data,
      adjacentSafeReport.firstFailingIndex
    );
    if (modifiedReportFirstElement.isValid) {
      return true;
    }
    const modifiedReportSecondElement = areDifferencesSafeByRemovingOneElement(
      data,
      adjacentSafeReport.secondFailingIndex
    );
    if (modifiedReportSecondElement.isValid) {
      return true;
    }
    // If we get here, then this report cannot be fixed by removing one element in an already ordered report
    return false;
  }

  // The report is not ordered but adjacents are ok.
  if (!orderedSafeReport.isValid && adjacentSafeReport.isValid) {
    const modifiedReportFirstElement =
      isAlwaysIncreasingOrDecreasingByRemovingOneElement(
        data,
        orderedSafeReport.firstFailingIndex
      );
    if (modifiedReportFirstElement.isValid) {
      if (isReportAdjacentSafe(modifiedReportFirstElement.modifiedReport)) {
        return true;
      }
    }
    const modifiedReportSecondElement =
      isAlwaysIncreasingOrDecreasingByRemovingOneElement(
        data,
        orderedSafeReport.secondFailingIndex
      );
    if (modifiedReportSecondElement.isValid) {
      if (isReportAdjacentSafe(modifiedReportSecondElement.modifiedReport)) {
        return true;
      }
    }
    // If we get here, then this report cannot be fixed by removing an ordered element
    return false;
  }

  // The report is not ordered and adjacents are also a problem

  // get the lowest failing first index
  if (orderedSafeReport.firstFailingIndex < adjacentSafeReport.firstFailingIndex) {
    // Then the first failing index is as a result of poor ordering
    const modifiedReportFirstElement = isAlwaysIncreasingOrDecreasingByRemovingOneElement(
      data,
      orderedSafeReport.firstFailingIndex
    );
    if (modifiedReportFirstElement.isValid) {
      if (
        isReportAdjacentSafe(modifiedReportFirstElement.modifiedReport)
          .isValid
      ) {
        return true;
      }
    }
    // Cannot fix by the first failing index, look at the second one
    const modifiedReportSecondElement = isAlwaysIncreasingOrDecreasingByRemovingOneElement(
      data,
      orderedSafeReport.secondFailingIndex
    );
    if (modifiedReportSecondElement.isValid) {
      if (
        isReportAdjacentSafe(modifiedReportSecondElement.modifiedReport)
          .isValid
      ) {
        return true;
      }
    }
    
  } else {
    // Then the first failing index is as a result of poor adjacency
    const modifiedReportFirstElement = areDifferencesSafeByRemovingOneElement(
      data,
      adjacentSafeReport.firstFailingIndex
    );
    if (modifiedReportFirstElement.isValid) {
      if (
        isAlwaysIncreasingOrDecreasing(modifiedReportFirstElement.modifiedReport)
          .isValid
      ) {
        return true;
      }
    }
    // Cannot fix by the first failing index, look at the second one
    const modifiedReportSecondElement = areDifferencesSafeByRemovingOneElement(
      data,
      adjacentSafeReport.secondFailingIndex
    );
    if (modifiedReportSecondElement.isValid) {
      if (
        isAlwaysIncreasingOrDecreasing(modifiedReportSecondElement.modifiedReport)
          .isValid
      ) {
        return true;
      }
    }
  }

  // if we are here, then this is because the indexes are the same.




  return false;
  // 544 is the answer.. but my code does not work it out properly.. hmm
  // 541 is to low
  // 543 is wrong
  // 546 is to high
}

export function countSafeLinesPart2(matrix: number[][]): number {
  return matrix.filter((line) => isSafeLineOfDataPart2(line)).length;
}
