import React, { FC } from "react";

type CountProps = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const Count: FC<CountProps> = ({ count, increment, decrement }) => {
  return (
    <div>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <p>Current count: {count}</p>
    </div>
  );
};

export default Count;
