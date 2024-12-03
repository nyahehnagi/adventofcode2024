import loadFile from "../utils/loadfile";
import { countSafeLines, parseDay2Data, countSafeLinesPart2 } from "./day2utils";

async function main() {
  const data = await loadFile("src/day2/day2data.txt");

  const matrixData = parseDay2Data(data);

  console.log(countSafeLines(matrixData));
  console.log(countSafeLinesPart2(matrixData));
}

main();
