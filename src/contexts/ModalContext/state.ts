import { IModalContextStateProps, StateActions, StateTypes } from "./interfaces";

const cssModalCard = "modal modalCard"
const cssModalCardDisplay = `${cssModalCard} modalCard-display`
const cssModalCardHidden = `${cssModalCard} modalCard-hidden`

const actions = {
  reset: "RESET",
  update: "UPDATE",
  open: "OPEN",
  add: "ADD",
};

const initialState = {
  addCardModalOpen : false,
  displayCardModalOpen : false,
  cssModalCard : cssModalCard,
  cssModalCardDisplay : cssModalCardDisplay,
  cssModalCardHidden : cssModalCardHidden,
  modalCardCss: ["backdrop backdrop-hidden",cssModalCardHidden],
  yPosition: 0-window.scrollY,
};

const reducer = (state: IModalContextStateProps, action: StateActions) => {
  const { type, payload } = action;
  switch (type) {
    case StateTypes.RESET:
      return { ...state, ...initialState };
    case StateTypes.UPDATE:
      return { ...state, ...payload };
    case StateTypes.OPEN:
      return {...state, displayCardModalOpen: true};
    case StateTypes.ADD:
      return {...state, addCardModalOpen: true};
    default:
      throw new Error("Undefined reducer action type");
  }
};

export {
  actions,
  initialState,
  reducer,
};
