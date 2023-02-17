import { useRecoilValue, useSetRecoilState } from "recoil";
import { errorUserState, listUserState } from "../atoms";

const useCreateUser = () => {
  const setUserList = useSetRecoilState(listUserState);
  const userList = useRecoilValue(listUserState);
  const setErrorMessage = useSetRecoilState(errorUserState);

  return (userName: string) => {
    if (userList.includes(userName)) {
      setErrorMessage("Usuário já cadastrado");
      setTimeout(() => setErrorMessage(""), 5000);

      return;
    }

    return setUserList((prevState) => [...prevState, userName]);
  };
};

export default useCreateUser;
