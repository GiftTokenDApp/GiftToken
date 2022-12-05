import { Dispatch } from "react";
import { INewCardProps } from "../../components/forms/interface";
import { IChildrenProps } from "../../helpers/interfacesHelpers";

export enum StateTypes {
    RESET = 'RESET',
    UPDATE = 'UPDATE',
};

export type IDappContextStateProps = {
    accounts: any,
    provider: any,
    giftFactoryContract: any,
    signer: any, 
}

export type StateActions = {
    type: StateTypes,
    payload?: IDappContextStateProps,
};

export interface IDappContextProps extends IChildrenProps {
    get dappContextState(): IDappContextStateProps;
    get dappContextDispatch(): Dispatch<StateActions>;
    createCard(newCard: INewCardProps): Promise<void>;
}