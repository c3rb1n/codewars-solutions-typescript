export const accum = (s: string): string =>
    s
        .split('')
        .map((el: string, i: number): string => el.toUpperCase() + el.toLowerCase().repeat(i))
        .join('-');
