import React, { FC, useState } from "react"
import { motion } from "framer-motion";
import CircleLoader from "../../loader/CircleLoader";
import { ICloseDAOButtonProps } from "./interface";

const CloseDAOButton: FC<ICloseDAOButtonProps> = ({ title, css, closeDAO, hasSubmitted }) => {

    const [btnState, setBtnState] = useState({ 
        btnTxt: title,
        submitBtnCss: `flexJIC w-64 px-6 py-4 text-2xl text-white text-center rounded-full cursor-pointer ${css}`,
    })
    const cssLoader = "animate-spin h-7 w-7"
    const loaderCss = `${cssLoader} text-white`
    const handleClick = () => {
        hasSubmitted ? setBtnState({
            btnTxt: title,
            submitBtnCss: btnState.submitBtnCss,
        }) : setBtnState({
            btnTxt: "",
            submitBtnCss: `${btnState.submitBtnCss} flexJIC`,
        })
    }
    
    const handleClickBtn = () => {
        if(!hasSubmitted){
            handleClick();
            closeDAO();
        }      
    }

    return (
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="submit" className={btnState.submitBtnCss} onClick={() => handleClickBtn()}>
            { hasSubmitted ? <CircleLoader loaderCss={loaderCss} /> : btnState.btnTxt }
        </motion.button>
    )
}

export default CloseDAOButton;