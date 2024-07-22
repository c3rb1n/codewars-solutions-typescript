export const twoOldestAges = (ages: number[]): number[] =>
    [...ages.splice(ages.indexOf(Math.max(...ages)), 1), ...ages.splice(ages.indexOf(Math.max(...ages)), 1)].reverse();
