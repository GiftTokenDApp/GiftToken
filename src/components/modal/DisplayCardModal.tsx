import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import Backdrop from "./ModalBackdrop";
import css from "../giftCard/giftCard.module.css";
import { formatETHAddress } from "../../helpers/functionsHelpers";
import Logo from "../logo/Logo";
import cssLogo from "../giftCard/giftCard.module.css";
import FundCardForm from "../forms/FundCardForm";
import { flip } from "./data";
import { useDappContext } from "../../contexts/DappContext";

type ModalProps = {
  handleClose : () => void,
}

const Modal: FC<ModalProps> = ({ handleClose }) => {

    const { dappContextState, giveToCard } = useDappContext();
    const [cardMode, setCardMode] = useState(0)    

    //width: clamp(50%, 700px, 90%)
    const cardCss = `w-[800px] h-[600px] flex items-center justify-between flex-col gap-6 relative ${css.card} m-auto px-0 py-8 rounded-3xl text-gtCardLightBLue`
    const cardGTLogo = `w-24 absolute right-4 bottom-8 ${cssLogo.model}`;

    const shortenedCardAddress = formatETHAddress(dappContextState?.currentCard?.address ?? "");
    const shortenedCreatorAddress = formatETHAddress(dappContextState?.currentCard?.creator ?? "");
    const shortenedFoundersAddresses = dappContextState?.currentCard?.funders?.map((addr, index) => index === 0 ? formatETHAddress(addr) : ` ${formatETHAddress(addr)}`);
    const shortenedBeneficiaryAddress = formatETHAddress(dappContextState?.currentCard?.beneficiary ?? "") ? `Elle est pour ${formatETHAddress(dappContextState?.currentCard?.beneficiary ?? "")}` : "Pas de bénéficiaire désigné";

    const currentCoinsAmount = dappContextState?.currentCard?.coinsAmount && dappContextState?.currentCard?.coinsAmount <= 0 ? "Elle ne contient pas de fonds" : dappContextState?.currentCard?.coinsAmount && dappContextState?.currentCard?.coinsAmount < 2 ? `Elle contient ${dappContextState?.currentCard?.coinsAmount} ether` : `Elle contient ${dappContextState?.currentCard?.coinsAmount} ethers`;

    const fund = (amountToSend: number) => {
      giveToCard(amountToSend);      
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
           <div className="flexJIC flex-col gap-6">
              <h2 className='text-3xl'>{ dappContextState?.currentCard?.title }</h2>
              <h3 className='text-2xl'>{ shortenedCardAddress }</h3>
              <p className='text-2xl'>{ dappContextState?.currentCard?.description }</p>
           </div>
            {
              !dappContextState.displayEvent && cardMode === 0 && <>
                <div className='flex justify-center items-start flex-col gap-6 text-xl px-12'>
                  <span>{`Cette carte a été créée par ${ shortenedCreatorAddress }`}</span>
                  <span>{`Elle a été financée par ${ shortenedFoundersAddresses }`}</span>
                  <span>{ shortenedBeneficiaryAddress }</span>
                  <span>{ currentCoinsAmount }</span>
                </div>
                <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='w-44 p-4 mb-4 bg-slate-500 text-white text-xl rounded-full cursor-pointer' onClick={() => setCardMode(1)}>Participer</motion.button>
              </>
            }
            {
              !dappContextState.displayEvent && cardMode === 1 && <>
                <div className='flex justify-center items-start flex-col gap-6 text-xl'>
                  <span>{`Combien voulez-vous donner ?`}</span>
                </div>
                {
                  dappContextState.currentCard && <FundCardForm func={fund} />
                }
              </>
            }
            {
              dappContextState.displayEvent && <>
                <div className='flexJIC flex-col mb-52 gap-12 text-3xl text-center'>
                  <h3>La carte a bien été créditée de <span className="text-white">{ dappContextState.lastEvent?.amount }</span> eth</h3>
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
  
  export default Modal;