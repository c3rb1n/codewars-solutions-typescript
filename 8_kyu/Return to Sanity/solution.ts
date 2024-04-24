interface IMystery {
    sanity: string;
}

export const mystery = (): IMystery => ({sanity: 'Hello'});
