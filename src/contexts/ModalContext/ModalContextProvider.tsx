import React, { FC, useMemo, useReducer } from "react"
import ModalContext from "./ModalContext";
import { IChildrenProps } from '../../helpers/interfacesHelpers';
import { initialState, reducer } from "./state";
import { IModalContextProps, StateTypes } from "./interfaces";
import IGiftCardProps from "../../components/giftCard/interface";

const ModalContextProvider: FC<IChildrenProps> = ({ children }) => {

  const [modalContextState, modalContextDispatch] = useReducer(reducer, initialState);

  const resetModalDisplay = () => {
    modalContextDispatch({
      type: StateTypes.RESET,
    });
  }

  const displayCardModal = (cardProps: IGiftCardProps) =>{
    modalContextDispatch({
      type: StateTypes.OPEN,
    });
  }

  const addCardModal = () =>{
    modalContextDispatch({
      type: StateTypes.ADD,
    });
  }

  const contextValues: IModalContextProps = useMemo(
    () => ({
      modalContextState,
      modalContextDispatch,
      resetModalDisplay,
      displayCardModal,
      addCardModal,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      modalContextState,
    ]
  )

  return <ModalContext.Provider value={contextValues}>{children}</ModalContext.Provider>;
}

export default ModalContextProvider;