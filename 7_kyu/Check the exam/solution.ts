export const checkExam = (array1: string[], array2: string[]): number => {
    const result: number = array2.reduce(
        (a: number, b: string, i: number): number => a + (b === '' ? 0 : b === array1[i] ? 4 : -1),
        0
    );

    return result < 0 ? 0 : result;
};
