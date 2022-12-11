import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Backdrop from "../backdropModal/ModalBackdrop";
import css from "../giftCard/giftCard.module.css";
import { flip } from "./data";
import { useDappContext } from "../../contexts/DappContext";
import { IUserProps } from "../forms/IUserProps";
import ChatForm from "../forms/ChatForm";

type ModalProps = {
  handleClose : () => void,
}

const ChatModal: React.FC<ModalProps> = ({ handleClose }) => {

    //width: clamp(50%, 700px, 90%)
    const cardCss = `w-[700px] h-[425px] flex justify-start items-center flex-col gap-4 relative ${css.card} m-auto px-0 py-8 rounded-3xl text-gtCardLightBLue`;

    const { dappContextState, getCurrentUserExists, getCurrentUser } = useDappContext();

    const [accountExists, setAccountExists] = useState(false);
    const [titleLib, setTitleLib] = useState("");
    const [user, setUser] = useState<IUserProps | null>(null);
 
    useEffect(() => {
      init();
    }, []);
    
    const init = async() => {
      let title: string = "Chat";
      const userExists: boolean = await getCurrentUserExists();
      setAccountExists(userExists);

      if (userExists) {
        const user: IUserProps | null = await getCurrentUser();
        setUser(user);
        
        if (user != null) {
          title = `${title} de ${user.pseudo}`;
        }
      }
      else {
        setUser(null);
      }

      setTitleLib(title);
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
              <ChatForm user={user}/>
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
  
  export default ChatModal;