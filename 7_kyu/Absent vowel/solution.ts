export const absentVowel = (x: string): number =>
    !/a/i.test(x) ? 0 : !/e/i.test(x) ? 1 : !/i/i.test(x) ? 2 : !/o/i.test(x) ? 3 : 4;
