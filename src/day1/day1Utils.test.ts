import { distanceBetweenTwoNumbers } from './day1Utils';
import { summedDistanceBetweenTwoNumbersAfterOrderingArray } from './day1Utils';
import { occurancesOfNumberInArray } from './day1Utils';
import { totalSimilarityScore } from './day1Utils';
import { parseData } from './day1Utils';

describe('Advent of Code 2024 Day 1', () => {
  test('total distance between 2 numbers only', () => {
    expect(distanceBetweenTwoNumbers(1, 2)).toEqual(1);
    expect(distanceBetweenTwoNumbers(1, 3)).toEqual(2);
    expect(distanceBetweenTwoNumbers(3, 2)).toEqual(1);
  });

  test('summed distance between two numbers using 2 ordered arrays of equal length', () => {
    expect(summedDistanceBetweenTwoNumbersAfterOrderingArray([1, 2], [1, 2])).toEqual(0);
    expect(summedDistanceBetweenTwoNumbersAfterOrderingArray([1, 2], [2, 3])).toEqual(2);
  });

  test('summed distance between two numbers with 2 unordered arrays of equal length', () => {
    const array1 = [3 ,4, 2, 1, 3, 3];
    const array2 = [4, 3, 5, 3, 9, 3];
    expect(summedDistanceBetweenTwoNumbersAfterOrderingArray(array1, array2)).toEqual(11);
  });

  test('Occurances of a number in an array', () => {
    const array = [4, 3, 5, 3, 9, 3];
    expect(occurancesOfNumberInArray(3, array)).toEqual(3);
    expect(occurancesOfNumberInArray(4, array)).toEqual(1);
  });

  test('calculate total similarity score between 2 arrays', () => {
    const array1 = [3 ,4, 2, 1, 3, 3];
    const array2 = [4, 3, 5, 3, 9, 3];
    expect(totalSimilarityScore(array1, array2)).toEqual(31);
  });

  test('parse data for Day 1', () => {
    const data = '3 4\n2 1\n3 3';
    const [leftList, rightList] = parseData(data);
    expect(leftList).toEqual([3, 2, 3]);
    expect(rightList).toEqual([4, 1, 3]);
  });
});
