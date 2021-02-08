import dayjs from "dayjs";

export const greeting = () => {
  const currentTime = dayjs().hour();
  if (currentTime > 0 && currentTime < 12) {
    return "Good morning";
  } else if (currentTime > 12 && currentTime < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
};
