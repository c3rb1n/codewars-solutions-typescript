export const getEvenNumbers = (numbersArray: number[]): number[] =>
    numbersArray.filter((n: number): boolean => n % 2 === 0);
