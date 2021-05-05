export const formatDate = (date: string) => {
  if (!date) {
    return;
  }

  const currentYear = new Date().getFullYear().toString();
  const publishedDate = new Date(date).toDateString();

  if (date.includes(currentYear)) {
    return publishedDate.substr(4, 6);
  }

  return publishedDate;
};
