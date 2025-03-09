export const getEvenNumbers = (numbersArray: number[]): number[] =>
    numbersArray.filter((num: number): boolean => num % 2 === 0);
