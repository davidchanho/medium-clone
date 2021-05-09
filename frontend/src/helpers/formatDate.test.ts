import assert from "assert";
import { formatDate } from "./formatDate";

describe("formatDate", () => {
  it("should return string", () => {
    const text = formatDate("abc");
    assert(typeof text === "string");
  });
});
