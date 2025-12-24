"use client";
import { createContext, useContext, useEffect, useState } from "react";
export interface ICategory {
  title: string;
  code: string;
}
type GlobalContextType = {
  // level: ICategory[];
  // setLevel: (val: ICategory[]) => void;
  themeMap: string;
  setThemeMap: (val: string) => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMap, setThemeMap] = useState("night");
  // const [level, setLevel] = useState([{ title: "محصولات", code: "" }]);
  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = localTheme || "dark";
    setThemeMap(initialTheme);
  }, []);

  return <GlobalContext.Provider value={{ themeMap, setThemeMap }}>{children}</GlobalContext.Provider>;
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("GlobalProvider را فراموش کردید");
  return context;
};
