import { IDappContextStateProps, StateActions, StateTypes } from "./interfaces";

const actions = {
  reset: "RESET",
  update: "UPDATE",
};

const initialState = {
  accounts: null,
  provider: null,
  giftFactoryContract: null,
  signer: null, 
};

const reducer = (state: IDappContextStateProps, action: StateActions) => {
  const { type, payload } = action; 
  switch (type) {
    case StateTypes.RESET:
      return { ...state, ...initialState };
      case StateTypes.UPDATE:
      return { ...state, ...payload };
    default:
      throw new Error("Undefined reducer action type");
  }
};

export {
  actions,
  initialState,
  reducer,
};