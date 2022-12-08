import React, { FC, useMemo, useReducer } from "react"
import MainContext from "./MainContext";
import { IChildrenProps } from '../../helpers/interfacesHelpers';
import { initialState, reducer } from "./state";
import { IMainContextProps, StateTypes } from "./interfaces";
// import IGiftCardProps from "../../components/giftCard/interface";

const MainContextProvider: FC<IChildrenProps> = ({ children }) => {
  const [mainContextState, mainContextDispatch] = useReducer(reducer, initialState);

  // const loadCards = (cards: IGiftCardProps[]) => {
  //   const newState = {...mainContextState};
  //   newState.cards = cards;
  //   newState.currentCard = cards[0];
  //   mainContextDispatch({
  //     type: StateTypes.UPDATE,
  //     payload: {...mainContextState, ...newState},
  //   });
  // }

  // const updateCurrentCard = (cardProps: IGiftCardProps) => {
  //   const newState = {...mainContextState};    
  //   newState.currentCard = cardProps;
  //   const newCardsList = newState?.cards?.map((card: IGiftCardProps) => {
  //     const newCard = {...card}
  //     if(card.address === cardProps.address){
  //       newCard.coinsAmount = cardProps.coinsAmount
  //     }
  //     return newCard
  //   })
  //   if(newCardsList){
  //     newState.cards = newCardsList;
  //   }
  //   // mainContextDispatch({
  //   //   type: StateTypes.UPDATE,
  //   //   payload: {...mainContextState, ...newState},
  //   // });
  // }  

  const contextValues: IMainContextProps = useMemo(
    () => ({
      mainContextState,
      mainContextDispatch,
      // updateCurrentCard,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      mainContextState,
    ]
  )

  return <MainContext.Provider value={contextValues}>{children}</MainContext.Provider>;
}

export default MainContextProvider;