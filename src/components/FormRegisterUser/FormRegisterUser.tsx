import { FC } from "react";
import { useFormRegisterUser } from "./index";

const FormRegisterUser: FC = () => {
  const {
    completeNameRef,
    addNewUser,
    completeName,
    onChangeCompleteName,
    errorUserMessage,
  } = useFormRegisterUser();

  return (
    <form onSubmit={addNewUser}>
      <input
        ref={completeNameRef}
        type="text"
        placeholder="Nome completo"
        onChange={onChangeCompleteName}
        value={completeName}
      />
      <button disabled={!completeName}>Adicionar</button>
      {errorUserMessage && <p role={"alert"}>{errorUserMessage}</p>}
    </form>
  );
};

export default FormRegisterUser;
