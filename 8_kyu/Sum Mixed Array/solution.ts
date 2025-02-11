export const sumMix = (x: (string | number)[]): number =>
    x.reduce((a: number, b: string | number): number => a + +b, 0);
