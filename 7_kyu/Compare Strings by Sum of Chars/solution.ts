export const compare = (s1: string | null, s2: string | null): boolean =>
    ((s1 === '' || s1 === null || /[^a-z]/i.test(s1)) && (s2 === '' || s2 === null || /[^a-z]/i.test(s2))) ||
    s1
        ?.toUpperCase()
        .split('')
        .reduce((a: number, b: string): number => a + b.charCodeAt(0), 0) ===
        s2
            ?.toUpperCase()
            .split('')
            .reduce((a: number, b: string): number => a + b.charCodeAt(0), 0);
