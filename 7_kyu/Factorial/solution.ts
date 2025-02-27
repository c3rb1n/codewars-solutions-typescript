export const factorial = (n: number): number => (n < 2 ? 1 : n * factorial(n - 1));
