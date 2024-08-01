export const high = (str: string): string => {
    const words: string[] = str.split(' ');
    const wordsValues: number[] = words.map((el: string): number =>
        [...el].reduce((a: number, b: string): number => a + 'abcdefghijklmnopqrstuvwxyz'.indexOf(b) + 1, 0)
    );

    return words[wordsValues.indexOf(Math.max(...wordsValues))];
};
