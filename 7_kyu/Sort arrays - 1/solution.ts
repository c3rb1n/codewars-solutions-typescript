export const sortMe = (names: string[]): string[] => names.sort((a: string, b: string): number => (a < b ? -1 : 1));
