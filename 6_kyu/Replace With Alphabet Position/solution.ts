export const alphabetPosition = (text: string): string =>
    text
        .replace(/[^a-z]/gi, '')
        .toLowerCase()
        .split('')
        .map((el: string): number => 'abcdefghijklmnopqrstuvwxyz'.indexOf(el) + 1)
        .join(' ');
