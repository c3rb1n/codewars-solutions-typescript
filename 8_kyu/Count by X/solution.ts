export const countBy = (x: number, n: number): number[] =>
    Array.from({length: n}, (_: undefined, i: number): number => (i + 1) * x);
