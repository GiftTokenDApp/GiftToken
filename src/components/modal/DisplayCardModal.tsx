import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import Backdrop from "./ModalBackdrop";
import css from "../giftCard/giftCard.module.css";
import { useMainContext } from "../../contexts/MainContext";
import { formatETHAddress } from "../../helpers/functionsHelpers";
import Logo from "../logo/Logo";
import cssLogo from "../giftCard/giftCard.module.css";
import FundCardForm from "../forms/FundCardForm";
import IGiftCardProps from "../giftCard/interface";
import { flip } from "./data";

type ModalProps = {
  handleClose : () => void,
}

const Modal: FC<ModalProps> = ({ handleClose }) => {

    const { mainContextState, updateCurrentCard } = useMainContext()
    const [cardMode, setCardMode] = useState(0)    

    //width: clamp(50%, 700px, 90%)
    const cardCss = `w-[800px] h-[500px] flex items-center justify-between flex-col relative ${css.card} m-auto px-0 py-8 rounded-3xl text-gtCardLightBLue`
    const cardGTLogo = `w-24 absolute right-4 bottom-8 ${cssLogo.model}`;

    const shortenedCardAddress = formatETHAddress(mainContextState?.currentCard?.address ?? "");
    const shortenedCreatorAddress = formatETHAddress(mainContextState?.currentCard?.creator ?? "");
    const shortenedFoundersAddresses = mainContextState?.currentCard?.funders?.map((addr, index) => index === 0 ? formatETHAddress(addr) : ` ${formatETHAddress(addr)}`);
    const shortenedBeneficiaryAddress = formatETHAddress(mainContextState?.currentCard?.beneficiary ?? "") ? `Elle est pour ${formatETHAddress(mainContextState?.currentCard?.beneficiary ?? "")}` : "Pas de bénéficiaire désigné";

    const currentCoinsAmount = mainContextState?.currentCard?.coinsAmount && mainContextState?.currentCard?.coinsAmount <= 0 ? "Elle ne contient pas de fonds" : mainContextState?.currentCard?.coinsAmount && mainContextState?.currentCard?.coinsAmount < 2 ? `Elle contient ${mainContextState?.currentCard?.coinsAmount} ether` : `Elle contient ${mainContextState?.currentCard?.coinsAmount} ethers`;

    const fund = (newCardData: IGiftCardProps) => {
      updateCurrentCard(newCardData);      
      setCardMode(0)
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
                <h2 className='text-3xl'>{ mainContextState?.currentCard?.title }</h2>
                <h3 className='text-2xl'>{ shortenedCardAddress }</h3>
                <p className='text-2xl'>{ mainContextState?.currentCard?.description }</p>
                <div className='flex justify-center items-start flex-col gap-6 text-xl'>
                  <span>{`Cette carte a été créée par ${ shortenedCreatorAddress }`}</span>
                  <span>{`Elle a été financée par ${ shortenedFoundersAddresses }`}</span>
                  <span>{ shortenedBeneficiaryAddress }</span>
                  <span>{ currentCoinsAmount }</span>
                </div>
                <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='w-44 p-4 bg-slate-500 text-white text-xl rounded-full cursor-pointer' onClick={() => setCardMode(1)}>Participer</motion.button>
              </>
            }
            {
              cardMode === 1 && <>
                <h2 className='text-3xl'>{ mainContextState?.currentCard?.title }</h2>
                <h3 className='text-2xl'>{ shortenedCardAddress }</h3>
                <p className='text-2xl'>{ mainContextState?.currentCard?.description }</p>
                <div className='flex justify-center items-start flex-col gap-6 text-xl'>
                  <span>{`Combien voulez-vous donner ?`}</span>
                </div>
                <FundCardForm func={fund} currentCard={mainContextState.currentCard} />
              </>
            }
           <div className={cardGTLogo}>
              <Logo css="" />
            </div>
          </motion.div>
      </Backdrop>
    );
  };
  
  export default Modal;