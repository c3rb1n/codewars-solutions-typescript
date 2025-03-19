type Func = (string2: string) => string;

export const say =
    (string1: string): Func =>
    (string2: string): string =>
        `${string1} ${string2}`;
