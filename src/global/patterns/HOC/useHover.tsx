import { useEffect, useRef, useState } from "react";

export interface IWithHover extends JSX.IntrinsicAttributes {
  data: any;
  hovering: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const useHover = (): [
  React.MutableRefObject<HTMLDivElement | undefined>,
  boolean
] => {
  const [hovering, setHover] = useState(false);
  const ref = useRef<HTMLDivElement | undefined>(undefined);

  const handleMouseOver = () => setHover(true);
  const handleMouseOut = () => setHover(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, []);

  return [ref, hovering];
};

export default useHover;
