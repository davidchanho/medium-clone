const greetUserByTimeOfDay = () => {
  const currentTime = new Date().getHours();
  return currentTime > 0 && currentTime < 12
    ? "Good morning"
    : currentTime > 12 && currentTime < 18
    ? "Good afternoon"
    : "Good evening";
};

export default greetUserByTimeOfDay