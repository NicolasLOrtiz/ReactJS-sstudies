import { useListUsers } from "./index";
import { useSetRecoilState } from "recoil";
import { raffleResult } from "../atoms";
import { raffle } from "../helpers";

const useRaffle = () => {
  const users = useListUsers();

  const setRaffle = useSetRecoilState(raffleResult);

  return () => {
    const result = raffle(users);

    setRaffle(result);
  };
};

export default useRaffle;
