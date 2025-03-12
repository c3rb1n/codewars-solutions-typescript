export const reverseWords = (str: string): string =>
    str
        .split(' ')
        .map((el: string): string => el.split('').reverse().join(''))
        .join(' ');
