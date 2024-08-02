export const dashatize = (num: number): string => `${num}`.match(/[02468]+|[13579]/g)?.join('-') || '';
