type InternalFunction = (num: number) => number;

export const add =
    (a: number): InternalFunction =>
    b =>
        a + b;
