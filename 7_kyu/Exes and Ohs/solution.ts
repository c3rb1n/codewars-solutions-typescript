export const xo = (str: string): boolean => (str.match(/x/gi) ?? []).length === (str.match(/o/gi) ?? []).length;
