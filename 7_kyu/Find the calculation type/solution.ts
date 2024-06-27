export const calcType = (a: number, b: number, res: number): string =>
    a + b === res ? 'addition' : a * b === res ? 'multiplication' : a - b === res ? 'subtraction' : 'division';
