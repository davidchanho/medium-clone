import dayjs from "dayjs";

export const formatDate = (date: string) => {
  const currentYear = dayjs().get("year").toString();

  if (date.includes(currentYear)) {
    return dayjs(date).format("MMM DD");
  }

  return dayjs(date).format("MMM DD, YYYY");
};
