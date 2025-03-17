export const divCon = (x: (string | number)[]): number =>
    x.reduce((a: number, b: number | string): number => (typeof b === 'number' ? a + b : a - +b), 0);
