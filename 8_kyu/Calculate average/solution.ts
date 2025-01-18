export const findAverage = (array: number[]): number =>
    array.reduce((a: number, b: number): number => a + b, 0) / array.length || 0;
