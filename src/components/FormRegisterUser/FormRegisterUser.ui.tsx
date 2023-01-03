import { FC } from "react";

const FormRegisterUser: FC = () => {
  return (
    <form>
      <input type="text" placeholder="Nome completo" />
      <button disabled>Adicionar</button>
    </form>
  );
};

export default FormRegisterUser;
