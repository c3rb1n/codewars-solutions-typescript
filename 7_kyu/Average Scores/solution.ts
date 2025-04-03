export const average = (scores: number[]): number =>
    Math.round(scores.reduce((a: number, b: number): number => a + b) / scores.length);
