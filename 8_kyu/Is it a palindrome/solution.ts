export const isPalindrome = (x: string): boolean => x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
