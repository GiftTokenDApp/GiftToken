import React, { FC } from "react";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import SigninButton from "../buttons/signinbutton/SigninButton";
import Logo from "../logo/Logo";
import { useAuth } from '../../contexts/AuthContext';
import { formatETHAddress } from "../../helpers/functionsHelpers";

type HeaderProps = {
  headerType: string,
}

const Header: FC<HeaderProps> = ({ headerType }) => {

  const { currentUser } = useAuth()

  const cssHeader = "w-full py-12 gap-3 z-50 md:flex-row md:justify-between md:h-36 md:py-0 md:gap-4";
  const headerCSS = headerType ==="homePage" ? `${cssHeader} h-28 flexJIC bg-gtYellow` : `${cssHeader} h-40 flexJIC flex-col md:justify-between` 
  const ShortenedCurrentUserAddress = formatETHAddress(currentUser?.address ?? "");

  return (
    <header className={headerCSS}>
        <div className="w-1/3 flex justify-start items-center">
          <Logo css="w-32 cursor-pointer md:ml-16 md:mb-2" />
        </div>
        {        
          headerType ==="homePage" && <div className="w-1/3 hidden md:flex md:justify-center md:items-center">
            <span className="flex justify-center items-center text-center px-4 py-4 bg-gtCamel rounded-full text-bg-DarkBLue text-2xl font-extrabold">{ShortenedCurrentUserAddress}</span>
          </div>
        }
        <div className="w-1/3 flex justify-evenly text-xl font-medium md:w-1/3 md:justify-around">
            <div className="w-full h-14 flexJIC md:hidden">
              {
                headerType ==="landingPage" && <SigninButton title="Connexion" css="btnHeaderGray"/>
              }
              {
                headerType ==="homePage" && <BurgerMenu />
              }
            </div>
            <div className="w-full hidden md:block">
              <div className="w-full flex justify-end items-start">
                {
                  headerType ==="landingPage" && <SigninButton title="Connexion" css="btnHeaderGray"/>
                }
                {
                  headerType ==="homePage" && <BurgerMenu />
                }
              </div>
            </div>
        </div>
    </header>
  )
}

export default Header