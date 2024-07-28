export const vowelIndices = (word: string): number[] =>
    [...word]
        .map((el: string, i: number): number => (/[aeiouy]/i.test(el) ? i + 1 : -1))
        .filter((el: number): boolean => el > 0);
