import { IEthContextStateProps, StateActions, StateTypes } from "./interfaces";

const actions = {
  reset: "RESET",
  update: "UPDATE",
};

const initialState = {
  artifact: null,
  // web3: null,
  accounts: null,
  // networkID: null,
  contract: null,
};

const reducer = (state: IEthContextStateProps, action: StateActions) => {
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