export const freqSeq = (str: string, sep: string): string =>
    str
        .split('')
        .map((a: string): number => str.split('').filter((b: string): boolean => a === b).length)
        .join(sep);
