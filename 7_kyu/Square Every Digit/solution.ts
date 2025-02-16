export class Kata {
    static squareDigits = (num: number): number =>
        +`${num}`.replace(/\d/g, (el: string): string => `${Math.pow(+el, 2)}`);
}
