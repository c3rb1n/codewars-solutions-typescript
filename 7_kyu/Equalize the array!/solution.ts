export const equalize = (array: number[]): string[] =>
    array.map((el: number, _: number, arr: number[]): string => `${el - arr[0] < 0 ? '' : '+'}${el - arr[0]}`);
