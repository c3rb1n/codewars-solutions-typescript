export const findNeedle = (haystack: any[]): string =>
    `found the needle at position ${haystack.findIndex(el => el === 'needle')}`;
