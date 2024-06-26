type State = {modifier: number};

const state: State = {modifier: 2};

export const solution = (arr: number[], options: State) => {
    const result: number[] = [...arr];

    for (let i = 0; i < arr.length; ++i) {
        result[i] += 2 * options.modifier;
    }

    return result;
};
