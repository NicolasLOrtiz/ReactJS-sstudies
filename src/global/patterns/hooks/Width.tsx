import React, { FC } from "react";

type WidthProps = {
  width: number;
};

const Width: FC<WidthProps> = ({ width }) => {
  return <p>Current width: {width}</p>;
};

export default Width;
