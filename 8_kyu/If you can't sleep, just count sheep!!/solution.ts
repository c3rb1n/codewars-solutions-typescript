export const countSheep = (num: number): string =>
    Array.from({length: num}, (el: undefined, i: number): string => `${i + 1} sheep...`).join('');
