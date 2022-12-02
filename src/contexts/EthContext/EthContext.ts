import { createContext } from "react";
import { IEthContextProps } from "./interfaces";

const EthContext = createContext<IEthContextProps | null>(null)

export default EthContext;