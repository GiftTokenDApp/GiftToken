import React, { FC, useMemo, useReducer } from "react"
import MainContext from "./MainContext";
import { IChildrenProps } from '../../helpers/interfacesHelpers';
import { initialState, reducer } from "./state";
import { IMainContextProps, StateTypes } from "./interfaces";

const MainContextProvider: FC<IChildrenProps> = ({ children }) => {
  const [mainContextState, mainContextDispatch] = useReducer(reducer, initialState);

  const contextValues: IMainContextProps = useMemo(
    () => ({
      mainContextState,
      mainContextDispatch,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      mainContextState,
    ]
  )

  return <MainContext.Provider value={contextValues}>{children}</MainContext.Provider>;
}

export default MainContextProvider;