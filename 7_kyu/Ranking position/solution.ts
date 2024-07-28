export type inputMan = {
    name: string;
    points: number;
};

export type outputMan = {
    name: string;
    points: number;
    position: number;
};

export const ranking = (people: inputMan[]): outputMan[] => {
    let position: number = 1;
    const sortedResults: inputMan[] = people.sort((a: inputMan, b: inputMan): number => {
        if (a.points > b.points) return -1;
        else if (a.points < b.points) return 1;

        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
    const results: outputMan[] = [];

    sortedResults.forEach((el: inputMan, i: number, array: inputMan[]): void => {
        if (i > 0 && array[i - 1].points !== el.points) {
            position = i + 1;
        }

        results.push({...el, position});
    });

    return results;
};
