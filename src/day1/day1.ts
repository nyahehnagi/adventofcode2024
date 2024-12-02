import loadFile from "../utils/loadfile";
import { summedDistanceBetweenTwoNumbersAfterOrderingArray } from "./day1Utils";
import { totalSimilarityScore } from "./day1Utils";

function parseData(data: string): [number[], number[]] {
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

async function main() {
  const data = await loadFile("src/day1/day1data.txt");
  const [leftList, rightList] = parseData(data);

  console.log(summedDistanceBetweenTwoNumbersAfterOrderingArray(leftList, rightList));
  console.log(totalSimilarityScore(leftList, rightList));
}

main();
