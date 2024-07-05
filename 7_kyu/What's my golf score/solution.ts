export const golfScoreCalculator = (parList: string, scoreList: string): number =>
    [...scoreList].reduce((a: number, b: string): number => a + +b, 0) -
    [...parList].reduce((a: number, b: string): number => a + +b, 0);
