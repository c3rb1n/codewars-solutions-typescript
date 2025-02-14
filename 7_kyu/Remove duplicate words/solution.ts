export const removeDuplicateWords = (s: string): string => [...new Set(s.split(' '))].join(' ');
