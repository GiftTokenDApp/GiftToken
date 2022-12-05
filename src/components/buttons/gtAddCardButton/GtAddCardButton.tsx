import React from 'react'
import { motion } from "framer-motion";
import Plus from '../../plus/Plus';
import { useModalContext } from '../../../contexts/ModalContext';

const GtAddCardButton: React.FC = () => {

    const { addCardModal } = useModalContext()

    return (
        <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="button" className="w-48 h-48 flexJIC py-4 px-10 mb-32 rounded-full text-center text-xl font-medium text-darkGray hover:bg-darkGray hover:text-lighterTurquoise disabled:bg-darkGrey disabled:text-lightGrey" onClick={() => addCardModal()} >
            <Plus />
        </motion.button>
    )
};

export default GtAddCardButton;