export const reverseWords = (str: string): string =>
    str
        .split(' ')
        .map((el: string): string => [...el].reverse().join(''))
        .join(' ');
