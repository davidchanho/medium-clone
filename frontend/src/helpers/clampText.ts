export const clampText = (str: string, amount: number) => {
  if(!str) {
    return null
  }
  return `${str.substr(0, amount).trim()}...`;
};
