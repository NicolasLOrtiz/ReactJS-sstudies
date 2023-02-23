import { raffle } from "./index";

describe("Raffle test suite", () => {
  it("should not mate with itself", () => {
    const user = ["user1", "user2", "user3", "user4", "user5", "user6"];

    const result = raffle(user);

    user.forEach((user) => {
      const mate = result.get(user);
      expect(mate).not.toEqual(user);
    });
  });
});
