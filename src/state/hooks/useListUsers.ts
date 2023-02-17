import { useRecoilValue } from "recoil";
import { listUserState } from "../atoms";

const useListUsers = () => useRecoilValue(listUserState);

export default useListUsers;
