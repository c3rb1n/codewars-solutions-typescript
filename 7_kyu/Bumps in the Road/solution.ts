export const bump = (x: string): string => (x.replaceAll('_', '').length < 16 ? 'Woohoo!' : 'Car Dead');
