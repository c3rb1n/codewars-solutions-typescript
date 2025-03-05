type State = {modifier: number};

export const solution = (arr: number[], options: State) => arr.map((num: number): number => num + 2 * options.modifier);
