import React from 'react';
import { IChildrenProps as IProvidersIndexProps } from '../../helpers/interfacesHelpers'
import MainContextProvider from "../../contexts/MainContext/MainContextProvider"
import DappContextProvider from '../../contexts/DappContext/DappContextProvider';
import ModalContextProvider from '../../contexts/ModalContext/ModalContextProvider';

const ProvidersIndex: React.FC<IProvidersIndexProps> = ({ children }) => {

return (
        <DappContextProvider>
            <MainContextProvider>
                <ModalContextProvider>
                    {children}
                </ModalContextProvider>
            </MainContextProvider>
        </DappContextProvider>
    )
}

export default ProvidersIndex