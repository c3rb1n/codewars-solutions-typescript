export const divisions = (n: number, divisor: number): number => {
    let count = 0;

    for (let i = n; i >= divisor; i /= divisor) {
        count++;
    }

    return count;
};
