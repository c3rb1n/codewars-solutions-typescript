export const number = (array: string[]): string[] => array.map((el: string, i: number): string => `${i + 1}: ${el}`);
