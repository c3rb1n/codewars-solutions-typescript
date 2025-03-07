export const oddOrEven = (array: number[]): string =>
    array.reduce((a: number, b: number): number => a + b, 0) % 2 ? 'odd' : 'even';
