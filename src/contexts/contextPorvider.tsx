import {
  // Dispatch,
  // SetStateAction,
  createContext,
  // ReactNode,
  useState,
  useContext,
} from "react";

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const defaultState_ = {
  activeMenu: true,
  setActiveMenu: (bool: boolean): void => {},
  screenSize: undefined,
  handleClick: (num: any) => {},
  currentColor: "#03C9D7",
  currentMode: "Light",
  setScreenSize: (num: any) => {},
  setCurrentColor: (color: string) => {},
  setMode: (num: number) => {},
  setThemeSettings: (arg: boolean) => {},
  themeSettings: false,
  isClicked: initialState,
  setColor: (num: string) => {},
  setIsClicked: (num: any) => {},

  initialState,
};
const StateContext = createContext(defaultState_);

export const ContextProvider = ({ children }: any) => {
  const [screenSize, setScreenSize] = useState<number | any>(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const setMode = (e: any) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color: string) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const handleClick = (clicked: any) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        screenSize,
        handleClick,
        currentMode,
        currentColor,
        setScreenSize,
        setCurrentColor,
        setMode,
        themeSettings,
        setThemeSettings,
        isClicked,
        setColor,
        initialState,
        setIsClicked,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
