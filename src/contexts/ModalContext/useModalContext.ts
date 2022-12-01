import { useContext } from "react";
import ModalContext from "./ModalContext";

const useModalContext = () => {
    const context = useContext(ModalContext)
    if (!context) {
      throw new Error(
        "useModalContext doit être utilisé dans le context adéquat"
      )
    }
  
    return context
}

export default useModalContext;