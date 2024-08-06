export const countSmileys = (arr: string[]): number =>
    arr.filter((el: string): boolean => /^[:;][-~]?[)D]$/.test(el)).length;
