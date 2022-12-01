import { Dispatch } from "react";
import IGiftCardProps from "../../components/giftCard/interface";
import { IChildrenProps } from "../../helpers/interfacesHelpers";

export enum StateTypes {
    RESET = 'RESET',
    OPEN = 'OPEN',
    UPDATE = 'UPDATE',
};

export type IModalContextStateProps = {
    get modalCardOpen(): boolean,
    get cssModalCard(): string,
    get cssModalCardDisplay(): string,
    get cssModalCardHidden(): string,
    get modalCardCss(): string[],
    get yPosition(): number,
};

export type StateActions = {
    type: StateTypes,
    payload?: IModalContextStateProps,
};
  
export interface IModalContextProps extends IChildrenProps {
    get modalContextState(): IModalContextStateProps;
    get modalContextDispatch(): Dispatch<StateActions>;
    get resetModalDisplay(): () => void;
    displayCardModal(cardProps: IGiftCardProps): void;
};