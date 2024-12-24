export const multiTable = (number: number): string =>
    Array(10)
        .fill(undefined)
        .map((_: undefined, i: number): string => `${i + 1} * ${number} = ${(i + 1) * number}`)
        .join('\n');
