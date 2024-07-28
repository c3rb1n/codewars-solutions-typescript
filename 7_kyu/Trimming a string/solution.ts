export const trim = (str: string, size: number): string =>
    size >= str.length ? str : `${str.slice(0, size <= 3 ? size : size - 3)}...`;
