import React, { FC, useState } from 'react';
import { motion } from "framer-motion"
import ISigninButtonProps from './interface';
import CircleLoader from '../../loader/CircleLoader';
import { useAuth } from '../../../contexts/AuthContext';

const SigninButton: FC<ISigninButtonProps> = ({ title, css }) => {

  const { login } = useAuth()
  const [btnState, setBtnState] = useState({ 
    btnTxt: title,
    displayLoader: false,
    btnCss: css,
  })
  const btnCss = `${btnState.btnCss}`
  const cssLoader = "animate-spin h-7 w-7"
  const loaderCss = css === "btnHeaderGray" ? `${cssLoader} text-lightTurquoise` : css === "btnGray" ? `${cssLoader} text-lightTurquoise` : `${cssLoader} text-darkerGray`
  const handleClick = () => {
    login(true)
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
    <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="button" className={btnCss} onClick={() => handleClick()} >
        { btnState.displayLoader ? <CircleLoader loaderCss={loaderCss} /> : btnState.btnTxt }
    </motion.button>
  )
}

export default SigninButton