import { IMainContextStateProps, StateActions, StateTypes } from "./interfaces";

const actions = {
  reset: "RESET",
  update: "UPDATE",
  // fund: "FUND",
};

const initialState = {
  isContractAvailable: false,
  // cards: [],
  // currentCard: {
  //   address: null,
  //   contract: null,
  //   title: null,
  //   description: null,
  //   creationDate: null,
  //   goal: null,
  //   creator: null,
  //   funders: [],
  //   beneficiary: null,
  //   status: null,
  //   releaseDate: null,
  //   coinsAmount: null,
  // }
};

const reducer = (state: IMainContextStateProps, action: StateActions) => {
  const { type, payload } = action; 
  switch (type) {
    case StateTypes.RESET:
      return { ...state, ...initialState };
      case StateTypes.UPDATE:
      return { ...state, ...payload };
      // case StateTypes.FUND:
      // return {...state, coinsAmount: payload};
    default:
      throw new Error("Undefined reducer action type");
  }
};

export {
  actions,
  initialState,
  reducer,
};