export const areYouPlayingBanjo = (name: string): string =>
    `${name} ${name.toLowerCase()[0] === 'r' ? 'plays banjo' : 'does not play banjo'}`;
