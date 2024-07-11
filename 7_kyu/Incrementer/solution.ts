export const incrementer = (nums: number[]): number[] =>
    nums.map((el: number, i: number): number => +`${el + i + 1}`.slice(-1));
