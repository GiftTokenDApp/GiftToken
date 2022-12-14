import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Backdrop from "../backdropModal/ModalBackdrop";
import css from "../../elements/giftCard/giftCard.module.css";
import { flip } from "./data";
import { useDappContext } from "../../../contexts/DappContext";
import { IUserProps } from "../../elements/forms/IUserProps";
import AccountForm from "../../elements/forms/AccountForm";

type ModalProps = {
  handleUpdate : () => Promise<void>,
  handleClose : () => void,
}

const AccountModal: React.FC<ModalProps> = ({ handleUpdate, handleClose }) => {

    //width: clamp(50%, 700px, 90%)
    const cardCss = `w-[700px] h-[425px] flex justify-start items-center flex-col gap-4 relative ${css.card} m-auto px-0 py-8 rounded-3xl text-gtCardLightBLue`;

    const { dappContextState, getCurrentUserExists, getCurrentUser, setCurrentUser } = useDappContext();

    const [accountExists, setAccountExists] = useState(false);
    const [titleLib, setTitleLib] = useState("");
    const [user, setUser] = useState<IUserProps | null>(null);
 
    const handleFormSubmission = async (data: IUserProps) => {
      await setCurrentUser(data.pseudo, data.ipfsLink ?? "");
      await handleUpdate();
      await handleClose();
    }

    useEffect(() => {
      init();
    }, []);
    
    const init = async() => {
      const userExists: boolean = await getCurrentUserExists();
      setAccountExists(userExists);

      if (userExists) {
        setTitleLib("Mettre à jour mon compte");
        const user: IUserProps | null = await getCurrentUser();
        setUser(user);
      }
      else {
        setTitleLib("Créer mon compte");
        setUser(null);
      }
    };

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
           <h2 className='text-3xl'>{titleLib}</h2>
            {
              <AccountForm user={user} func={handleFormSubmission}/>
            }
            {
              dappContextState.displayEvent && <>
                <div className='h-full flexJIC flex-col gap-12 text-3xl text-center'>
                </div>
              </>
            }
          </motion.div>
      </Backdrop>
    );
  };
  
  export default AccountModal;