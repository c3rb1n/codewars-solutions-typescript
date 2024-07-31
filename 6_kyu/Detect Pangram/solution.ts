export const isPangram = (phrase: string): boolean => {
    const abc: string = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < abc.length; i++) {
        if (!phrase.toLowerCase().includes(abc[i])) return false;
    }

    return true;
};
