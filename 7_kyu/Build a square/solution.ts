export const generateShape = (int: number): string =>
    Array.from({length: int}, (el: undefined): string => '+'.repeat(int)).join('\n');
