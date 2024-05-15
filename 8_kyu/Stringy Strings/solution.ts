export const stringy = (n: number): string =>
    Array.from({length: n}, (_: undefined, i: number): string => (i % 2 ? '0' : '1')).join('');
