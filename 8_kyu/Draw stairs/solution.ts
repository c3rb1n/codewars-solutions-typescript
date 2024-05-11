export const drawStairs = (n: number): string =>
    Array.from({length: n}, (el: undefined): string => 'I')
        .map((el: string, i: number) => ' '.repeat(i) + el)
        .join('\n');
