import shuffle from "just-shuffle";

const raffle = (names: string[]) => {
  const userCountTotal = names.length;

  const shuffledUsers = shuffle(names);

  const result = new Map<string, string>();
  for (let i = 0; i < userCountTotal; i++) {
    const userIndex = i === userCountTotal - 1 ? 0 : i + 1;
    result.set(shuffledUsers[i], shuffledUsers[userIndex]);
  }

  return result;
};

export default raffle;
