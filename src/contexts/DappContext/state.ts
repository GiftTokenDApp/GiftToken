import { IDappContextStateProps, StateActions, StateTypes } from "./interfaces";

const actions = {
  reset: "RESET",
  update: "UPDATE",
  hideevent: "HIDEEVENT",
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
};

const reducer = (state: IDappContextStateProps, action: StateActions) => {
  const { type, payload } = action; 
  switch (type) {
    case StateTypes.RESET:
      return { ...state, ...initialState };
    case StateTypes.UPDATE:
      return { ...state, ...payload };
    case StateTypes.HIDEEVENT:
      return {...state, displayEvent: false};
    default:
      throw new Error("Undefined reducer action type");
  }
};

export {
  actions,
  initialState,
  reducer,
};