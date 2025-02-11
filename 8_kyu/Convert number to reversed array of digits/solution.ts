export const digitize = (n: number): number[] =>
    `${n}`
        .split('')
        .reverse()
        .map((el: string): number => +el);
