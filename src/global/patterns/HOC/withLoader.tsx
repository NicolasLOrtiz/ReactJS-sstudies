import { FC, useEffect, useState } from "react";

export interface IDataDog {
  message: string[];
}

type IWithLoader = JSX.IntrinsicAttributes & {
  data?: IDataDog;
  hovering?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export type IElement = FC<IWithLoader>;

export type WithLoader = (Element: IElement, url: string) => FC<IWithLoader>;

const withLoader: WithLoader = (Element, url) => {
  return (props: IWithLoader) => {
    const [data, setData] = useState<null | IDataDog>(null);

    useEffect(() => {
      async function getData() {
        const res = await fetch(url);
        const data: IDataDog = await res.json();
        setData(data);
      }

      getData();
    }, []);

    if (!data) {
      return <div>Loading...</div>;
    }

    return <Element {...props} data={data} />;
  };
};

export default withLoader;
