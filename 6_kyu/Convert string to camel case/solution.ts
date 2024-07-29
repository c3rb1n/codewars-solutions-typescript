export const toCamelCase = (str: string): string =>
    str
        .split(/-|_/)
        .map((el, i) => (i > 0 ? el[0].toUpperCase() + el.slice(1) : el))
        .join('');
