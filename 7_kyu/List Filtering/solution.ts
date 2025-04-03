export const filter_list = (l: Array<string | number>): Array<number> =>
    l.filter((el: string | number): boolean => typeof el === 'number') as Array<number>;
