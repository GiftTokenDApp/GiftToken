import React, { useRef, useState } from 'react'
import css from "./BurgerMenu.module.css";
import { useModalContext } from '../../contexts/ModalContext';

// const BurgerMenu = ({setHiddenMenuOpened}) => {
const BurgerMenu = () => {
    const burgerMenuRef1 = useRef<HTMLHRElement>(null);
    const burgerMenuRef2 = useRef<HTMLHRElement>(null);
    const burgerMenuRef3 = useRef<HTMLHRElement>(null);
    const burgerMenuCss = "w-12 h-0.5 border-0";
    const burgerMenuCssColor = 'bg-black';
    const cssHr = `${burgerMenuCss} ${burgerMenuCssColor} ${css.burgerMenuAnimation}`;

    const [hiddenMenuOpened, setHiddenMenuOpened] = useState(false);
    const [accountExists, setAccountExists] = useState(false);

    const handleBurgerClick = () => {      
        const refClass1 = burgerMenuRef1?.current?.className ?? null;
        if (burgerMenuRef1?.current && burgerMenuRef2?.current && burgerMenuRef3?.current) {
            if(refClass1 === `${cssHr}`) {
                burgerMenuRef1.current.className=`${cssHr} ${css.burgerMenuAnimation1}`;
                burgerMenuRef2.current.className=`${cssHr} ${css.burgerMenuAnimation2}`;
                burgerMenuRef3.current.className=`${cssHr} ${css.burgerMenuAnimation3}`;
                setHiddenMenuOpened(true);
            } else {
                burgerMenuRef1.current.className=`${cssHr}`;
                burgerMenuRef2.current.className=`${cssHr}`;
                burgerMenuRef3.current.className=`${cssHr}`;
                setHiddenMenuOpened(false);
            }   
        }
    }

    const handleMyMenuClick = (event: any) => {
        event.stopPropagation();
        // useModalContext();
    };

    const handleChatClick = (event: any) => {
        event.stopPropagation();
    };

    const myAccountLib = () => accountExists ? "Mon compte" : "Créer un compte";

    return(
        <div className="flexJIC flex-col gap-3 cursor-pointer py-3 md:mr-12" onClick={handleBurgerClick}>
            <hr ref={burgerMenuRef1} className={cssHr}/>
            <hr ref={burgerMenuRef2} className={cssHr}/>
            <hr ref={burgerMenuRef3} className={cssHr}/>
            {hiddenMenuOpened && 
            <div className="hidden md:flex md:justify-center md:items-center">
                <div className="items-center text-center px-3 py-2 bg-gtCamel text-bg-DarkBLue text-sm font-extrabold">
                    <button type="button" className="px-6 py-2 bg-slate-400 text-white rounded-full cursor-pointer"
                        onClick={handleMyMenuClick}>
                        {myAccountLib()}
                    </button>
                    <br /><br />
                    {accountExists && 
                    <button type="button" className="px-14 py-1 bg-slate-400 text-white rounded-full cursor-pointer"
                        onClick={handleChatClick}>
                        Discuter
                    </button>}
                </div>
            </div>}
        </div>
    )
}

export default BurgerMenu