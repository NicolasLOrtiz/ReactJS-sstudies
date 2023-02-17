import { atom } from "recoil";

const listUserState = atom<string[]>({
  key: "listUserState",
  default: [],
});

export default listUserState;
