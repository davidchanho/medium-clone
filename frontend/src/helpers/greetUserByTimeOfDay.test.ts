import greetUserByTimeOfDay from "./greetUserByTimeOfDay";

describe("greetUserByTimeOfDay", () => {
  it("should return string", () => {
    const date = greetUserByTimeOfDay();
    expect(date).toBeString();
  });
});
