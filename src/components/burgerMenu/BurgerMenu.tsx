import React, { useRef, useState } from 'react'
import css from "./BurgerMenu.module.css";

// const BurgerMenu = ({setHiddenMenuOpened}) => {
const BurgerMenu = () => {
    const burgerMenuRef1 = useRef<HTMLHRElement>(null)
    const burgerMenuRef2 = useRef<HTMLHRElement>(null)
    const burgerMenuRef3 = useRef<HTMLHRElement>(null)
    const burgerMenuCss = "w-12 h-0.5 border-0"
    const burgerMenuCssColor = 'bg-black'
    const cssHr = `${burgerMenuCss} ${burgerMenuCssColor} ${css.burgerMenuAnimation}`

    const [hiddenMenuOpened, setHiddenMenuOpened] = useState(false)

    const handleClick = () => {      
        const refClass1 = burgerMenuRef1?.current?.className ?? null
        if (burgerMenuRef1?.current && burgerMenuRef2?.current && burgerMenuRef3?.current) {
            if(refClass1 === `${cssHr}`) {
                burgerMenuRef1.current.className=`${cssHr} ${css.burgerMenuAnimation1}`
                burgerMenuRef2.current.className=`${cssHr} ${css.burgerMenuAnimation2}`
                burgerMenuRef3.current.className=`${cssHr} ${css.burgerMenuAnimation3}`
                setHiddenMenuOpened(true)
            } else {
                burgerMenuRef1.current.className=`${cssHr}`
                burgerMenuRef2.current.className=`${cssHr}`
                burgerMenuRef3.current.className=`${cssHr}`
                setHiddenMenuOpened(false)
            }   
        }
    }

    return(
        <div className="flexJIC flex-col gap-3 cursor-pointer py-3 md:mr-12" onClick={handleClick}>
            <hr ref={burgerMenuRef1} className={cssHr}/>
            <hr ref={burgerMenuRef2} className={cssHr}/>
            <hr ref={burgerMenuRef3} className={cssHr}/>
        </div>
    )
}

export default BurgerMenu