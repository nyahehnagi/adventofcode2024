import loadFile from "../utils/loadfile";
import { calculateDay3Part1 } from "./day3utils";

async function main() {
  const data = await loadFile("src/day3/day3data.txt");

  console.log(calculateDay3Part1(data));
}

main();

// 544334 is to low