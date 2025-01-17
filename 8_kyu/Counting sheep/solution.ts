export const countSheeps = (arrayOfSheep: (boolean | undefined | null)[]) =>
    arrayOfSheep.filter((el: boolean | undefined | null): boolean => !!el).length;
