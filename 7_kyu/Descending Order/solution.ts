export const descendingOrder = (n: number): number =>
    +`${n}`
        .split('')
        .sort((a: string, b: string): number => +b - +a)
        .join('');
