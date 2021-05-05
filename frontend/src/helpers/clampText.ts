export const clampText = (str: string, amount: number) => {
  if (!str) {
    return;
  }
  return `${str.substr(0, amount).trim()}...`;
};
