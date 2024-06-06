export const summation = (num: number): number =>
    Array.from({length: num}, (_: undefined, i: number): number => i + 1).reduce(
        (a: number, b: number): number => a + b,
        0
    );
