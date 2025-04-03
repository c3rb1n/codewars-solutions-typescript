export const convert = (n: string): string => String.fromCharCode(...(n.match(/\d\d/g) ?? []).map(Number));
