import { useRecoilValue } from "recoil";
import { raffleResult } from "../atoms";

const useWinner = () => {
  return useRecoilValue(raffleResult);
};

export default useWinner;
