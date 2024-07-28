export const absentVowel = (x: string): number =>
    !x.includes('a') ? 0 : !x.includes('e') ? 1 : !x.includes('i') ? 2 : !x.includes('o') ? 3 : 4;
