export function distanceBetweenTwoNumbers(arg0: number, arg1: number): number {
  return Math.abs(arg0 - arg1);
}

export function summedDistanceBetweenTwoNumbersAfterOrderingArray(
  arg0: number[],
  arg1: number[]
): Number {
  const sortedArray1 = arg0.sort();
  const sortedArray2 = arg1.sort();
  let totalDistance = 0;

  for (let i = 0; i < sortedArray1.length; i++) {
    totalDistance += distanceBetweenTwoNumbers(
      sortedArray1[i],
      sortedArray2[i]
    );
  }

  return totalDistance;
}

export function occurancesOfNumberInArray(
  arg0: number,
  arg1: number[]
): number {
  let count = 0;

  for (const item of arg1) {
    if (item === arg0) {
      count++;
    }
  }

  return count;
}

export function totalSimilarityScore(arg0: number[], arg1: number[]): number {
  let totalScore = 0;

  for (let i = 0; i < arg0.length; i++) {
    totalScore += occurancesOfNumberInArray(arg0[i], arg1) * arg0[i];
  }

  return totalScore;
}

export function parseDay1Data(data: string): [number[], number[]] {
  const lines = data.split("\n");

  const leftList: number[] = [];
  const rightList: number[] = [];

  for (const item of lines) {
    const [first, second] = item.split(/\s+/);
    leftList.push(parseInt(first, 10));
    rightList.push(parseInt(second, 10));
  }

  return [leftList, rightList];
}
