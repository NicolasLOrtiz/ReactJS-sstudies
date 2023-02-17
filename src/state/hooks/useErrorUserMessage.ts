import { useRecoilValue } from "recoil";
import { errorUserState } from "../atoms";

const useErrorUserMessage = () => {
  const message = useRecoilValue(errorUserState);

  return message;
};

export default useErrorUserMessage;
