import React, { FC } from "react";
import Count from "./Count";
import Width from "./Width";
import useCounter from "./useCounter";
import useWindowWidth from "./useWindowWidth";

const HookPattern: FC = () => {
  const { count, increment, decrement } = useCounter();
  const width = useWindowWidth();

  return (
    <div>
      <Count count={count} increment={increment} decrement={decrement} />
      <div />
      <Width width={width} />
    </div>
  );
};

export default HookPattern;
