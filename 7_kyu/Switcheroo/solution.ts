export const switcheroo = (x: string): string =>
    x
        .split('')
        .map((el: string): string => (el === 'a' ? 'b' : el === 'b' ? 'a' : 'c'))
        .join('');
