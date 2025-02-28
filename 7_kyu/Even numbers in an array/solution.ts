export const evenNumbers = (array: number[], n: number): number[] =>
    array.filter((el: number): boolean => !(el % 2)).slice(-n);
