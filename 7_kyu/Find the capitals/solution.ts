export const capitals = (word: string): number[] => {
    const result: number[] = [];

    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            result.push(i);
        }
    }

    return result;
};
