export const equalize = (array: number[]): string[] =>
    array.length
        ? array.map((el: number, i: number, curArr: number[]) => `${el - curArr[0] >= 0 ? '+' : ''}${el - curArr[0]}`)
        : [];
