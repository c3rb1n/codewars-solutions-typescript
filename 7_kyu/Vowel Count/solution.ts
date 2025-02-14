export class Kata {
    static getCount = (str: string): number => str.replace(/[^aeiou]/g, '').length;
}
