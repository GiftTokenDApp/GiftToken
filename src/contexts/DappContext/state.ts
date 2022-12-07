import { IDappContextStateProps, StateActions, StateTypes } from "./interfaces";

const actions = {
  reset: "RESET",
  update: "UPDATE",
  hide_event: "HIDE_EVENT",
  set_cards_list: "SET_CARDS_LIST",
  update_cards_data_list: "UPDATE_CARDS_DATA_LIST",
  set_current_card: "SET_CURRENT_CARD",
};

const initialState = {
  accounts: null,
  provider: null,
  giftFactoryContract: null,
  signer: null, 
  lastEvent: {
    name: null,
    address: null,
    amount: null,
    timestamp: null,
  },
  displayEvent: false,
  cardsAddressesList: [],
  cardsDataList: [],
  currentCard: null,
};

const reducer = (state: IDappContextStateProps, action: StateActions) => {
  const { type, payload } = action; 
  switch (type) {
    case StateTypes.RESET:
      return { ...state, ...initialState };
    case StateTypes.UPDATE:
      return { ...state, ...payload };
    case StateTypes.HIDE_EVENT:
      return {...state, displayEvent: false};
    case StateTypes.SET_CARDS_LIST:
      return {...state, cardsList: payload?.cardsAddressesList};
    case StateTypes.UPDATE_CARDS_DATA_LIST:
      return {...state, cardsDataList: payload?.cardsDataList};
    case StateTypes.SET_CURRENT_CARD:
      return {...state, currentCard: payload?.currentCard};
    default:
      throw new Error("Undefined reducer action type");
  }
};

export {
  actions,
  initialState,
  reducer,
};