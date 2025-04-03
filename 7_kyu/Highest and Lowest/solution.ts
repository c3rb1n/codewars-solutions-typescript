export class Kata {
    static highAndLow = (numbers: string): string =>
        `${Math.max(...numbers.split(' ').map(Number))} ${Math.min(...numbers.split(' ').map(Number))}`;
}
