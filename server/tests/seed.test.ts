import { generateUser } from "../db/seed";
import "jest-chain";
import "jest-extended";

describe("testing seed", () => {
  it("should test generateUser", async (done) => {
    const user = generateUser();
    expect(user).toBeTruthy();
    done();
  });
});
