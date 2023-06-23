import { useState } from "react";

const Input = (props: { children: (value: string) => JSX.Element }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {props.children(value)}
    </div>
  );
};

const RenderProps = () => {
  return (
    <div>
      <h1>RenderProps</h1>

      <Input>{(value) => <h3>{value}</h3>}</Input>
    </div>
  );
};

export default RenderProps;
