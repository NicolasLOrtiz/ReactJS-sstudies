import React from "react";
import ContainerComponent from "./ContainerComponent";

const ContainerPattern = () => {
  return (
    <div>
      <h1>Container Pattern</h1>

      <span role="img" aria-label="emoji">
        🐕
      </span>

      <ContainerComponent />
    </div>
  );
};

export default ContainerPattern;
