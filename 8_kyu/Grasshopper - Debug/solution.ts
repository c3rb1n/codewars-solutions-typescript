export const weatherInfo = (temp: number): string => {
    const c: number = +((temp - 32) * (5 / 9)).toFixed(5);

    return c + (c >= 0 ? ' is above freezing temperature' : ' is freezing temperature');
};
