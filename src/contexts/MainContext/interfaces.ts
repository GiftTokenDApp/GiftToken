import { Dispatch } from "react";
import IGiftCardProps from "../../components/giftCard/interface";
import { IChildrenProps } from "../../helpers/interfacesHelpers";
import { Address } from "../../helpers/typesHelpers";

export enum StateTypes {
    RESET = 'RESET',
    FUND = 'FUND',
    UPDATE = 'UPDATE',
};

export type IMainContextStateProps = {
    get isContractAvailable() : boolean
    get cards(): IGiftCardProps[] | null 
    get currentCard(): {
        get index(): number | null
        get address(): Address | null
        get title(): string | null
        get description(): string | null
        get coinsAmount(): number | null
        get creator(): Address | null
        get funders(): Address[] | null
        get beneficiary(): Address | null
        get releaseDate(): string | null
    }
};

export type StateActions = {
    type: StateTypes,
    payload?: IMainContextStateProps,
};
  
export interface IMainContextProps extends IChildrenProps {
    get mainContextState(): IMainContextStateProps;
    get mainContextDispatch(): Dispatch<StateActions>;
    get loadCards(): (cards: IGiftCardProps[]) => void;
    get updateCurrentCard(): (cardProps: IGiftCardProps) => void;
};