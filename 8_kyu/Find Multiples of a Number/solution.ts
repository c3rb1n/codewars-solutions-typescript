export const findMultiples = (integer: number, limit: number): number[] =>
    Array.from({length: limit / integer}, (_, i) => integer * (i + 1));
