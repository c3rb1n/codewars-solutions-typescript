export const number = (busStops: [number, number][]): number =>
    busStops.reduce((a: number, b: number[]): number => a + b[0] - b[1], 0);
