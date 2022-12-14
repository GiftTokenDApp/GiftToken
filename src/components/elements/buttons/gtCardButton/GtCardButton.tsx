import React from 'react'
import { motion } from "framer-motion"
import IGTCardButtonProps from './interface'

const GtCardButton: React.FC<IGTCardButtonProps> = ({ title, css, func }) => {

    const handleClick = () => {
        func && func(title)
    }

  return (
    <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="button" className={css} onClick={() => handleClick()} >
        { title }
    </motion.button>
  )
}

export default GtCardButton