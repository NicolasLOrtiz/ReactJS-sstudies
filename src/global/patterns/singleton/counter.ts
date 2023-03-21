let count = 0;

interface ICounter {
  increment: () => number;
  decrement: () => number;
  getCount: () => number;
}

const counter: ICounter = {
  increment() {
    return ++count;
  },
  decrement() {
    return --count;
  },
  getCount() {
    return count;
  },
};

Object.freeze(counter);

export default counter;
