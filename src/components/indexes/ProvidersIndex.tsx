import React from 'react';
import { IChildrenProps as IProvidersIndexProps } from '../../helpers/interfacesHelpers'
import MainContextProvider from "../../contexts/MainContext/MainContextProvider"
import AuthContextProvider from '../../contexts/AuthContext';
import ModalContextProvider from '../../contexts/ModalContext/ModalContextProvider';

const ProvidersIndex: React.FC<IProvidersIndexProps> = ({ children }) => {

return (
    <AuthContextProvider>
        <MainContextProvider>
            <ModalContextProvider>
                {children}
            </ModalContextProvider>
        </MainContextProvider>
    </AuthContextProvider>
    )
}

export default ProvidersIndex