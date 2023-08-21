export const generateColors = (length: number): string[] => {
  const colors: string[] = [];
  let color: number;
  while (colors.length < length) {
    do {
      color = Math.floor(Math.random() * 1000 + 1);
    } while (colors.indexOf(color.toString()) >= 0);
    colors.push('#' + ('000000' + color.toString(16)).slice(-6));
  }
  return colors;
};
