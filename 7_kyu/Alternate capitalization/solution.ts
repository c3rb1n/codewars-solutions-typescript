export const capitalize = (s: string) => [
    s
        .split('')
        .map((el: string, i: number): string => (i % 2 === 0 ? el.toUpperCase() : el))
        .join(''),
    s
        .split('')
        .map((el: string, i: number): string => (i % 2 !== 0 ? el.toUpperCase() : el))
        .join('')
];
