export const solve = (s: string): number => Math.max(...(s.match(/\d+/g)?.map((el: string): number => +el) || []));
