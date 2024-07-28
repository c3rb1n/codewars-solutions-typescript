export const shorterReverseLonger = (a: string, b: string): string =>
    b.length > a.length ? a + b.split('').reverse().join('') + a : b + a.split('').reverse().join('') + b;
