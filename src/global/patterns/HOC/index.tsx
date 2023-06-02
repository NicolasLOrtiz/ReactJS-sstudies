import DogImages from "./DogImages";
import "./styles.css";
import { FC } from "react";

const HocApp: FC = () => {
  return (
    <div className="App">
      <h1>
        Browse Dog Images{" "}
        <span role="img" aria-label="emoji">
          🐕
        </span>
      </h1>
      <DogImages
        hovering={false}
        onMouseEnter={function (): void {
          throw new Error("Function not implemented.");
        }}
        onMouseLeave={function (): void {
          throw new Error("Function not implemented.");
        }}
        data={undefined}
      />
    </div>
  );
};

export default HocApp;
