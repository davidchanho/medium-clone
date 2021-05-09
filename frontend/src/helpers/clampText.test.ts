import assert from "assert";
import { clampText } from "./clampText";

describe("clampText", () => {
  it("should return string", () => {
    const text = clampText("abc", 1);
    assert(typeof text === "string");
  });
});
