import { Dispatch } from "react";
import { INewCardProps } from "../../components/forms/interface";
import { IChildrenProps } from "../../helpers/interfacesHelpers";

export enum StateTypes {
    RESET = 'RESET',
    UPDATE = 'UPDATE',
    HIDE_EVENT = 'HIDE_EVENT',
    SET_CARDS_LIST = 'SET_CARDS_LIST',
};

export type IDappContextStateProps = {
    accounts: any,
    provider: any,
    giftFactoryContract: any,
    signer: any, 
    lastEvent?: {
        name: string | null,
        address: string | null,
        amount: number | null,
    },
    displayEvent?: boolean,
    cardsList?: string[],
}

export type StateActions = {
    type: StateTypes,
    payload?: IDappContextStateProps,
};

export interface IDappContextProps extends IChildrenProps {
    get dappContextState(): IDappContextStateProps;
    get dappContextDispatch(): Dispatch<StateActions>;
    createCard(newCard: INewCardProps): Promise<void>;
    hideEventData(): void;
    getCardsAddressesList(): void;
}