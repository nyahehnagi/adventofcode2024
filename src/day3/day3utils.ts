export function extractMultiplicationPairs(input: string): Array<[number, number]> {
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
