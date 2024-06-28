export const say =
    (string1: string): Function =>
    (string2: string): string =>
        `${string1} ${string2}`;
