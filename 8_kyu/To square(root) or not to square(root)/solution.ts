export const squareOrSquareRoot = (array: number[]): number[] =>
    array.map((el: number): number => (+Math.sqrt(el).toFixed() === Math.sqrt(el) ? Math.sqrt(el) : el ** 2));
