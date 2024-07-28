export class Kata {
    static findLongest(array: number[]): number {
        const lengths: number[] = array.map((el: number): number => `${el}`.length);
        const maxLengthIndex: number = lengths.indexOf(Math.max(...lengths));

        return array[maxLengthIndex];
    }
}
