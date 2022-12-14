import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Backdrop from "../backdropModal/ModalBackdrop";
import css from "../../elements/giftCard/giftCard.module.css";
import { flip } from "./data";
import { useDappContext } from "../../../contexts/DappContext";
import { MessageStructOutput } from "../../../typechain-types/contracts/GiftNetwork";
import { Address } from "../../../helpers/typesHelpers";
import { IUserProps } from "../../elements/forms/IUserProps";
import { IChatContactProps } from "../../elements/forms/IChatContactProps";
import ChatContactForm from "../../elements/forms/ChatContactForm";
import ChatSendForm from "../../elements/forms/ChatSendForm";

type ModalProps = {
  handleClose : () => void,
}

const ChatModal: React.FC<ModalProps> = ({ handleClose }) => {

    //width: clamp(50%, 700px, 90%)
    const cardCss = `w-[700px] h-[755px] flex justify-start items-center flex-col gap-4 relative ${css.card} m-auto px-0 py-8 rounded-3xl text-gtCardLightBLue`;

    const { dappContextState, getCurrentUserExists, getCurrentUser, readMessage } = useDappContext();

    const [accountExists, setAccountExists] = useState(false);
    const [titleLib, setTitleLib] = useState("");
    const [user, setUser] = useState<IUserProps | null>(null);
    const [contact, setContact] = useState<IChatContactProps | null>(null);
    const [messages, setMessages] = useState<MessageStructOutput[]>([]);
 
    const handleContactFormSubmission = async (chatContact: IChatContactProps | null): Promise<void> => {

      if (chatContact != null) {
        setContact(chatContact);

        if (chatContact.address != null && chatContact.address != '') {
          const messages: MessageStructOutput[] = await readMessage(chatContact.address);
          setMessages(messages);
        }
        else {
          setMessages([]);
        }
      }
      else {
        setContact(null);
        setMessages([]);
      }
    }

    useEffect(() => {
      init();
    }, [contact]);
    
    const formatMessages = (): string => {

      if (messages == null || !messages.length) {
        return '';
      }

      let result = '';

      for (let message of messages) {
        result += formatMessage(message);
      }

      return result;
    }

    const formatMessage = (rawMessage : MessageStructOutput): string => {
      
      if (rawMessage == null) {
        return '';
      }

      const sender: Address = rawMessage[0];
      const date: Date = new Date(rawMessage[1].toNumber() * 1000);
      const message: string = rawMessage[2];
      const isCurrentUser: boolean = sender !== contact?.address;

      const userName: string = isCurrentUser ? user?.pseudo ?? '': contact?.pseudo ?? '';
      let result: string = `${formatDateToStrong(date)} - ${userName} : <i>${message}</i><br />`;

      if (!isCurrentUser) {
        result = `<span style="color:red">${result}</span>`;
      }

      return result;
    }

    const formatDateToStrong = (date: Date): string => {
      return date.toISOString().replace('T', ' ').slice(0, -5);
    }

    const init = async() => {
      let title: string = "Chat";
      const userExists: boolean = await getCurrentUserExists();
      setAccountExists(userExists);

      if (userExists) {
        const user: IUserProps | null = await getCurrentUser();
        setUser(user);
        
        if (user != null) {
          title = `${title} de ${user.pseudo}`;

          if (contact != null) {
            title = `${title} avec ${contact.pseudo ?? 'un inconnu'}`;
          }
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
              <>
                <ChatContactForm func={handleContactFormSubmission}/>
                { contact && <>
                    <br />
                    <div className="block p-2.5 w-[80%] h-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      dangerouslySetInnerHTML={{ __html: formatMessages() }}>
                    </div>
                    <ChatSendForm contact={contact}/>
                  </>
                }
              </>
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