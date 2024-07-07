export const change = (string: string): string =>
    [...'abcdefghijklmnopqrstuvwxyz'].reduce(
        (a: string, b: string): string => a + (string.toLowerCase().includes(b) ? '1' : '0'),
        ''
    );
