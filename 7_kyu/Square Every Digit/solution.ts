export class Kata {
    static squareDigits(num: number): number {
        return +`${num}`
            .split('')
            .map((el: string): number => Math.pow(+el, 2))
            .join('');
    }
}
