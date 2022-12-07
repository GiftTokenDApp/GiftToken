import { Dispatch } from "react";
import { INewCardProps } from "../../components/forms/interface";
import IGiftCardProps from "../../components/giftCard/interface";
import { IChildrenProps } from "../../helpers/interfacesHelpers";
import { Address } from "../../helpers/typesHelpers";

export enum StateTypes {
    RESET = 'RESET',
    UPDATE = 'UPDATE',
    HIDE_EVENT = 'HIDE_EVENT',
    SET_CARDS_LIST = 'SET_CARDS_LIST',
    UPDATE_CARDS_DATA_LIST = 'UPDATE_CARDS_DATA_LIST',
    SET_CURRENT_CARD = 'SET_CURRENT_CARD',
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
    cardsAddressesList?: Address[],
    cardsDataList?: IGiftCardProps[],
    currentCard?: IGiftCardProps | null,
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
    getCardData(cardAddress: Address): Promise<void>;
    setCurrentCardFromIndex(currentCardIndex: number): void;
    setCurrentCardFromData(currentCardData: IGiftCardProps): void;
}