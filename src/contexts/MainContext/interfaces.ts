import { Dispatch } from "react";
// import { ethers } from "ethers";
// import IGiftCardProps from "../../components/giftCard/interface";
import { IChildrenProps } from "../../helpers/interfacesHelpers";
// import { Address } from "../../helpers/typesHelpers";

export enum StateTypes {
    RESET = 'RESET',
    // FUND = 'FUND',
    UPDATE = 'UPDATE',
};

export type IMainContextStateProps = {
    get isContractAvailable() : boolean
    // get currentCard(): IGiftCardProps
    // get currentCard(): {
    //     address: Address,
    //     contract: ethers.Contract,
    //     title: string,
    //     description: string,
    //     creationDate: number,
    //     goal: number,
    //     creator: Address,
    //     funders: Address[],
    //     beneficiary: Address,
    //     status: number,
    //     releaseDate: number,
    //     get coinsAmount(): number,
    // }
};

export type StateActions = {
    type: StateTypes,
    payload?: IMainContextStateProps,
};
  
export interface IMainContextProps extends IChildrenProps {
    get mainContextState(): IMainContextStateProps;
    get mainContextDispatch(): Dispatch<StateActions>;
    // get updateCurrentCard(): (cardProps: IGiftCardProps) => void;
};