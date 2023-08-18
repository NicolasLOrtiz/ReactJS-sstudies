import React, {
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Switch, SwitchProps } from "./switch";

interface IToggle {
  toggle: (on: boolean) => void;
  on: boolean;
}

const ToggleContext = React.createContext({} as IToggle);

const Toggle = ({
  onToggle,
  children,
}: {
  onToggle: (on: boolean) => void;
  children: ReactNode;
}) => {
  const [on, setOn] = useState(false);
  const justMounted = useRef(true);
  const toggle = React.useCallback(() => setOn((oldOn) => !oldOn), []);

  useEffect(() => {
    if (!justMounted.current) {
      return onToggle(on);
    }
    justMounted.current = false;
  }, [on, onToggle]);

  const value = useMemo(() => ({ on, toggle }), [on, toggle]);
  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
};

const useToggleContext = () => {
  const context = useContext(ToggleContext);

  if (!context) {
    throw new Error(
      `Toggle compound components cannot be rendered outside the Toggle component`
    );
  }

  return context;
};

const On: ({ children }: { children: any }) => null | JSX.Element = ({
  children,
}) => {
  const { on } = useToggleContext();

  if (on) {
    return children;
  }

  return null;
};

const Off: ({ children }: { children: any }) => null | JSX.Element = ({
  children,
}) => {
  const { on } = useToggleContext();

  if (on) {
    return null;
  }

  return children;
};

const Button = (props: SwitchProps) => {
  const { on, toggle } = useToggleContext();
  // @ts-ignore
  return <Switch {...props} on={on} onClick={toggle} />;
};

Toggle.On = On;
Toggle.Off = Off;
Toggle.Button = Button;

export default Toggle;
