export const isIsogram = (str: string): boolean => {
    const lowerCaseStr: string = str.toLowerCase();

    for (let i = 0; i < lowerCaseStr.length; i++) {
        if (lowerCaseStr.slice(i + 1).includes(lowerCaseStr[i])) return false;
    }

    return true;
};
