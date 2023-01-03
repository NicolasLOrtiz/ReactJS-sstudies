import { useSetRecoilState } from "recoil";
import { clientListState } from "../atoms";

const useCreateClient = () => {
  const setClientList = useSetRecoilState(clientListState);

  return (clientName: string) => {
    return setClientList((prevState) => [...prevState, clientName]);
  };
};

export default useCreateClient;
