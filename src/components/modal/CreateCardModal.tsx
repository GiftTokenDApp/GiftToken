import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import Backdrop from "./ModalBackdrop";
import css from "../giftCard/giftCard.module.css";
import { useMainContext } from "../../contexts/MainContext";
import Logo from "../logo/Logo";
import cssLogo from "../giftCard/giftCard.module.css";
import CreateCardForm from "../forms/CreateCardForm";
import { flip } from "./data";
import { useDappContext } from "../../contexts/DappContext";
import { INewCardProps } from "../forms/interface";

type ModalProps = {
  handleClose : () => void,
}

const CreateCardModal: FC<ModalProps> = ({ handleClose }) => {

    const { mainContextState } = useMainContext()
    const { dappContextState, createCard } = useDappContext()
    const [cardMode, setCardMode] = useState(0)    

    //width: clamp(50%, 700px, 90%)
    const cardCss = `w-[800px] h-[825px] flex justify-start items-center flex-col gap-4 relative ${css.card} m-auto px-0 py-8 rounded-3xl text-gtCardLightBLue`
    const cardGTLogo = `w-24 absolute right-4 bottom-8 ${cssLogo.model}`;

    const fund = (newCardData: INewCardProps) => {
      createCard(newCardData);      
      // setCardMode(0)
    }

    return (
      <Backdrop onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}  
            className={cardCss}
            variants={flip}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
           <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='absolute w-12 p-3 bg-slate-500 top-5 right-5 text-white rounded-full cursor-pointer' onClick={handleClose}>X</motion.button>
            {
              cardMode === 0 && <>
                <h2 className='text-3xl'>Création d'une nouvelle carte</h2>
                <CreateCardForm func={fund} />
              </>
            }
            {
              cardMode === 1 && <>
                <h2 className='text-3xl'>Création d'une nouvelle carte</h2>
                <p className='text-2xl'>{ mainContextState?.currentCard?.description }</p>
                <div className='flex justify-center items-start flex-col gap-6 text-xl'>
                  <span>{`Combien voulez-vous donner ?`}</span>
                </div>
                <CreateCardForm func={fund} />
              </>
            }
           <div className={cardGTLogo}>
              <Logo css="" />
            </div>
          </motion.div>
      </Backdrop>
    );
  };
  
  export default CreateCardModal;