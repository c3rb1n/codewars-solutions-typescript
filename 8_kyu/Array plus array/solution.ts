export const arrayPlusArray = (arr1: number[], arr2: number[]): number =>
    arr1.reduce((a: number, b: number) => a + b, 0) + arr2.reduce((a: number, b: number) => a + b, 0);
