export const generateColors = (length: number) => {
  const pallet: string[] = [
    '#0074d9',
    '#FF4136',
    '#2ECC40',
    '#FF851B',
    '#7FDBFF',
    '#B10DC9',
    '#FFDC00',
    '#2068b0',
    '#39CCCC',
    '#01FF70',
    '#85144b',
    '#F012BE',
    '#3D9970',
    '#111111',
    '#AAAAAA',
  ];

  const colors: string[] = [];

  for (let i = 0; i < length; i++) {
    colors.push(pallet[i % (pallet.length - 1)]);
  }

  return colors;
};
