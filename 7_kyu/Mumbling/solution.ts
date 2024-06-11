export const accum = (s: string): string =>
    s
        .split('')
        .reduce((a: string, b: string, i: number): string => a + `-${b.toUpperCase() + b.toLowerCase().repeat(i)}`);
