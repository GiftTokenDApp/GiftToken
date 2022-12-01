import { createContext } from "react";
import { IMainContextProps } from "./interfaces";

const MainContext = createContext<IMainContextProps | null>(null)

export default MainContext;