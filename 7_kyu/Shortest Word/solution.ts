export const findShort = (s: string): number =>
    s.split(' ').sort((a: string, b: string): number => a.length - b.length)[0].length;
