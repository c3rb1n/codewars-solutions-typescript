export const sumTwoSmallestNumbers = (numbers: number[]): number =>
    [
        ...numbers.splice(numbers.indexOf(Math.min(...numbers)), 1),
        ...numbers.splice(numbers.indexOf(Math.min(...numbers)), 1)
    ].reduce((a: number, b: number): number => a + b, 0);
