import { IMainContextStateProps, StateActions, StateTypes } from "./interfaces";

const actions = {
  reset: "RESET",
  update: "UPDATE",
  // fund: "FUND",
};

const initialState = {
  isContractAvailable: false,
};

const reducer = (state: IMainContextStateProps, action: StateActions) => {
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