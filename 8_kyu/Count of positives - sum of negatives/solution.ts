export const countPositivesSumNegatives = (input: any): number[] =>
    input && input.length
        ? [
              input.filter((el: number): boolean => el > 0).length,
              input.filter((el: number): boolean => el < 0).reduce((a: number, b: number): number => a + b, 0)
          ]
        : [];
