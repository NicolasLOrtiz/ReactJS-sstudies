import type { FC } from "react";
import useFormRegisterClient from "./useFormRegisterClient";
import { Button, Form, Input } from "antd";

const FormRegisterClient: FC = () => {
  const { addNewClient, name, nameInputRef, setName } = useFormRegisterClient();

  return (
    <Form
      onFinish={addNewClient}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      <Form.Item
        label="Nome completo"
        name="name"
        hasFeedback
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input
          type="text"
          placeholder="Insira o nome completo do cliente"
          ref={nameInputRef}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type={"primary"}
          disabled={!name}
          role={"button"}
          htmlType="submit"
        >
          Adicionar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormRegisterClient;
