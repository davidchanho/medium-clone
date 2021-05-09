export const clampText = (str: string, amount: number): string | null => {
  if (!str) {
    return null;
  }
  return `${str.substr(0, amount).trim()}...`;
};
