export const twoArePositive = (a: number, b: number, c: number): boolean =>
    [a, b, c].filter((el: number): boolean => el > 0).length === 2;
