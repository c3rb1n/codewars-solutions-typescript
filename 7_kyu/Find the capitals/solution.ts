export const capitals = (word: string): number[] =>
    word
        .split('')
        .map((el: string, i: number): number | string => (el === el.toUpperCase() ? i : el))
        .filter((el: number | string): boolean => typeof el === 'number') as number[];
