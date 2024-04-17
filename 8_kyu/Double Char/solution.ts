export const doubleChar = (str: string): string =>
    str
        .split('')
        .map(el => el.repeat(2))
        .join('');
