const findOldestAge = (ages: number[]): number[] => ages.splice(ages.indexOf(Math.max(...ages)), 1);

export const twoOldestAges = (ages: number[]): number[] => [...findOldestAge(ages), ...findOldestAge(ages)].reverse();
