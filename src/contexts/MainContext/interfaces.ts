import { Dispatch } from "react";
import { IChildrenProps } from "../../helpers/interfacesHelpers";

export enum StateTypes {
    RESET = 'RESET',
    // FUND = 'FUND',
    UPDATE = 'UPDATE',
};

export type IMainContextStateProps = {
    get isContractAvailable() : boolean
};

export type StateActions = {
    type: StateTypes,
    payload?: IMainContextStateProps,
};
  
export interface IMainContextProps extends IChildrenProps {
    get mainContextState(): IMainContextStateProps;
    get mainContextDispatch(): Dispatch<StateActions>;
};