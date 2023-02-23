import { atom } from "recoil";

const raffleResult = atom<Map<string, string>>({
  key: "raffleResult",
  default: new Map<string, string>(),
});

export default raffleResult;
