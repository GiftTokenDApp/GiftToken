import { createContext } from "react";
import { IDappContextProps } from "./interfaces";

const DappContext = createContext<IDappContextProps | null>(null)

export default DappContext;