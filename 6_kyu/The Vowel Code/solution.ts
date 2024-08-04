type EncodeTable = {
    [index: string]: string;
};
type DecodeTable = {
    [index: string]: string;
};

const encodeTable: EncodeTable = {a: '1', e: '2', i: '3', o: '4', u: '5'};
const decodeTable: DecodeTable = {'1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u'};

export const encode = (string: string): string =>
    [...string].map((el: string): string => encodeTable[el] ?? el).join('');

export const decode = (string: string): string =>
    [...string].map((el: string): string => decodeTable[el] ?? el).join('');
