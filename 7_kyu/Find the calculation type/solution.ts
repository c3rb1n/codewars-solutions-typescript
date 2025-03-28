export const calcType = (a: number, b: number, res: number): string =>
    a + b === res ? 'addition' : a - b === res ? 'subtraction' : a * b === res ? 'multiplication' : 'division';
