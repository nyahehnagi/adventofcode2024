import loadFile from "../utils/loadfile";
import { summedDistanceBetweenTwoNumbersAfterOrderingArray } from "./day1Utils";
import { totalSimilarityScore } from "./day1Utils";
import { parseData } from "./day1Utils";

async function main() {
  const data = await loadFile("src/day1/day1data.txt");
  const [leftList, rightList] = parseData(data);

  console.log(summedDistanceBetweenTwoNumbersAfterOrderingArray(leftList, rightList));
  console.log(totalSimilarityScore(leftList, rightList));
}

main();
