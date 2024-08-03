export const duplicateEncode = (word: string) =>
    [...word]
        .map((el1: string, _: number, array: string[]): string =>
            array.filter((el2: string): boolean => el1.toLowerCase() === el2.toLowerCase()).length > 1 ? ')' : '('
        )
        .join('');
