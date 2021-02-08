export const clampText = (str: string, amount: number) => {
  return `${str.substr(0, amount).trim()}...`;
};
