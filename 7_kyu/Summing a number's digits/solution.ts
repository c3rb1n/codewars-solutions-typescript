export const sumDigits = (n: number): number =>
    `${Math.abs(n)}`.split('').reduce((a: number, b: string): number => a + +b, 0);
