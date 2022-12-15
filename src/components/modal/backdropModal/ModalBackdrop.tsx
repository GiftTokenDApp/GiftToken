import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type ModalBackdropProps = {
  children: ReactNode,
  onClick: () => void,
}

const ModalBackdrop: React.FC<ModalBackdropProps> = ({ children, onClick }) => {

  const backdropCss = `h-screen w-full flexJIC z-50 bg-backdropBlack absolute top-0 left-0`;

  return(
    <motion.div id="modalBackdrop" className={backdropCss} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => onClick()}>
      {children}
    </motion.div>
  )
}

export default ModalBackdrop;
