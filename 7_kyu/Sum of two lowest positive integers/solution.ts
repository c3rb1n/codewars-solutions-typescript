export const sumTwoSmallestNumbers = (numbers: Array<number>): number =>
    numbers
        .sort((a: number, b: number): number => a - b)
        .slice(0, 2)
        .reduce((a: number, b: number): number => a + b, 0);
