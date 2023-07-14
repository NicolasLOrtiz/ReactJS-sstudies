import { useEffect, useState } from "react";

type UseWindowWidth = () => number;
const useWindowWidth: UseWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.addEventListener("resize", handleResize);
  });

  return width;
};

export default useWindowWidth;
