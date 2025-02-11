export const addLength = (str: string): string[] => str.split(' ').map((el: string): string => `${el} ${el.length}`);
