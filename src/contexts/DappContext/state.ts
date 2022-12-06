import { IDappContextStateProps, StateActions, StateTypes } from "./interfaces";

const actions = {
  reset: "RESET",
  update: "UPDATE",
  hide_event: "HIDE_EVENT",
  set_cards_list: "SET_CARDS_LIST",
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
  },
  displayEvent: false,
  cardsList: [],
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
      return {...state, cardsList: payload?.cardsList};
    default:
      throw new Error("Undefined reducer action type");
  }
};

export {
  actions,
  initialState,
  reducer,
};