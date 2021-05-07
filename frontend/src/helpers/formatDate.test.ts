import assert from "assert";
import { formatDate } from "./formatDate";

describe("format date", () => {
  it("should return date", () => {
    const currentDate = new Date().toUTCString();
    const date = formatDate(currentDate);
    assert(date === "string");
  });
});
