export const cubeChecker = (volume: number, side: number): boolean =>
    volume !== 0 && side !== 0 && Math.cbrt(volume) === side;
