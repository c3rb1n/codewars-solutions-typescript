export const wordValue = (arr: string[]): number[] =>
    arr.map(
        (el: string, i: number): number =>
            el
                .split(' ')
                .map((el: string): number =>
                    el
                        .split('')
                        .reduce((a: number, b: string): number => a + 'abcdefghijklmnopqrstuvwxyz'.indexOf(b) + 1, 0)
                )
                .reduce((a: number, b: number): number => a + b, 0) *
            (i + 1)
    );
