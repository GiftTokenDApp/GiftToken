import { Dispatch } from "react";
import { INewCardProps } from "../../components/elements/forms/INewCardProps";
import { IUserProps } from "../../components/elements/forms/IUserProps";
import IGiftCardProps from "../../components/elements/giftCard/interface";
import { IChildrenProps } from "../../helpers/interfacesHelpers";
import { Address } from "../../helpers/typesHelpers";
import { GiftFactory as GiftFactoryContract} from '../../typechain-types/contracts/GiftFactory';
import { GiftNetwork as GiftNetworkContract, MessageStructOutput} from '../../typechain-types/contracts/GiftNetwork';

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

export enum DAOTypes {
    UNLOCK = 'UNLOCK',
    DECLARE_BENEFICIARY = 'DECLARE_BENEFICIARY',
    CHANGE_BENEFICIARY = 'CHANGE_BENEFICIARY',
}

export type IDappContextStateProps = {
    functionCallTimer: number,
    currentAccount: Address | null,
    accounts: Address[] | null,
    provider: any,
    giftFactoryContract: GiftFactoryContract | null,
    signer: any, 
    giftNetworkContract: GiftNetworkContract | null,
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
        currentProposalUserVote?: string | null,
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
    releaseAllToCurrent(): Promise<void>;
    hideEventData(): void;
    getCardsAddressesList(): void;
    getCardData(cardAddress: Address): any;
    setCurrentCardFromIndex(currentCardIndex: number): void;
    setCurrentCardFromData(currentCardData: IGiftCardProps): void;
    giveToCard(amountToSend: number): void,
    getCurrentUserExists(): Promise<boolean>,
    getUserExists(address: Address): Promise<boolean>,
    getCurrentUser(): Promise<IUserProps | null>,
    getUser(address: Address): Promise<IUserProps | null>,
    setCurrentUser(pseudo: string, ipfsLink: string) : Promise<void>,
    readMessage(anotherUserAddress:Address): Promise<MessageStructOutput[]>,
    sendMessage(to:Address, message: string): Promise<void>,
    setNewDAOProposal(daoType: DAOTypes, beneficiary: Address | null, description: string): void,
    setDAOVote(vote: boolean): void,
    // getDAOVote(): Promise<number>,
    endDAO(): void,
    login(): void,
}