import { useListUsers } from "../../state/hooks";

const useFooter = () => {
  const users = useListUsers();
  const buttonDisabled = users.length < 3;

  return { buttonDisabled };
};

export default useFooter;
