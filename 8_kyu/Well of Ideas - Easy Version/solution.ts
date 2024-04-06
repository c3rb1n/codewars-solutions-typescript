export const well = (x: string[]): string => {
    const goodWordsCount: number = x.filter(word => word === 'good').length;

    return goodWordsCount > 2 ? 'I smell a series!' : goodWordsCount < 1 ? 'Fail!' : 'Publish!';
};
