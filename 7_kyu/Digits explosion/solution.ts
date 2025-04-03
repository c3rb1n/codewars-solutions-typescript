export const explode = (s: string): string => s.replace(/\d/g, (el: string): string => el.repeat(+el));
