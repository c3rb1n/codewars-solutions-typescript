export const divCon = (x: (string | number)[]): number =>
    x.reduce((a: number, b: string | number): number => (typeof b === 'number' ? a + b : a - +b), 0);
