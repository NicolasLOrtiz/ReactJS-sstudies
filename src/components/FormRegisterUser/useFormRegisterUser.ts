import { ChangeEvent, FormEvent, useCallback, useRef, useState } from "react";
import { useCreateUser, useErrorUserMessage } from "../../state/hooks";

const useFormRegisterUser = () => {
  const [completeName, setCompleteName] = useState("");
  const completeNameRef = useRef<HTMLInputElement>(null);
  const createUser = useCreateUser();
  const errorUserMessage = useErrorUserMessage();

  const onChangeCompleteName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setCompleteName(event.target.value);
    },
    []
  );

  const addNewUser = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      createUser(completeName);
      setCompleteName("");
      completeNameRef.current?.focus();
    },
    [completeName, createUser]
  );

  return {
    completeName,
    completeNameRef,
    addNewUser,
    onChangeCompleteName,
    errorUserMessage,
  };
};

export default useFormRegisterUser;
