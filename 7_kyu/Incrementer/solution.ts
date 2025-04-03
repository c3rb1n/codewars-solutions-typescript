export const incrementer = (nums: number[]): number[] =>
    nums.map((num: number, i: number): number => (`${num + i + 1}`.length === 2 ? +`${num + i + 1}`[1] : num + i + 1));
