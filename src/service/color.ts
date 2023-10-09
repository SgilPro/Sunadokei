export const isHexColor = (color: string): boolean => {
  const regex = new RegExp(/^#(?:[0-9a-fA-F]{3}){1,2}$/);
  return regex.test(color);
};
