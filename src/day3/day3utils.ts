export function extractMultiplicationPairs(
  input: string
): Array<[number, number]> {
  const regex = /mul\((\d+),(\d+)\)/g;
  const results: Array<[number, number]> = [];
  let match: RegExpExecArray | null;

  while ((match = regex.exec(input)) !== null) {
    const firstNumber = parseInt(match[1], 10);
    const secondNumber = parseInt(match[2], 10);
    results.push([firstNumber, secondNumber]);
  }

  return results;
}

export function calculateTotal(tuples: Array<[number, number]>): number {
  return tuples.reduce((sum, [a, b]) => sum + a * b, 0);
}

export function calculateDay3Part1(input: string): number {
  const tuples = extractMultiplicationPairs(input);
  return calculateTotal(tuples);
}

export function splitByDoDont(input: string): { doArray: string[]; dontArray: string[] } {
  const doArray: string[] = [];
  const dontArray: string[] = [];

  const fragments = input.split(/(do\(\)|don't\(\))/);

  let currentCategory: 'do' | 'dont' | null = null;

  // Handle the first fragment before the loop - this is a do()
  if (fragments[0].trim()) {
    doArray.push(fragments[0].trim());
  }

  // Loop through the remaining fragments and classify them into the correct array
  for (let i = 1; i < fragments.length; i++) {  // Start at index 1 since we already handled the first fragment
    const fragment = fragments[i];

    if (fragment === "do()") {
      currentCategory = 'do';
    } else if (fragment === "don't()") {
      currentCategory = 'dont';
    } else if (fragment.trim()) {  // Ignore empty fragments
      if (currentCategory === 'do') {
        doArray.push(fragment.trim());
        currentCategory = null;  
      } else if (currentCategory === 'dont') {
        dontArray.push(fragment.trim());
        currentCategory = null;  
      }
    }
  }

  return { doArray, dontArray };
}

export function processDoArrayAndExtractMultiplications(doArray: string[]): Array<[number, number]> {
  // Create a single array to hold all the multiplication pairs
  const multiplicationResults: Array<[number, number]> = [];

  doArray.forEach(item => {
    // Extract multiplication pairs from the current string
    const pairs = extractMultiplicationPairs(item);
    
    // Push each pair directly onto the multiplicationResults array
    multiplicationResults.push(...pairs);  // Flatten the array by spreading the pairs
  });

  return multiplicationResults;
}

export function calculateDay3Part2(input: string): number {
  const { doArray } = splitByDoDont(input);
  const tuples = processDoArrayAndExtractMultiplications(doArray);
  return calculateTotal(tuples);
}