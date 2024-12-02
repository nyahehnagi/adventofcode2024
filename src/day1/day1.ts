import loadFile from "../utils/loadfile";
import { summedDistanceBetweenTwoNumbersAfterOrderingArray } from "./day1utils";
import { totalSimilarityScore } from "./day1utils";
import { parseDay1Data } from "./day1utils";

async function main() {
  const data = await loadFile("src/day1/day1data.txt");
  const [leftList, rightList] = parseDay1Data(data);

  console.log(
    summedDistanceBetweenTwoNumbersAfterOrderingArray(leftList, rightList)
  );
  console.log(totalSimilarityScore(leftList, rightList));
}

main();
