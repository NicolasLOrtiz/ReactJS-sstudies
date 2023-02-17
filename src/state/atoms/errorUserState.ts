import { atom } from "recoil";

const errorUserState = atom<string>({
  key: "errorUserState",
  default: "",
});

export default errorUserState;
