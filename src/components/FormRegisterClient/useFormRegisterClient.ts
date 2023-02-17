import { useRef, useState } from "react";
import { useCreateClient } from "../../state";
import type { InputRef } from "antd";

interface ISubmitFormValues {
  name: string;
}

const useFormRegisterClient = () => {
  const [name, setName] = useState<string>("");
  const nameInputRef = useRef<InputRef>(null);
  const createClient = useCreateClient();

  const addNewClient = (values: ISubmitFormValues) => {
    createClient(name);
    setName("");
    nameInputRef.current?.focus();
  };

  return {
    name,
    setName,
    nameInputRef,
    addNewClient,
  };
};

export default useFormRegisterClient;
