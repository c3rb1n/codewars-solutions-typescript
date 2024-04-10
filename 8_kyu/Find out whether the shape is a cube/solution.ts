export const cubeChecker = (volume: number, side: number): boolean => volume > 0 && side > 0 && side ** 3 === volume;
