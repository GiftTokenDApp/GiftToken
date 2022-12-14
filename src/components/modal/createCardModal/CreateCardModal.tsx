import React from "react";
import { motion } from "framer-motion";
import Backdrop from "../backdropModal/ModalBackdrop";
import css from "../../elements/giftCard/giftCard.module.css";
import Logo from "../../elements/logo/Logo";
import { flip } from "./data";
import { useDappContext } from "../../../contexts/DappContext";
import { INewCardProps } from "../../elements/forms/INewCardProps";
import CreateCardForm from "../../elements/forms/CreateCardForm";

type ModalProps = {
  handleClose : () => void,
}

const CreateCardModal: React.FC<ModalProps> = ({ handleClose }) => {

    const { dappContextState, createCard } = useDappContext()

    //width: clamp(50%, 700px, 90%)
    const cardCss = `w-[800px] h-[825px] flex justify-start items-center flex-col gap-4 relative ${css.card} m-auto px-0 py-8 rounded-3xl text-gtCardLightBLue`
    const cardGTLogo = `w-24 absolute right-4 bottom-8 ${css.model}`;

    const fund = (newCardData: INewCardProps) => {
      createCard(newCardData);      
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
           <h2 className='text-3xl'>Création d'une nouvelle carte</h2>
            {
              !dappContextState.displayEvent && <>
                <CreateCardForm func={fund} />
              </>
            }
            {
              dappContextState.displayEvent && <>
                <div className='h-full flexJIC flex-col gap-12 text-3xl text-center'>
                  <h3>Nouvelle carte créée avec succès !</h3>
                  <div>Adresse de la carte : 
                    <span className="text-white">{` ${dappContextState.lastEvent?.address}`}</span>
                  </div>
                  <div>Somme versée à la création : 
                    <span className="text-white">{` ${dappContextState.lastEvent?.amount} `}</span>
                    eth
                  </div>
                </div>
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