export const bump = (x: string): string => (x.replace(/_/g, '').length > 15 ? 'Car Dead' : 'Woohoo!');
