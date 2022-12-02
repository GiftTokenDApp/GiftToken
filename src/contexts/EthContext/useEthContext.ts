import { useContext } from "react";
import EthContext from "./EthContext";

const useEthContext = () => {
    const context = useContext(EthContext)
    if (!context) {
      throw new Error(
        "useEthContext doit être utilisé dans le context adéquat"
      )
    }
  
    return context
}

export default useEthContext;