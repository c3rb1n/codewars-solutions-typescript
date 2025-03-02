export const isIsogram = (str: string): boolean =>
    str === '' ||
    Math.max(
        ...str
            .toLowerCase()
            .split('')
            .map(
                (letter1: string): number =>
                    str
                        .toLowerCase()
                        .split('')
                        .filter((letter2: string): boolean => letter1 === letter2).length
            )
    ) === 1;
