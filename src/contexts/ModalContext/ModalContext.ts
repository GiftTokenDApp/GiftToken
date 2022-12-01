import { createContext } from "react";
import { IModalContextProps } from "./interfaces";

const ModalContext = createContext<IModalContextProps | null>(null)

export default ModalContext;