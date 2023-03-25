import {
  createContext,
  CSSProperties,
  FC,
  ReactNode,
  useContext,
  useState,
} from "react";

interface IData {
  title: string;
  text: string;
  listItem: string;
}

interface IDataProps {
  data: IData;
}

const DataContext = createContext({} as IDataProps);

interface ITheme {
  light: CSSProperties;
  dark: CSSProperties;
}

const themes: ITheme = {
  light: { background: "#fff", color: "#000" },
  dark: { background: "#171717", color: "#fff" },
};

interface IThemeContext {
  theme: ITheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContext);

const useTheme = () => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return theme;
};

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    // @ts-ignore
    <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useData = () => useContext(DataContext);

const ListItem: FC = () => {
  const { data } = useData();
  const { theme } = useTheme();

  // @ts-ignore
  return <li style={theme}>{data.listItem}</li>;
};

const List: FC = () => <ListItem />;

const SideBar: FC = () => <List />;

const Text: FC = () => {
  const { data } = useData();

  return <h1>{data.text}</h1>;
};

const Block: FC = () => <Text />;

const Header: FC = () => {
  const { data } = useData();

  return <div>{data.title}</div>;
};

const Content: FC = () => (
  <div>
    <Header />
    <Block />
    <Boxes />
  </div>
);

const Boxes = () => (
  <ul>
    {new Array(10).fill(0).map((x, i) => (
      <ListItem key={i} />
    ))}
  </ul>
);

const Toggle: FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <label className="switch">
      <input type="checkbox" onClick={toggleTheme} />
      <span className="slider round"></span>
    </label>
  );
};

const ProviderApp: FC = () => {
  const data: IData = {
    title: "Provider Pattern",
    text: "Make data available to multiple child components",
    listItem: "Code Patterns",
  };

  return (
    <div>
      <ThemeProvider>
        <DataContext.Provider value={{ data }}>
          <Toggle />
          <SideBar />
          <Content />
        </DataContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export default ProviderApp;
