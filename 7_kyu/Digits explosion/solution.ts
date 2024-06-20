export const explode = (s: string): string => [...s].map((el: string): string => el.repeat(+el)).join('');
