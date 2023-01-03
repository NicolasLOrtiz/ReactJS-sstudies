import { atom } from "recoil";

const clientListState = atom<string[]>({
  key: "clientListState",
  default: [],
});

export default clientListState;
