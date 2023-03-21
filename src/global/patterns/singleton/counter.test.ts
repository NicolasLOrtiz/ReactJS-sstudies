import counter from "./counter";

describe("singleton Counter Suite Case", () => {
  it("incrementing 1 time should be 1", () => {
    counter.increment();

    expect(counter.getCount()).toBe(1);
  });

  it("incrementing 3 extra times should be 4", () => {
    counter.increment();
    counter.increment();
    counter.increment();

    expect(counter.getCount()).toBe(4);
  });

  it("decrementing 1 time should be 3", () => {
    counter.decrement();

    expect(counter.getCount()).toBe(3);
  });
});
