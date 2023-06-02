import { FC, useState } from "react";

export interface IWithHover extends JSX.IntrinsicAttributes {
  data: any;
  hovering: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const withHover = (Element: FC<IWithHover>) => {
  return (props: IWithHover) => {
    const [hovering, setHover] = useState(false);

    return (
      <Element
        {...props}
        hovering={hovering}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    );
  };
};

export default withHover;
