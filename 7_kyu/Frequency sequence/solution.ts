export const freqSeq = (str: string, sep: string): string =>
    str
        .split('')
        .map(
            (element: string, i: number, arr: string[]): string =>
                `${arr.filter((el: string): boolean => element === el).length}`
        )
        .join(sep);
