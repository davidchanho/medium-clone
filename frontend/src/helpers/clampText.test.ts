import assert from "assert";
import { clampText } from "./clampText";

describe("clamp text", () => {
  it("should return string", () => {
    const text = clampText("abc", 1);
    assert(text === "string");
  });
});
