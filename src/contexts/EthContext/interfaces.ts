// import { Dispatch } from "react";
// import { IChildrenProps } from "../../helpers/interfacesHelpers";
// import { Address } from "../../helpers/typesHelpers";

import { Dispatch } from "react";
import { IChildrenProps } from "../../helpers/interfacesHelpers";

export enum StateTypes {
    RESET = 'RESET',
    UPDATE = 'UPDATE',
};

export type IEthContextStateProps = {
    artifact: any,
    // web3: any,
    accounts: any,
    // networkID: any,
    contract: any,
}

export type StateActions = {
    type: StateTypes,
    payload?: IEthContextStateProps,
};

export interface IEthContextProps extends IChildrenProps {
    get mainContextState(): IEthContextStateProps;
    get mainContextDispatch(): Dispatch<StateActions>;
}