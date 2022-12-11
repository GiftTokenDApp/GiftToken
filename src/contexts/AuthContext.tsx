import React, { useState, useEffect, createContext, useContext, useMemo, useCallback, FC, Dispatch, SetStateAction } from "react"
import { IChildrenProps } from '../helpers/interfacesHelpers'
import { Address } from "../helpers/typesHelpers";
import { accounts } from "../helpers/dataHelpers";
import { useDappContext } from "./DappContext";

interface ICurrentUserProps {
  address: Address | null,
}

interface IAuthContextProps extends IChildrenProps {
  get currentUser() :  ICurrentUserProps | null,
  get loading(): boolean,
  get setLoading(): Dispatch<SetStateAction<boolean>>,
  login : (log: boolean) => void,
  logout : () => void,
  get setLoggedIn(): Dispatch<SetStateAction<boolean>>,
}

const AuthContext = createContext<IAuthContextProps | null>(null)

const AuthContextProvider: FC<IChildrenProps> = ({ children }) => {

  const { dappContextState } = useDappContext();

  const [currentUser, setCurrentUser] = useState<ICurrentUserProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    (dappContextState.currentAccount != null && loggedIn ) ? authCheck(dappContextState.currentAccount) : authCheck(null);

    return () => {
      authCheck(null)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accounts, loggedIn])
  
  const authCheck = (userAccountPrivateKey : Address | null) => {
    if (userAccountPrivateKey) {
      const newUser: ICurrentUserProps = {
        address: userAccountPrivateKey,
      }
      setCurrentUser(newUser);
    } else {
      setCurrentUser(null);
    }
  }

  const login = useCallback((log: boolean = false) => {
    setLoggedIn(log);
  }, [])

  const logout = useCallback(() => {
    return authCheck(null)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const contextValues: IAuthContextProps = useMemo(
    () => ({
      currentUser,
      loading,
      setLoading,
      login,
      logout,
      setLoggedIn,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      currentUser,
      loading,
    ]
  )

  return <AuthContext.Provider value={contextValues}>{children}</AuthContext.Provider>
}

export default AuthContextProvider

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error(
      "useAuth doit être utilisé dans le context adéquat"
    )
  }

  return context
}