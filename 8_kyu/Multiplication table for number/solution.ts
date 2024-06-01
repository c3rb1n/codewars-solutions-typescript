export const multiTable = (number: number): string =>
    Array.from({length: 10}, (_: undefined, i: number): string => `${i + 1} * ${number} = ${number * (i + 1)}`).join(
        '\n'
    );
