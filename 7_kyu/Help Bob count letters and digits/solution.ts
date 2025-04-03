export const countLettersAndDigits = (input: string): number => (input.match(/[a-z\d]/gi) ?? []).length;
