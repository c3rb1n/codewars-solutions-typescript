export const sameCase = (a: string, b: string): number => {
    const isLetters: boolean = /[a-z]/i.test(a) && /[a-z]/i.test(b);
    const aCase: string = a.toUpperCase() === a ? 'upper' : 'lower';
    const bCase: string = b.toUpperCase() === b ? 'upper' : 'lower';

    return isLetters ? (aCase === bCase ? 1 : 0) : -1;
};
