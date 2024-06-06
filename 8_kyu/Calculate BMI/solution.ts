export const bmi = (weight: number, height: number): string => {
    const index = weight / height ** 2;

    return index <= 18.5 ? 'Underweight' : index <= 25 ? 'Normal' : index <= 30 ? 'Overweight' : 'Obese';
};
