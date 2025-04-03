export const switcheroo = (x: string): string =>
    x.replace(/./g, (el: string): string => (el === 'a' ? 'b' : el === 'b' ? 'a' : el));
