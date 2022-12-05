import { useContext } from "react";
import DappContext from "./DappContext";

const useDappContext = () => {
    const context = useContext(DappContext)
    if (!context) {
      throw new Error(
        "useDappContext doit être utilisé dans le context adéquat"
      )
    }
  
    return context
}

export default useDappContext;