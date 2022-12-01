import React, { FC, useState } from 'react'
import CircleLoader from '../../loader/CircleLoader'
import IGTCardButtonProps from './interface'

const GtCardButton: FC<IGTCardButtonProps> = ({ title, css, func }) => {

    const [btnState, setBtnState] = useState({ 
        btnTxt: title,
        displayLoader: false,
        btnCss: css,
    })

    const btnCss = `${btnState.btnCss}`
    const cssLoader = "animate-spin h-7 w-7"
    const loaderCss = css === "btnHeaderGray" ? `${cssLoader} text-lightTurquoise` : css === "btnGray" ? `${cssLoader} text-lightTurquoise` : `${cssLoader} text-darkerGray`
    const handleClick = () => {
        func && func(title)
        css === "btnHeaderGray" ? btnState.displayLoader ? setBtnState({
            btnTxt: title,
            displayLoader: false,
            btnCss: css,
        }) : setBtnState({
            btnTxt: "",
            displayLoader: true,
            btnCss: "btnHeaderGray-clicked",
        }) :  btnState.displayLoader ? setBtnState({
            btnTxt: title,
            displayLoader: false,
            btnCss: css,
        }) : setBtnState({
            btnTxt: "",
            displayLoader: true,
            btnCss: css,
        })
    }

  return (
    <button type="button" className={btnCss} onClick={() => handleClick()} >
        { btnState.displayLoader ? <CircleLoader loaderCss={loaderCss} /> : btnState.btnTxt }
    </button>
  )
}

export default GtCardButton