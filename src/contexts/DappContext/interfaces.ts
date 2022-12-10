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
    UPDATE_CARDS = 'UPDATE_CARDS',
    UPDATE_CARD_DAO_DATA = 'UPDATE_CARD_DAO_DATA',
};

export type IDappContextStateProps = {
    accounts: any,
    provider: any,
    giftFactoryContract: any,
    signer: any, 
    network: any,
    lastEvent?: {
        name: string | null,
        address: string | null,
        amount: number | null,
        timestamp?: number | null,
    },
    displayEvent?: boolean,
    cardsAddressesList?: Address[],
    cardsDataList?: IGiftCardProps[],
    currentCard?: IGiftCardProps | null,
    cardDAOData?: {
        currentProposal?: any | null,
        proposalBeneficiary?: any | null,
        lastProposals?: any | null,
    },
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
    getCardData(cardAddress: Address): any;
    setCurrentCardFromIndex(currentCardIndex: number): void;
    setCurrentCardFromData(currentCardData: IGiftCardProps): void;
    giveToCard(amountToSend: number): void,
}